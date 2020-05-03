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
                    <select id="dropdown" name="position" onChange={(e) => props.handleInputChange(e, props.type)} >
                        <option>Select One</option>
                        <option>Software Engineer</option>
                        <option>Team Lead</option>
                        <option>Web Designer</option>
                        <option>Product Manager</option>
                    </select>
                </div>
                <div className = "input">
                    <div className="input-text">Salary</div>
                    <input placeholder = {props.state.salary} name="salary" onChange={(e) => props.handleInputChange(e, props.type)} />
                </div>
                <div className = "input">
                    <div className="input-text">Email</div>
                    <input placeholder  = {props.state.email} name="id" onChange={(e) => props.handleInputChange(e, props.type)} />
                </div>
            </form>
        </div>
    )
};

export default Input;

// <input placeholder = {props.state.position} name="position" onChange={(e) => props.handleInputChange(e, props.type)} />
