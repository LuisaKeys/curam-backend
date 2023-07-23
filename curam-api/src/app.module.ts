import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-morning-moon-398098-pooler.us-east-1.postgres.vercel-storage.com',
      port: 5432,
      username: 'default',
      password: 'K9FE3WkAGQrP',
      database: 'verceldb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
