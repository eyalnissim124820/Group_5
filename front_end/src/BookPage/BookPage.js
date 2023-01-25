import React from "react";
import "./BookPage.css";
import BookCover from "./book-cover.jpeg";

export default function BookPage() {
  return (
    <div className="book-page-main-container">
      <img src={BookCover} alt="book cover" className="book-page-pic" />
      <h2 className="book-page-book-title">Connect the dots</h2>
      <h3 className="book-page-book-author">Rashmi Bansal</h3>
      <h2 className="book-synopsis-title">Synopsis</h2>
      <p className="book-synopsis-paragraph">
        "CONNECT THE DOTS' is a sequel to 'Stay Hungry Stay Foolish' and is the
        story of 20 enterprising individuals without an MBA, who started their
        own ventures. They were driven by the desire to prove themselves. To
        lead interesting, passionate, meaningful lives.
      </p>
      <button className="buy-book-btn">Buy on Amazon</button>
    </div>
  );
}
