import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li
                    key={book.title}
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}
                >
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props inside the BookList component
    return {
        books: state.books
    };
}

// Anything returned (selectBook) will end as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result of it (selected book) should be passed to all the reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
