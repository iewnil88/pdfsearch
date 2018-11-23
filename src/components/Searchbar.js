import React from 'react';
import { Input } from 'antd';

const Search = Input.Search;
export class Searchbar extends React.Component {
    state= {
        userInput : 'Input search text',
    };

    onInputChange = (e) =>{
        this.setState({userInput : e.target.value});
    }

    on_search = (value) =>  {
        console.log(value);
        this.props.handleSearch(this.state.userInput);

    }

    render() {
        return (
            <div className = 'search_button'>
                <Search
                    placeholder= {this.state.userInput}
                    enterButton="Search"
                    size="large"
                    onChange = {this.onInputChange}
                    // onSearch={value => console.log(value)}
                    onSearch ={this.on_search}
                />
            </div>
        );
    }
}