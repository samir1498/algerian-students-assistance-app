import { AxiosResponse } from "axios";
import { Assistance } from "../../models/assistance";

export interface AssistanceRepository {
  getAllAssistanceRequests(): Promise<Assistance[]>;
  getAllAssistanceOffers(): Promise<Assistance[]>;
  createAssistanceRequest(assistance: Assistance): Promise<AxiosResponse>;
  createAssistanceOffer(assistance: Assistance): Promise<AxiosResponse>;
}
