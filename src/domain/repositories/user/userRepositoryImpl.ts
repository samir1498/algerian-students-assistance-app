// src/infrastructure/repositories/assistanceRepositoryImpl.ts
import axios from "@/infrastructure/api/axios";
import { UserRepository } from "./userRepository";
import { User } from "../../models/user";

export class UserRepositoryImpl implements UserRepository {
  createManager(manager: User): Promise<Response> {
    console.log(manager);
    throw new Error("Method not implemented.");
  }

  async getAllManagers(): Promise<User[]> {
    {
      try {
        const response = await axios.get("/management", {
          withCredentials: true,
        });
        if (response.status === 200) {
          return response.data;
        } else {
          console.error("Failed to fetch managers");
          throw new Error("Failed to fetch managers");
        }
      } catch (error) {
        console.error("Error fetching help requests:", error);
        throw new Error("Error fetching help requests");
      }
    }
  }
}
