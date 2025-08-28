import { Injectable } from '@angular/core';
import { Departments } from '../model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments: Departments[] = [
    { level: 'BI', code: 'HBI', parentId: '', name: 'HBI', managerId: '15', active: true },
    { level: 'BI', code: 'NBI', parentId: '', name: '創新應用服務事業體', managerId: '', active: true },
    { level: 'LOB', code: 'TESTPD100', parentId: 'NBI', name: 'Product Department', managerId: '10', active: true }
  ];

  getDepartments(query: any): Departments[] {
    return this.departments.filter((dept) => {
      const code = query.code ?? '';
      const name = query.name ?? '';
      const managerId = query.managerId ?? '';
      const active = query.active ?? '';
      return (
        (!code || dept.code.includes(code)) &&
        (!name || dept.name.includes(name)) &&
        (!managerId || dept.managerId.includes(managerId)) &&
        (active === '' || dept.active === (active === '1'))
      );
    });
  }

  add(dept: Departments) {
    this.departments.push(dept);
    console.log('Department added:', dept);
  }
}
