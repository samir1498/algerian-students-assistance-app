import { Assistance } from "../../models/assistance";
import { AssistanceRepository } from "../../repositories/assistance/assitanceRepository";

export async function getAllAssistanceOffers(
  repository: AssistanceRepository
): Promise<Assistance[] | null> {
  try {
    const assistanceOffers = await repository.getAllAssistanceOffers();

    return assistanceOffers;
  } catch (error) {
    // Handle or log the error as needed
    console.error("Error fetching assistance requests:", error);
    throw error; // Re-throw the error to propagate it to the caller
  }
}
