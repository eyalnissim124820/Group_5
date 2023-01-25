import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "./SearchPage.css";
import { useEffect } from "react";
import { useApp } from "../Contexts/appContext";

const usermock = { name: "user1", lastname: "lastname" }


function debounce(callBack, timeout = 500) {
  let timer;
  return (arg) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      return callBack(arg);
    }, timeout);
  };
}


const SearchPage = () => {

  const { setbooks, books } = useApp()

  const [search, setsearch] = useState({
    title: "",
  });

  const handleSearch = async () => {
    try {
      const res = await axios.post("http://localhost:8080/search", search);
      setbooks(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const debounced = debounce(() => handleSearch())
    debounced()
  }, [search])


  const navigate = useNavigate()
  const toRecommendedBooks = () => { navigate('/RecommendedBooks') }
  return (
    <div className="search-page">
      <div className="search-header">
        <p className="welcome-user">Enter your favorite books</p>
      </div>
      <div className="page-body">
        <input
          type="text"
          onChange={(e) => { setsearch({ ...search, title: e.target.value }) }}
          required="required"
          placeholder="Search here..."
        ></input>
        <ul className="search-list">
          {books?.map((book, index) => (
            <li key={index}>{book.title}</li>
          ))}
        </ul>
        <div>
          <button id="recommend-button" onClick={toRecommendedBooks}>Suggest me new one</button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;