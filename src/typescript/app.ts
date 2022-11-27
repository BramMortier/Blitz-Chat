// ------------------------------------------- //
// module imports
import { initEvents } from "./lib/events";
import { getChatrooms } from "./lib/chatrooms";
// ------------------------------------------- //

export const app = () => {
    getChatrooms();
    initEvents();
};
