import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuariosService,
      ) {}

      async validarUsuario(email: string, senha: string): Promise<any> {
        const usuario = await this.usuarioService.findOne(email);
        if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
          const { senha, ...result } = usuario;
          return result;
        }
        return null;
      }
}

