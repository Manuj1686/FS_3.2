function BookCard({ book, removeBook }) {
  return (
    <div className="book-card">{{
      border:"1px solid gray",
      margin:"10px",
      padding:"10px"
    }}
      <h3>{book.title}</h3>
      <p>{book.author}</p>

      <button onClick={() => removeBook(book.id)}>
        Remove
      </button>
    </div>
  );
}

export default BookCard;
