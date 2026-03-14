const {Router} = require('express');
const router = Router();
const employesCtrl = require('../controllers/employees.controller');
router.get('/', employesCtrl.getEmployees);
router.post('/', employesCtrl.createEmployee);
router.get('/:id', employesCtrl.getEmployee);
router.put('/:id', employesCtrl.editEmployee);
router.delete('/:id', employesCtrl.deleteEmployee);
module.exports = router;