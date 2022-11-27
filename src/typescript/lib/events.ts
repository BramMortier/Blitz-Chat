// ------------------------------------------- //
// module imports
import {
    registerForm,
    loginBtn,
    chatroomsPage,
    backBtns,
    chatrooms,
    chatPage,
    createChatBtn,
    createChatPage,
    loginForm,
    loginLink,
    loginPage,
    registerLink,
    registerPage,
} from "./constants";
import { login, register } from "./firebase";
import { navigate } from "./router";
// ------------------------------------------- //

export const initEvents = (): void => {
    registerForm?.addEventListener("submit", (e: Event): void => {
        register(e);
    });

    loginForm?.addEventListener("submit", (e: Event): void => {
        login(e);
    });

    loginLink?.addEventListener("click", (): void => {
        navigate(loginPage);
    });

    registerLink?.addEventListener("click", (): void => {
        navigate(registerPage);
    });

    createChatBtn?.addEventListener("click", (): void => {
        navigate(createChatPage);
    });

    chatrooms.forEach((chatroom: Element | null) => {
        chatroom?.addEventListener("click", (): void => {
            navigate(chatPage);
        });
    });

    backBtns.forEach((backBtn: Element | null) => {
        backBtn?.addEventListener("click", (): void => {
            navigate(chatroomsPage);
        });
    });
};
