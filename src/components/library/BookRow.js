import React from 'react';

export default function BookRow({books, setBooks, setBookId, setName, setAuthor, setEdit, setActiveIndex}) {

    const book_delete = (index) => {
        let copy = books;
        copy.splice(index, 1); // deleting the element at index
        setBooks([...copy]);   // updating my books array to modified copy array
        
        // books.splice(index, 1) wrong because we can't directly change books
        // we have to use setBooks, as props are immutable;
    
    }

    const book_edit = (index) => {
        const book = books[index]; // temporary book to be edited
        setBookId(book.bookId);
        setName(book.name);
        setAuthor(book.author);
        setEdit(true);           // we're currently updating, so things should work based on editing mode
        setActiveIndex(index);   // we're storing which index to be edited/changed
    }


    return (
        <div>
            <table>
                {
                    books.map((book, index) => {
                        return (
                            <div>
                                <tbody>
                                    <th>Book Id</th>
                                    <th>Book Name</th>
                                    <th>Author Name</th>
                                    <tr>
                                        <td>{book.bookId}</td>
                                        <td>{book.name}</td>
                                        <td>{book.author}</td>
                                        <button className='addBtn' onClick={() => book_edit(index)}>Edit</button>
                                        <button className='addBtn' onClick={() => book_delete(index)}>Remove</button>
                                    </tr>
                                </tbody>
                            </div>
                        )
                    })
                }
            </table>
        </div>
    )
}
