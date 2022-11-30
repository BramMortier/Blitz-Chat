// ------------------------------------------- //
// module imports
import { getChatrooms } from "./firebase/database";
import "./firebase/firebase";
import "./lib/animations";
import "./lib/events";
// ------------------------------------------- //

export const initApp = (): void => {
    getChatrooms();
};
