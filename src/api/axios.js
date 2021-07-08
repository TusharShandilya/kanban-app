import axios from "axios";
import { getBoardByIdEndpoint, getBoardsEndpoint } from "./routes";

export const getBoards = async () => {
  const response = await axios.get(getBoardsEndpoint());

  return response.data;
};

export const getBoardById = async (id) => {
  const response = await axios.get(getBoardByIdEndpoint(id));

  return response.data;
};
