import { PickType } from '@nestjs/swagger';

import { CreateUserDTO } from '@modules/users/dtos/createUser.dto';

export class LoginDTO extends PickType(CreateUserDTO, ['email', 'password']) {}
