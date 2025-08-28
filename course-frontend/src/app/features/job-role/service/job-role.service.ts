import { Injectable } from '@angular/core';
import { JobRoles } from '../model/job-role.model';

@Injectable({
  providedIn: 'root'
})
export class JobRoleService {
  private jobRoles: JobRoles[] = [
    { code: "BA25", name: '程式設計師3', description: "這是 程式設計師 的職能描述測試資料 2533", active: true },
    { code: "BA25", name: '程式設計師3', description: "這是 程式設計師 的職能描述測試資料 2533", active: true },
    { code: "BA25", name: '程式設計師3', description: "這是 程式設計師 的職能描述測試資料 2533", active: true },
  ];

  getJobRoles(query: any): JobRoles[] {
    return this.jobRoles.filter((job) => {
      const code = query.code ?? '';
      const name = query.name ?? '';
      const active = query.active ?? '';
      return (
        (!code || job.code.includes(code)) &&
        (!name || job.name.includes(name)) &&
        (active === '' || job.active === (active === '1'))
      );
    });
  }

  add(job: JobRoles) {
    this.jobRoles.push(job);
    console.log('Job added:', job);
  }
}
