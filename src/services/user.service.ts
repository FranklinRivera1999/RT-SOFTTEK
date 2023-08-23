import { UserModel } from "../models";
import { User } from "../models/user.model";
export default class UserService {
  private _userModel: UserModel;
  constructor() {
    this._userModel = new UserModel();
  }
  async getAllUser(): Promise<User[] | undefined> {
    const items = await this._userModel.getAllUsers();
    return items?.map((item) => {
      return {
        id: String(item.id),
        nombre: String(item.nombre),
        apellido: String(item.apellido),
      };
    });
  }

  async createUser({ nombre, apellido }) {
    const itemCreated = await this._userModel.createUser({ nombre, apellido });
    return itemCreated;
  }
}
