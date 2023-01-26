import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useApp } from "../Contexts/appContext";

import "./SearchPage.css";

import selectedIcon from '../attachments/selected.svg'
import emptySelectedIcon from "../attachments/selectedEmpty.svg"

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
  const { setbooks, books, fetchForSuggestion } = useApp()
  const [selectedList, setSelectedList] = useState([]);
  const [showSelected, setShowSelected] = useState(false)

  const navigate = useNavigate()
  const toRecommendedBooks = () => { navigate('/RecommendedBooks') }

  function handleSuggestButton() {
    fetchForSuggestion(selectedList)
    toRecommendedBooks()
  }

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



  return (
    <div className="search-page">
      <div className="search-header">
        <p className="welcome-user">Enter your favorite books</p>
        <p style={(selectedList.length > 4 ? { color: '#09FBD3' } : {})}>{selectedList.length}/5</p>
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
            <li key={index} onClick={() => {
              if (selectedList.length < 5) {
                const findBook = selectedList.indexOf(book.bookId);
                if (findBook < 0) {
                  setSelectedList([...selectedList, book.bookId])
                } else {
                  const newArray = selectedList.filter(id => id !== book.bookId)
                  setSelectedList(newArray)
                }
              } else {
                const newArray = selectedList.filter(id => id !== book.bookId)
                setSelectedList(newArray)
              }
            }}>{book.title}{selectedList.indexOf(book.bookId) > -1 ? <img className="selectedIcon" id="selectedIcon" src={selectedIcon} alt="selectedIcon" /> : <img className="unselectedIcon" src={emptySelectedIcon} alt="notSelectedIcon" />}</li>
          ))}
        </ul>
        <div>
          <button id="recommend-button" onClick={handleSuggestButton}>Suggest me new one</button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;