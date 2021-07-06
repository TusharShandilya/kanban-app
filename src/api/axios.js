import axios from "axios";
import { getBoardsEndpoint } from "./routes";

export const getBoards = async () => {
  const response = await axios.get(getBoardsEndpoint);

  return response.data;
};
