import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://basic-mysql-app-backend-production.up.railway.app/books",
        book
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="desc"
        name="desc"
      />
      <input
        type="number"
        onChange={handleChange}
        placeholder="price"
        name="price"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="cover image"
        name="cover"
      />
      <button className="formButton" onClick={handleClick}>
        Add Book
      </button>
    </div>
  );
};

export default Add;
