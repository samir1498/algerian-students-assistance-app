// src/api/helpRequests.ts
import { HelpRequestOffer } from "@/presentation/help/HelpForm";
import axios from "./axios";

export const submitHelpRequest = async (helpRequestData: HelpRequestOffer) => {
  try {
    const response = await axios.post("/submit", helpRequestData);
    if (response.status === 200) {
      console.log("Help request submitted successfully");
    } else {
      console.error("Failed to submit help request");
    }
  } catch (error) {
    console.error("Error submitting help request:", error);
  }
};

export const submitHelpOffer = async (helpOfferData: HelpRequestOffer) => {
  try {
    const response = await axios.post("/submit", helpOfferData);
    if (response.status === 200) {
      console.log("Help request submitted successfully");
    } else {
      console.error("Failed to submit help request");
    }
  } catch (error) {
    console.error("Error submitting help request:", error);
  }
};

export const getAllHelpRequests = async () => {
  try {
    const response = await axios.get(`assistance/requests`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Failed to fetch help requests");
      return;
    }
  } catch (error) {
    console.error("Error fetching help requests:", error);
    return;
  }
};

export const getAllHelpOffers = async () => {
  try {
    const response = await axios.get("/assistance/offers");
    if (response.status === 200) {
      console.log("okay");
      return response.data;
    } else {
      console.error("Failed to fetch help requests");
      return;
    }
  } catch (error) {
    console.error("Error fetching help requests:", error);
    return;
  }
};
