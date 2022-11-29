// ------------------------------------------- //
// module imports
import { emailRegex } from "./constants";
// ------------------------------------------- //

export const validateUsername = (username: string): boolean => {
    if (!username) return false;
    if (username.length < 4) return false;

    return true;
};

export const validateEmail = (email: string): boolean => {
    if (!email) return false;
    // if (!emailRegex.test(email)) return false;
    return true;
};

export const validatePassword = (password: string): boolean => {
    if (!password) return false;

    return true;
};

export const validateText = (text: string): boolean => {
    if (!text) return false;

    return true;
};
