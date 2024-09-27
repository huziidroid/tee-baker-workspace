import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import { CreateUserDTO } from '@modules/users/dtos/createUser.dto';

import { MatchPassword } from '@shared/validators';

export class RegisterDTO extends PickType(CreateUserDTO, ['full_name', 'user_name', 'email', 'gender', 'dob', 'password'] as const) {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MatchPassword('password')
  confirmPassword: string;
}
