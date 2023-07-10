/* eslint-disable prettier/prettier  */
import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup(obj) {
    console.log(obj)
  }

  login() {}
}
