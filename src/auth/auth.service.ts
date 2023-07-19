/* eslint-disable prettier/prettier  */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AuthDto } from 'src/dto';
import { UserModel } from 'src/models/user.model';

@Injectable({})
export class AuthService {
  async signup(userDetails: AuthDto) {
    if (!userDetails.email || !userDetails.password || !userDetails.username) {
      throw new HttpException(
        'All credentials are required!',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Check if exists
    const exists = await UserModel.findOne({ email: userDetails.email });
    if (exists) {
      throw new HttpException(
        `User ${userDetails.email} already exists...`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = await UserModel.create(userDetails);
    if (!user) {
      throw new HttpException(
        'Internal server error...',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return user;
  }

  async login(userDetails: AuthDto) {
    if (!userDetails.email || !userDetails.password) {
      throw new HttpException(
        'All credentials are required...',
        HttpStatus.BAD_REQUEST,
      );
    }

    // validate user
    const user = await UserModel.findOne({ email: userDetails.email });
    if (!user || userDetails.password !== user.password) {
      throw new HttpException(
        'Invalid email or password...',
        HttpStatus.BAD_REQUEST,
      );
    }

    // return the user
    return user;
  }
}
