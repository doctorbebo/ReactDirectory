import React from 'react';
import employeeSearchEngine from "../../utils/EmployeeSearchEngine"
import "./style.css";

function Results (props)
{
    let employeeList = []; 
    employeeList = props.employees;

    let searchParams = JSON.parse(JSON.stringify(props.searchParams));
    if(searchParams.name === "SearchName")
    {
        delete searchParams.name;
    }
    if (searchParams.position === "Position")
    {
        delete searchParams.position
    }
    if(searchParams.salary === 0)
    {
        delete searchParams.salary;
    }
    if (searchParams.id === "Id")
    {
        delete searchParams.id
    }
    console.log (Object.keys(searchParams).length);
    if(Object.keys(searchParams).length !== 0)
    {
        employeeList = employeeSearchEngine(employeeList, searchParams); 
        return (
            <div className = "border m-5" key>
                <h2>{props.message}</h2>
                {employeeList.map(e => <h4 key = {e.id} >{e.name}</h4>)}
            </div>    
        );
    }


    return (
        <div className = "border m-5">
            <h2>{props.message}</h2>
            {employeeList.map(e => <h4 key = {e.id} >{e.name}</h4>)}
        </div> 
    );
}

export default Results;