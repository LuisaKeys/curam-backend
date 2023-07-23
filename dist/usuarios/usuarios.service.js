"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
let UsuariosService = exports.UsuariosService = class UsuariosService {
    constructor() {
        this.usuarios = [];
    }
    create(createUsuarioDto) {
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
    findOne(id) {
        const i = this.usuarios.findIndex(usuario => usuario.id == id);
        return this.usuarios[i];
    }
    update(id, updateUsuarioDto) {
        const usuario = this.findOne(id);
        const i = this.usuarios.findIndex(usuario => usuario.id == id);
        const newUser = {
            ...usuario,
            ...updateUsuarioDto
        };
        this.usuarios[i] = newUser;
        return newUser;
    }
    remove(id) {
        const i = this.usuarios.findIndex(usuario => usuario.id == id);
        this.usuarios.splice(i, 1);
        return `Usuário #${id} removido com sucesso!`;
    }
};
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)()
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map