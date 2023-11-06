import React, {useState} from 'react';
import classes from "./SearchInput.module.scss";
import {ReactComponent as SearchIcon} from "@assets/img/searchIcon.svg";
import {ReactComponent as InputExit} from "@assets/img/inputExit.svg";

const SearchInput = ({onSearch, ...props}) => {
    const [query, setQuery] = useState("");
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setQuery(inputValue);
        onSearch(inputValue);
    }
    const handleExit = () => {
        setQuery("");
        onSearch("");
    }
    return (
        <div className={classes.search}>
            <SearchIcon className={classes.search__icon}/>
            <input {...props} className={classes.search__input} placeholder={"Поиск"} value={query}
                   onChange={handleInputChange}/>
            <InputExit className={classes.search__icon} onClick={handleExit}/>
        </div>

    );
};

export default SearchInput;