import React, { useEffect } from 'react';
import Book from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';
import { useDispatch, useSelector } from 'react-redux';
import { loadBooks } from '../redux/action/book.Action';
const Discover = () => {
    const books = useSelector((state) => {
        return( state.books.discoverList);
    })
    // console.log(books);

    const dispatch = useDispatch()
    useEffect(() => dispatch(loadBooks()), [])

    return (
        <PageLayout>
            {
                books?.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default Discover;