import React from 'react';
import SearchFindContainer from '../components/SearchFindContainer'
import ResultsCard from '../components/ResultsCard'
import EmployeeCard from '../components/EmployeeCard'
import Wrapper from '../components/Wrapper'
import employeeList from "../employees.json";

class Index extends React.Component 
{

    state = {
        search: {
            name: "SearchName",
            position: "Position",
            salary: 0,
            id: "Id"
        },
        add: {
            name: "AddName",
            position: "Position",
            salary: 0,
            id: "Id"
        },
        employees: [],
        message: ""
    }

    componentDidMount()
    {
        this.setState({"employees": employeeList},()=>
        {
            console.log(this.state.employees);
        });
    }

    handleInputChange = (event, type) =>
    {
        const {name, value} = event.target;

        if(type === "Search")
        {
            let newState = this.state.search;
            console.log([newState], newState[`${name}`], value);
            newState[`${name}`] = value; 
            this.setState({"search": newState});
        }else if(type === "Add")
        {
            let newState = this.state.add;
            console.log([newState], [newState][`${name}`], value);
            newState[`${name}`] = value; 
            this.setState({"add": newState});
        }
    }

    addEmployee = (event) =>
    {
        if(this.state.add.name === "AddName" && this.state.add.position === "Position" && this.state.add.salary === 0 && this.state.add.id === "Id")
        {
            this.setState({"message": "Please fill out all fields before adding employee."}); 
            setTimeout(() => { this.setState({"message": ""})}, 3000);
        }


        event.preventDefault();
        let newEmployeeList =  JSON.parse(JSON.stringify(this.state.employees));
        newEmployeeList.push(this.state.add);
        this.setState({"employees": newEmployeeList}, () =>
        {
            console.log(this.state.employees);
        });

    }


render ()
    {
        return (
            <div>
            <Wrapper>
                <SearchFindContainer state={this.state} handleFormSubmit = {this.addEmployee} handleInputChange = {this.handleInputChange} />
                <ResultsCard employees = {this.state.employees} searchParams = {this.state.search} message = {this.state.message}/>
            </Wrapper>
        </div>
        )
    }
    
}


export default Index;