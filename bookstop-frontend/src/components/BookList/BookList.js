import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import Book from "../BookList/Book";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";
import SearchForm from "../SearchForm/SearchForm";
import "../Navbar/Navbar";
import Navbar from "../Navbar/Navbar";

// https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const { books, resultTitle } = useGlobalContext();
  const [cartBooks, setCartBooks] = useState([]);
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  return (
    <section className="booklist">
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="filter-section">
          <div>
            <h2>{resultTitle}</h2>
          </div>
          {/* Search bar to search the name of the book */}
          <div>
            <SearchForm />
          </div>
          {/* These are the filters of the type of book you need */}
          <div className="filters">
            <input
              type="text"
              placeholder="Author Name.."
              className="filter-options"
            />
            <input
              type="text"
              placeholder="Course Name.."
              className="filter-options"
            />
            <input
              type="number"
              placeholder="Type the Year..."
              className="filter-options number"
            />
            <input
              type="number"
              placeholder="Edition.."
              className="filter-options number"
            />
          </div>
        </div>
        <div className="booklist-content grid">
          {/* Indivisual Book element being displayed */}
          {/* <div id="indivisual-book"> */}
          {booksWithCovers.slice(0, 30).map((item, index) => {
            return <Book id key={index} {...item} />;
          })}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default BookList;
