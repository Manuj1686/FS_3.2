import { useState, useEffect } from "react";

function useBooks() {

    const [books, setBooks] = useState(() => {
        const saved = localStorage.getItem("books");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);

    const addBook = (title, author) => {
        setBooks(prev => [
            ...prev,
            { id: Date.now(), title, author }
        ]);
    };

    const removeBook = (id) => {
        setBooks(prev => prev.filter(book => book.id !== id));
    };

    return { books, addBook, removeBook };
}

export default useBooks;
