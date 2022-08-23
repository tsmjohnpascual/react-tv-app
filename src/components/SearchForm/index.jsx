import React, { useState } from "react";

const SearchForm = ({ handleSearchSubmission }) => {

    const [inputValue, setInputValue] = useState("");

    function handleInput (e) {
        const newInput = e.target.value;
        setInputValue(newInput);
    }

    function handleSubmit (e) {
        e.preventDefault();
        handleSearchSubmission(inputValue);
    }

    return <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInput} value={inputValue} placeholder="Search for a show" required/>
            <input type="submit" value="Search"/>
           </form>

}

export default SearchForm;