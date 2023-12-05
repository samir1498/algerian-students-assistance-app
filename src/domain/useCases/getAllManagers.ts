import { User } from "../models/user";
import { UserRepository } from "../repositories/user/userRepository";

export async function getAllManagers(
  repository: UserRepository
): Promise<User[] | null> {
  try {
    const managers = await repository.getAllManagers();

    return managers;
  } catch (error) {
    // Handle or log the error as needed
    console.error("Error fetching assistance requests:", error);
    throw error; // Re-throw the error to propagate it to the caller
  }
}
