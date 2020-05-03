
module.exports = (employeeList, searchParams) =>
{
    const searchKeys = Object.keys(searchParams);
    
    for (let i = 0; i < searchKeys.length; i++) {
        const key = searchKeys[i];
        const searchParam = searchParams[key]; 
        employeeList = employeeList.filter((employee) => employee[key].includes(searchParam)); 
        console.log(employeeList);
    }

    return employeeList;
}
