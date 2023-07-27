import { forwardRef, Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { DatabaseModule } from '../database/database.module';
import { usuarioProviders } from './usuarios.providers';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [DatabaseModule,  forwardRef(() => AuthModule)],
  controllers: [UsuariosController],
  providers: [
    ...usuarioProviders,
    UsuariosService,
  ],
  exports: [UsuariosService]
})
export class UsuariosModule {}
