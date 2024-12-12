const departmentId = 101;
let employeeName = "Ashwini"
//var projectName = "CRM"
managerName = "Prakash"

/*prefer not to use var as a datatype 
because of issue in block scope and functional scope
*/

console.log(departmentId,employeeName);
managerName = "Neha"
//departmentId = 102
projectName = "CRM"
console.table([departmentId,employeeName,projectName,managerName])
var projectName