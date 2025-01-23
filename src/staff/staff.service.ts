
import { Injectable } from '@nestjs/common';


export type Staff = any;

@Injectable()
export class StaffService {
  private readonly staff = [
    {
      userId: 1,
      username: 'john',
      password: 'jonhsenha',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'mariasenha',
    },
  ];

  async findOne(username: string): Promise<Staff | undefined> {
    return this.staff.find(user => user.username === username);
  }
}
