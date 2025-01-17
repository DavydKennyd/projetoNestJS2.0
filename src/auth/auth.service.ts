
import { Injectable, Dependencies, UnauthorizedException } from '@nestjs/common';
import { StaffService} from '../staff/staff.service';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';

@Injectable()
export class AuthService {
  constructor(
    private StaffService: StaffService,
    private JwtService: JwtService
  ) {}

  async signIn(username: string, pass: string): 
  Promise< {access_token: string}> {
    const staff = await this.StaffService.findOne(username);
    if (staff?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = {sub: staff.userId, username: staff.username};
    return{
        access_token: await this.JwtService.signAsync(payload),
    }
  }
}
