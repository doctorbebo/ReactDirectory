import React from 'react';
import SearchFindContainer from '../components/SearchFindContainer'
import ResultsCard from '../components/ResultsCard'
import EmployeeCard from '../components/EmployeeCard'
import Wrapper from '../components/Wrapper'

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
        }
    }

    handleInputChange = (event, type) =>
    {
        console.log(event.target.name);
        console.log(event.target.value);
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


render ()
    {
        return (
            <div>
            <Wrapper>
                <SearchFindContainer state={this.state} handleInputChange = {this.handleInputChange} />
                <ResultsCard />
                <EmployeeCard />
            </Wrapper>
        </div>
        )
    }
    
}


export default Index;