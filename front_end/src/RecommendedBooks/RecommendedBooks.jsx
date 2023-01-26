import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RecommendedBooks.css";

import LoadingSpinner from "../attachments/LoadingSpinner.svg";
import { useApp } from "../Contexts/appContext";

const RecommendedBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();


  const handleBookClick = (book) => {
    navigate(`/BookPage?id=${book.bookId}`);
  };

  const { suggestions } = useApp()

  useEffect(() => {
  }, [suggestions])


  return (
    <>
      {suggestions.length === 0 ? (
        <>
          <h3 id="loadingTitle">Connecting The Dots...</h3>
          <img id="spinner" src={LoadingSpinner} alt="loading" />
        </>) : (
        <div className="recommended-books-main-container">

          <div className="recommended-books-text">
            <h2 className="recommended-books-title">Here's your list buddy!</h2>
            <p>
              These are the books that will help you learn from your target
              culture.
            </p>
            <div className="recommended-books-container">
              {suggestions?.map((book) => (
                <div key={book.bookId} onClick={() => handleBookClick(book)}>
                  <img src={book.coverImg} alt={book.title} className="book-pic" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecommendedBooks;
