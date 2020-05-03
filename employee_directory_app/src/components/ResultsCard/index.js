import React from 'react';
import employeeSearchEngine from "../../utils/EmployeeSearchEngine"
import "./style.css";

function Results (props)
{


    let employeeList = []; 
    employeeList = props.employees;

    let searchParams = JSON.parse(JSON.stringify(props.searchParams));
    if(searchParams.name === "SearchName" || searchParams.name === "")
    {
        delete searchParams.name;
    }
    if (searchParams.position === "Select One" || searchParams.name === "")
    {
        delete searchParams.position
    }
    if(searchParams.salary === 0 || searchParams.name === "")
    {
        delete searchParams.salary;
    }
    if (searchParams.email === "email" || searchParams.name === "")
    {
        delete searchParams.email
    }
    if(Object.keys(searchParams).length !== 0)
    {
        employeeList = employeeSearchEngine(employeeList, searchParams); 
        return (
            <div className = "border m-5" key>
                <h2>{props.message}</h2>
                {employeeList.map((e, index) =>
                (
                    <div className = "border by-2 m-5 p-5" key={index} >
                        <div className = "w-25">
                            <div>Name: </div>
                            <div>Position: </div>
                            <div>salary: </div>
                            <div>ID: </div>
                        </div>
                        <div className = "w-75">
                            <div className="lm-5">{e.name}</div>     
                            <div className="lm-5">{e.position}</div>     
                            <div className="lm-5">{e.salary}</div>     
                            <div className="lm-5">{e.email}</div>     
                        </div>
                    </div>
                ))}
            </div>    
        );
    }

    return (
        <div className = "border m-5">
            <h2 className="text-center">{props.message}</h2>
            {employeeList.map((e, index) =>
            (
                <div className = "border by-2 m-5 p-5" key={index} >
                    <div className = "w-25">
                        <div>Name: </div>
                        <div>Position: </div>
                        <div>salary: </div>
                        <div>ID: </div>
                    </div>
                    <div className = "w-75">
                        <div className="lm-5">{e.name}</div>     
                        <div className="lm-5">{e.position}</div>     
                        <div className="lm-5">{e.salary}</div>     
                        <div className="lm-5">{e.email}</div>     
                    </div>
                </div>
            ))}        
        </div> 
    );

}

export default Results;