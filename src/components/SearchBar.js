import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.search} placeholder="Search Champion..." />
            </div>
        )
    }
}

export default SearchBar;