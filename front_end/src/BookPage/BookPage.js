import React, { useEffect, useState } from "react";
import "./BookPage.css";
import { useApp } from "../Contexts/appContext";
import LoadingSpinner from "../attachments/LoadingSpinner.svg";

export default function BookPage() {

  const [currentBook, setCurrentBook] = useState()
  const { suggestions } = useApp()


  useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    const book_id = url.get('id');
    const [Book] = suggestions.filter(book => book.bookId === book_id)
    setCurrentBook(Book)
  }, [])


  return (
    <>
      {currentBook ?
        <div className="book-page-main-container">
          <img src={currentBook?.coverImg} alt="book cover" className="book-page-pic" />
          <h2 className="book-page-book-title">{currentBook?.title}</h2>
          <h3 className="book-page-book-author">{currentBook?.author}</h3>
          <h2 className="book-synopsis-title">Synopsis</h2>
          <p className="book-synopsis-paragraph">
            {currentBook?.description}
          </p>
          <button id="buy-book-btn"><a href="https://www.amazon.com/books-used-books-textbooks/b?ie=UTF8&node=283155">Buy on Amazon</a></button>
        </div>
        :
        <img id="spinner" src={LoadingSpinner} alt="loading" />
      }
    </>
  );
}
