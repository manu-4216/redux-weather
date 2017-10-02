export function selectBook(book) {
    // This needs to return an action: an object with a type property
    console.log('a book has been selected', book.title);
    return {
        type: 'Book_SELECTED',
        payload: book
    };
}
