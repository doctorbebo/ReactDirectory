
module.exports = (employeeList, searchParams) =>
{
    const searchKeys = Object.keys(searchParams);
    debugger
    for (let i = 0; i < searchKeys.length; i++) {
        const key = searchKeys[i];
        const searchParam = searchParams[key]; 
        employeeList = employeeList.filter((employee) => employee[key].toLowerCase().includes(searchParam.toLowerCase())); 
        console.log(employeeList);
    }

    return employeeList;
}
