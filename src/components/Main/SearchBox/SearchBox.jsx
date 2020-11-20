import React from 'react';
import './SearchBox.css'

class SearchBox extends React.Component {
    state = {  }
    render() {
        return (
            <form className="search-form">
               <div className="container">
               <span className="fa fa-search"></span>
                <input type="search" name="search" placeholder="Search of start a new chat" />
               </div>
            </form>
        );
    }
}

export default SearchBox;