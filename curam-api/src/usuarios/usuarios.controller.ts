import { Controller, Get, Post, Body, Put, Param, Delete, Request, NotFoundException, UseGuards } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { Usuario } from './entities/usuario.entity';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}


  @Post('/criar')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }


  @Get('/getAll')
  findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }


  @Get(':email')
  async findOne(@Param('email') email: string) {
    return this.usuariosService.findOne(email);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() usuarioData: Partial<Usuario>): Promise<Usuario> {
    try {
      return await this.usuariosService.update(id, usuarioData);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }


  @Delete(':id')
  async delete(@Param('id') id: number) {
    try {
      await this.usuariosService.delete(id);
      return "Usuário excluído com êxito";
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }



  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}
