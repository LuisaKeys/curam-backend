import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
export declare class UsuariosService {
    private usuarios;
    create(createUsuarioDto: CreateUsuarioDto): {
        nome: string;
        cpf: number;
        email: string;
        senha: string;
        id_convenio: number;
        numero_carteira: number;
        rua: string;
        cep: string;
        numero: string;
        complemento: string;
        id: number;
    };
    findAll(): Usuario[];
    findOne(id: number): Usuario;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): {
        nome: string;
        cpf: number;
        email: string;
        senha: string;
        id_convenio: number;
        numero_carteira: number;
        rua: string;
        cep: string;
        numero: string;
        complemento: string;
        id: number;
    };
    remove(id: number): string;
}
