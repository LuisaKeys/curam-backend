import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  private usuarios: Usuario[] = [];

  create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    
    const currentMaxId = this.usuarios[this.usuarios.length - 1]?.id || 0;

    const idAuto = currentMaxId + 1;
    
    const usuario = new Usuario();
      usuario.id = idAuto
      usuario.nome = createUsuarioDto.nome
      usuario.email = createUsuarioDto.email
      usuario.cpf = createUsuarioDto.cpf
      usuario.senha = bcrypt.hashSync(createUsuarioDto.senha, 8)
      usuario.id_convenio = createUsuarioDto.id_convenio
      usuario.numero_carteira = createUsuarioDto.numero_carteira
      usuario.rua = createUsuarioDto.rua
      usuario.cep = createUsuarioDto.cep
      usuario.numero = createUsuarioDto.numero
      usuario.complemento = createUsuarioDto.complemento
  

    return this.usuarioRepository.save(usuario);
  }

  findAll(): Promise<Usuario[]> {
    const usuarios = this.usuarioRepository.find()

    return usuarios;
  }

  async findOne(email: string) : Promise<Usuario> | undefined{
    const usuario = await this.usuarioRepository.findOne({ where: {email} });
    return usuario;
  }

  async update(id: number, usuarioData: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    await this.usuarioRepository.update(id, usuarioData);

    return this.usuarioRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    await this.usuarioRepository.remove(usuario);
  }

}
