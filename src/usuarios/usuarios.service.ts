import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {

  private usuarios: Usuario[] = [];

  create(createUsuarioDto: CreateUsuarioDto) {
    const currentMaxId = this.usuarios[this.usuarios.length - 1]?.id || 0;

    const id = currentMaxId + 1;
    
    const usuario = {
      id,
      ...createUsuarioDto,
    };

    this.usuarios.push(usuario);
    return usuario;
  }

  findAll() {
    return this.usuarios;
  }

  findOne(id: number) {
    const i = this.usuarios.findIndex(usuario => usuario.id == id)
    return this.usuarios[i];
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {

    const usuario = this.findOne(id);
    const i = this.usuarios.findIndex(usuario => usuario.id == id);

    const newUser = {
      ...usuario,
      ...updateUsuarioDto
    }

    this.usuarios[i] = newUser

    return newUser;

  }

  remove(id: number) {
    const i = this.usuarios.findIndex(usuario => usuario.id == id);
    this.usuarios.splice(i, 1);
    return `Usuário #${id} removido com sucesso!`;
  }
}
