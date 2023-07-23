import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
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
    findAll(): import("./entities/usuario.entity").Usuario[];
    findOne(id: string): import("./entities/usuario.entity").Usuario;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): {
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
    remove(id: string): string;
}
