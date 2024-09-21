import { CreateUserDTO } from '@modules/users/dtos/createUser.dto';
import { PickType } from '@nestjs/swagger';

export class LoginDTO extends PickType(CreateUserDTO, ['email', 'password']) {}
