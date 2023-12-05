// src/infrastructure/repositories/assistanceRepositoryImpl.ts
import { Assistance } from "@/domain/models/assistance";
import axios from "@/infrastructure/api/axios";
import { AssistanceRepository } from "./assitanceRepository";

export class AssistanceRepositoryImpl implements AssistanceRepository {
  async createAssistanceOffer(assistanceData: Assistance) {
    try {
      const response = await axios.post("/assistance/offer", assistanceData);
      if (response.status !== 200) {
        throw new Error("Failed to submit assistance");
      }
      return response;
    } catch (error) {
      throw new Error("Error submitting assistance: " + error);
    }
  }

  async createAssistanceRequest(assistanceData: Assistance) {
    try {
      const response = await axios.post("/assistance/request", assistanceData);
      if (response.status !== 200) {
        throw new Error("Failed to submit assistance");
      }
      return response;
    } catch (error) {
      throw new Error("Error submitting assistance: " + error);
    }
  }

  async getAllAssistanceRequests(): Promise<Assistance[]> {
    try {
      const response = await axios.get("/assistance/requests");

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Failed to fetch assistance requests");
      }
    } catch (error) {
      throw new Error("Error fetching assistance requests: " + error);
    }
  }

  async getAllAssistanceOffers(): Promise<Assistance[]> {
    try {
      const response = await axios.get("/assistance/offers");

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Failed to fetch assistance offers");
      }
    } catch (error) {
      throw new Error("Error fetching assistance offers: " + error);
    }
  }
}
