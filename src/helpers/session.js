import { uid } from "uid";

export const getAgentId = () => {
  if (localStorage.agentId) {
    return localStorage.agentId;
  } else {
    const agentId = uid();

    localStorage.agentId = agentId;
    return agentId;
  }
};
