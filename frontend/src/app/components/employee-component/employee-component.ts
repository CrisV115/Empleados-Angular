import { Component,signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee-service';
import { Employee } from '../../models/employee';
import { Observable } from 'rxjs';  

@Component({
  selector: 'app-employee-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css',
})

export class EmployeeComponent {
  private employeeService = inject(EmployeeService);
  employees = signal<Employee[]>([]);
  cargando = signal(true);
  error = signal< string | null>(null);
  selectedEmployee = signal<Employee>(
    {_id: '',
    name: '',
    position: '',
    office: '',
    salary: 0 }
  );
  isEditing = signal(false);

  constructor() {
    this.loadEmployees();
   
  
  }
  loadEmployees() {
    this.cargando.set(true);
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees.set(data);
        this.cargando.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar empleados');
        this.cargando.set(false);
      },
    });
  }

