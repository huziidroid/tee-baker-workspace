import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '@prisma/client';
import { IsDateString, IsEmail, IsIn, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  full_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  user_name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsIn(['male', 'female', 'other'])
  gender: Gender;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dob: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
}
