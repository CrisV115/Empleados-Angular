const Employee = require('../models/employee');
const employeeCtrl = {} ;
employeeCtrl.createEmployee = async (req, res )=>{
  const newEmployee =new Employee(req.body);
  await newEmployee.save();
  res.json(newEmployee); 

}
employeeCtrl.getEmployees = async (req, res )=>{     
    const employess = await Employee.find();
    res.json(employess); 
}

   employeeCtrl.getEmployee = async(req, res )=>{
    const employee = await Employee.findById(req.params.id)
    res.json(employee);
}
   employeeCtrl.editEmployee = async (req, res )=>{
    await Emplooyee.findByIdAndUpdate(req.params.id, req.body);
    res.json({messaje: "Empleado actualizado"});
}
employeeCtrl.deleteEmployee = async (req, res )=>{
    await Employee.findByIdAndDelete(req.params.id, req.body);
    res.json({messaje: "Empleado eliminado"});
}    
module.exports = employeeCtrl;
