import React from 'react';
import InputCard from '../InputCard'; 
import './style.css';

function Search (props)
{
    return (
        <div className = "border m-5">
            <div className="input-card">
                <InputCard type={"Search"} state = {props.state.search} handleInputChange = {props.handleInputChange} />
            </div>
        </div>
    );
}

export default Search;