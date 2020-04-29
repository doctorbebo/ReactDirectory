import React from 'react';
import './style.css'

function Input (props)
{
    return (
        <div>
            <form>
                <div className = "input">
                    <div className="input-text">Name</div>
                    <input value = {props.state.name} name="name" onChange={(e) => props.handleInputChange(e, props.type)} />
                </div>
                <div className = "input">
                    <div className="input-text">Position</div>
                    <input value = {props.state.position} name="position" onChange={(e) => props.handleInputChange(e, props.type)} />
                </div>
                <div className = "input">
                    <div className="input-text">Salary</div>
                    <input value = {props.state.salary} name="salary" onChange={(e) => props.handleInputChange(e, props.type)} />
                </div>
                <div className = "input">
                    <div className="input-text">Id</div>
                    <input value = {props.state.id} name="id" onChange={(e) => props.handleInputChange(e, props.type)} />
                </div>
                <div className = "btn-div">
                    <button>
                        {props.type}
                    </button>
                </div>

            </form>
        </div>
    );
}

export default Input;