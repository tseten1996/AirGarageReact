import React, { useState } from 'react';

export default function SearchBar(props){
    const { onSearch } = props;
    const [searchText, setSearchText] = useState('');
    const [error, setError] = useState('');

    const handleInput = (e) => {
        setError(false);
        const text = e.target.value;
        setSearchText(text)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(!searchText) {
            setError(true);
        } else {
            onSearch(searchText);
        }
    }

    const errorStyle = {
        borderColor: "red",
        color: "red"
    }

    const normalStyle = {
        borderColor: "white",
        color: "gray"
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label className="label" htmlFor="query">Location</label>
            <div className="field is-grouped">
                <p className="control is-expanded">
                    <input className="input is-medium" type="text" name="query" placeholder="i.e. Los Angeles" value={searchText} onChange={handleInput} style={error ? errorStyle : normalStyle}/>
                    <span style={errorStyle}>{error ? "Field is Required" : ''}</span>
                </p>
                <p className="control">
                    <button className="button is-primary is-medium" type="submit">Search</button>
                </p>
            </div>
        </form>
    );
}
