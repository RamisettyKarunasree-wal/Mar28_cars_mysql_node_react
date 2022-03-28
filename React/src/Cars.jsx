import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Cars() {
  const [cars, setCars] = useState([]);
  const getCar = () => {
    axios
      .get('/cars')
      .then((res) => {
        console.log(res.data);
        setCars(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCar();
  }, []);
  const addCar = (event) => {
    event.preventDefault();
    const obj = {
      carname: event.target.carname.value,
      instock: event.target.instock.value,
      price: event.target.price.value,
      color: event.target.color.value,
    };
    axios.post('/cars', obj).then((res) => {
      getCar();
      console.log(res.data);
    });
  };
  const deleteItem = (id) => {
    axios.delete(`/cars/${id}`).then((res) => {
      console.log(res.data);
      getCar();
    });
  };
  const deleteAll = () => {
    axios.delete('/cars').then((res) => {
      console.log(res.data);
      getCar();
    });
  };
  return (
    <div className="container">
      <div className="form">
        <h1>Add Car</h1>
        <form onSubmit={addCar}>
          <div>
            <b>Enter Car name:</b>
          </div>
          <input type="text" placeholder="enter Car name" name="carname" />
          <br />
          <div>
            <b>Enter Price:</b>
          </div>
          <input type="number" placeholder="enter Price" name="price" />
          <br />
          <div>
            <b>Select Color:</b>
          </div>
          <select name="color" placeholder="Select Category">
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="grey">Grey</option>
          </select>
          <br />
          <div>
            <b>Availability:</b>
          </div>
          <select name="instock" placeholder="Select Category">
            <option value={0}>Available</option>
            <option value={1}>Not Available</option>
          </select>
          <br />
          <button type="submit">Add Car</button>
        </form>
        <button type="button" onClick={() => deleteAll()}>
          Delete all Cars
        </button>
      </div>
      <div className="list">
        <h1>Cars List</h1>
        <div className="list-box">
          <table>
            <tr>
              <th>Car Name</th>
              <th>Color</th>
              <th>Price</th>
              <th>In Stock</th>
              <th>Delete</th>
            </tr>
            {cars.map((car) => (
              <tr>
                <td>{car.carname}</td>
                <td>{car.color}</td>
                <td>{car.price}</td>
                <td>{car.instock}</td>
                <td>
                  <button
                    className="del-btn"
                    onClick={() => {
                      deleteItem(car.id);
                    }}
                    type="button"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
export default Cars;
