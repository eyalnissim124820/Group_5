import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "./SearchPage.css";
import { useEffect } from "react";

const usermock = {name: "user1", lastname: "lastname"}
const books = [
    { name: "book1" },
    { name: "book2" },
    { name: "book3" },
    { name: "book4" },
];

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

  

  const [search, setsearch] = useState({
    search: "",
  });

  const handleSearch = async () => {
    try {
      // const res = await axios.post("http://localhost:8080/search", search);
      // console.log(res.data);
      console.log(Date.now());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect (() => {
    debounce(()=> handleSearch())
    console.log(search)

  }, [search])


  const navigate = useNavigate()
  const toRecommendedBooks = () => { navigate('/RecommendedBooks') }
  return (
    <div>
        <div>
            <h1>Welcome {usermock.name}{usermock.lastname}</h1>
        </div>
      <div className="navsearch">
        <input
          type="text"
          onChange={(e) => {setsearch({...search, search: e.target.value})}}
          required="required"
          placeholder="Search here..."
        ></input>
        <div>
          {books.map((book, index) => (
            <div key={index}>
              <h1>{book.name}</h1>
            </div>
          ))}
        </div>
        <div>
            <button onClick={toRecommendedBooks}>Suggest me new one</button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;