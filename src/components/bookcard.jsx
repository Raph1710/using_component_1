// write the book component code here
import React from 'react';

const BookList = ({ books }) => {
  return (
    <div>
      <h1>Book List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {books.map((book) => (
          <div key={book.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <img src={book.image} alt={book.name} style={{ width: '100px', height: '150px' }} />
            <h2>{book.name}</h2>
            <p>{book.genre}</p>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
