import BookCard from "./BookCard";

function BookList({ books, removeBook }) {
  return (
    <div>
      {books.map(book => (
        <BookCard key={book.id} book={book} removeBook={removeBook}/>
      ))}
    </div>
  );
}

export default BookList;
