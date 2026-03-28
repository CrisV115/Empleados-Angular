import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private URL_API='https://localhost:3000/api/employees';
   employees: Employee[] = [];
  constructor(private HttpClient) { }
  getEmployees() : Observable<Employee[]> {
    return this.HttpClient.get<Employee[]>(this.URL_API);

}
createEmployee(employee: Employee){
return this.HttpClient.post(this.URL_API, employee);
} 
deleteEmployee(id: string | undefined){
  return this.http.delete(`${this.URL_API}/${_id}`);
} 
putEmployee(employee: Employee){
  return this.http.put(`${this.URL_API}/${employee._id}`, employee);
}
}
