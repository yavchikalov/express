import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Неверно указан email' })
	email: string;

	@IsString({ message: 'Неверно указан пароль' })
	name: string;

	@IsString({ message: 'Неверно указано имя' })
	password: string;
}
