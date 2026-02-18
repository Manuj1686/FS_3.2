import useBooks from "./hooks/useBooks";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {

  const { books, addBook, removeBook } = useBooks();
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>

      <SearchBar setSearch={setSearch}/>
      <BookForm addBook={addBook}/>
      <BookList books={filteredBooks} removeBook={removeBook}/>
    </div>
  );
}

export default App;
