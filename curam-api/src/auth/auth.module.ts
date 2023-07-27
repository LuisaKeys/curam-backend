import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [UsuariosModule, PassportModule],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule {}

