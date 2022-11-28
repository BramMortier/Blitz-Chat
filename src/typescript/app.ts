// ------------------------------------------- //
// module imports
import { getChatrooms } from "./firebase/database";
import "./lib/events";
// ------------------------------------------- //

export const initApp = (): void => {
    getChatrooms();
};
