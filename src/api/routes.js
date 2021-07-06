import { urlJoin } from "./utils";

const boardUrl = urlJoin("boards");

export const getBoardsEndpoint = boardUrl();
