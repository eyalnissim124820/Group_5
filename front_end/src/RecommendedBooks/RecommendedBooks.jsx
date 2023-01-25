import React from "react";

import "./RecommendedBooks.css";

import BookCover from "./book-cover.jpeg";
import LoadingSpinner from '../attachments/LoadingSpinner.svg'


const RecommendedBooks = () => {

  return (
    <>
      {false ?
        <>
          <h3 id="loadingTitle">Connecting The Dots...</h3>
          <img id="spinner" src={LoadingSpinner} alt="loading" />
        </>
        :
        < div className="recommended-books-main-container" >
          <div className="recommended-books-text">
            <h2 className="recommended-books-title">Here's your list buddy!</h2>
            <p>
              These are the books that will help you learn from your target culture.
            </p>
            <div className="recommended-books-container">
              <img src={BookCover} alt="book cover" className="book-pic" />
              <img src={BookCover} alt="book cover" className="book-pic" />
              <img src={BookCover} alt="book cover" className="book-pic" />
              <img src={BookCover} alt="book cover" className="book-pic" />
            </div>
          </div>
        </div >
      }
    </>

  );
};

export default RecommendedBooks;
