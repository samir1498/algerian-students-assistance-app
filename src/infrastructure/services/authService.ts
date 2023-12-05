// authService.ts

import axios from "../api/axios";

class AuthService {
  async login(username: string, password: string) {
    try {
      const response = await axios.post(
        "/auth/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        return response.data; // Assuming your server sends user data upon successful login
      } else {
        throw new Error("Check your username or password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      throw new Error("Something went wrong.");
    }
  }

  async logout() {
    try {
      // Assuming your server handles logout through a dedicated endpoint
      const response = await axios.post("/auth/logout");

      if (response.status === 200) {
        return; // Successful logout
      } else {
        throw new Error("Failed to logout. Please try again.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      throw new Error("Something went wrong during logout.");
    }
  }
}

export default new AuthService();
