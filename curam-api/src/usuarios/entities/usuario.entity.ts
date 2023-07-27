import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 1000 })
    nome: string;

    @Column('bigint')
    cpf: number;

    @Column({ length: 1000 })
    email: string;

    @Column({ length: 1000 })
    senha: string;

    @Column()
    id_convenio: number;

    @Column()
    numero_carteira: number;

    @Column({ length: 1000 })
    rua: string;

    @Column({ length: 9 })
    cep: string;

    @Column({ length: 50 })
    numero: string;

    @Column({ length: 1000 })
    complemento: string;
}
