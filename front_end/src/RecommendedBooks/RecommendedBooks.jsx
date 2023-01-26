import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RecommendedBooks.css";

import LoadingSpinner from "../attachments/LoadingSpinner.svg";

const RecommendedBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();


  const handleBookClick = (book) => {
    navigate(`/BookPage?id=${book.bookId}`);
};

  const books = [
    {
      bookId: "2.Harry_Potter_and_the_Order_of_the_Phoenix",
      title: "Harry Potter 1",
      series: "Harry Potter #5",
      author: "J.K. Rowling, Mary GrandPré (Illustrator)",
      rating: "4.5",
      description:
        "There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror?Harry has a lot on his mind for this, his fifth year at Hogwarts: a Defense Against the Dark Arts teacher with a personality like poisoned honey; a big surprise on the Gryffindor Quidditch team; and the looming terror of the Ordinary Wizarding Level exams. But all these things pale next to the growing threat of He-Who-Must-Not-Be-Named - a threat that neither the magical government nor the authorities at Hogwarts can stop.As the grasp of darkness tightens, Harry must discover the true depth and strength of his friends, the importance of boundless loyalty, and the shocking price of unbearable sacrifice.His fate depends on them all.",
      coverImg:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546910265l/2.jpg",
    },
    {
      bookId: "2.Harry_Potter_and_the_Order_of_the_Phoenix_2",
      title: "Harry Potter 2",
      series: "Harry Potter #5",
      author: "J.K. Rowling, Mary GrandPré (Illustrator)",
      rating: "4.5",
      description:
        "There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror?Harry has a lot on his mind for this, his fifth year at Hogwarts: a Defense Against the Dark Arts teacher with a personality like poisoned honey; a big surprise on the Gryffindor Quidditch team; and the looming terror of the Ordinary Wizarding Level exams. But all these things pale next to the growing threat of He-Who-Must-Not-Be-Named - a threat that neither the magical government nor the authorities at Hogwarts can stop.As the grasp of darkness tightens, Harry must discover the true depth and strength of his friends, the importance of boundless loyalty, and the shocking price of unbearable sacrifice.His fate depends on them all.",
      coverImg:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546910265l/2.jpg",
    },
    {
      bookId: "2.Harry_Potter_and_the_Order_of_the_Phoenix_3",
      title: "Harry Potter 3",
      series: "Harry Potter #5",
      author: "J.K. Rowling, Mary GrandPré (Illustrator)",
      rating: "4.5",
      description:
        "There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror?Harry has a lot on his mind for this, his fifth year at Hogwarts: a Defense Against the Dark Arts teacher with a personality like poisoned honey; a big surprise on the Gryffindor Quidditch team; and the looming terror of the Ordinary Wizarding Level exams. But all these things pale next to the growing threat of He-Who-Must-Not-Be-Named - a threat that neither the magical government nor the authorities at Hogwarts can stop.As the grasp of darkness tightens, Harry must discover the true depth and strength of his friends, the importance of boundless loyalty, and the shocking price of unbearable sacrifice.His fate depends on them all.",
      coverImg:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546910265l/2.jpg",
    },
    {
      bookId: "2.Harry_Potter_and_the_Order_of_the_Phoenix_4",
      title: "Harry Potter 4",
      series: "Harry Potter #5",
      author: "J.K. Rowling, Mary GrandPré (Illustrator)",
      rating: "4.5",
      description:
        "There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror?Harry has a lot on his mind for this, his fifth year at Hogwarts: a Defense Against the Dark Arts teacher with a personality like poisoned honey; a big surprise on the Gryffindor Quidditch team; and the looming terror of the Ordinary Wizarding Level exams. But all these things pale next to the growing threat of He-Who-Must-Not-Be-Named - a threat that neither the magical government nor the authorities at Hogwarts can stop.As the grasp of darkness tightens, Harry must discover the true depth and strength of his friends, the importance of boundless loyalty, and the shocking price of unbearable sacrifice.His fate depends on them all.",
      coverImg:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546910265l/2.jpg",
    },
  ];

  return (
    <>
      {false ? (
        <img id="spinner" src={LoadingSpinner} alt="loading" />
      ) : (
        <div className="recommended-books-main-container">
          <div className="recommended-books-text">
            <h2 className="recommended-books-title">Here's your list buddy!</h2>
            <p>
              These are the books that will help you learn from your target
              culture.
            </p>
            <div className="recommended-books-container">
                {books.map((book) => (
                  <div key={book.bookId} onClick={() => handleBookClick(book)}>
                    <img src={book.coverImg} alt={book.title} className="book-pic"/>
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
