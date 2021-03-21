// Write your solution in this file!
const employee ={name:'Ashish Kharel',streetAddress:'8060 Asland Ave'};
function updateEmployeeWithKeyAndValue(obj,key,value){
    const newEmployee={...obj};
    newEmployee[key]=value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]=value;
    return obj;
}
function deleteFromEmployeeByKey(obj,key,value){
    const newEmployee={...obj}
    delete newEmployee[key]
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(obj,key,value){
    delete obj[key]
    return obj;
}