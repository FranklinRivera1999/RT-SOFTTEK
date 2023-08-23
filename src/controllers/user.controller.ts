import { UserService } from "../services";
export default class UserController{
    private _userService : UserService;
    constructor(){
        this._userService = new UserService();
    }
    async getAllUsers(){
        const users = await this._userService.getAllUser();
        return {
            estado: users ? users.length ? true : false : false,
            datos: users || []
        }
    };

    async createUser({body}){
        const {nombre, apellido} = body;
        if(String(nombre || "").trim() == "" || String(apellido || "").trim() == ""){
            return {
                estado: false,
                datos:{
                },
                error: "Por favor ingresar datos validos"
            }
        }
        const itemCreated = await this._userService.createUser({nombre, apellido})
        return {
            estado:true,
            datos: itemCreated
        }
    }
}