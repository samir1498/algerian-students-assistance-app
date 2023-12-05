import { User } from "../../models/user";

export interface UserRepository {
  getAllManagers(): Promise<User[]>;
  createManager(manager: User): Promise<Response>;
}
