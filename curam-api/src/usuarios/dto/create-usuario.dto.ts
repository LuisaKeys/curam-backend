import {IsEmail, IsString, MinLength} from 'class-validator'

export class CreateUsuarioDto {
    @IsString()
    nome: string;
    
    cpf: number;

    @IsEmail()
    email: string;
    
    @IsString()
    @MinLength(6)
    senha: string;
    
    id_convenio: number;
    
    numero_carteira: number;
   
    @IsString()
    rua: string;
   
    @IsString()
    cep: string;
   
    @IsString()
    numero: string;
   
    @IsString()
    complemento: string;
}
