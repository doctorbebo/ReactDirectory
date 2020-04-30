import React from 'react';
import './style.css'

function Input (props)
{   
return(
    <div>
            <form>
                <div className = "input">
                    <div className="input-text">Name</div>
                    <input placeholder = {props.state.name} name="name" onChange={(e) => props.handleInputChange(e, props.type)} />
                </div>
                <div className = "input">
                    <div className="input-text">Position</div>
                    <input placeholder = {props.state.position} name="position" onChange={(e) => props.handleInputChange(e, props.type)} />
                </div>
                <div className = "input">
                    <div className="input-text">Salary</div>
                    <input placeholder = {props.state.salary} name="salary" onChange={(e) => props.handleInputChange(e, props.type)} />
                </div>
                <div className = "input">
                    <div className="input-text">Id</div>
                    <input placeholder  = {props.state.id} name="id" onChange={(e) => props.handleInputChange(e, props.type)} />
                </div>
                <div className = "btn-div">
                <button onClick={(e) => props.handleFormSubmit(e)}>{props.type}</button>
                </div>

            </form>
        </div>
    )
};

export default Input;