// ------------------------------------------- //
// module imports
import {
    registerForm,
    chatroomsPage,
    backBtns,
    createChatBtn,
    createChatPage,
    loginForm,
    loginLink,
    loginPage,
    registerLink,
    registerPage,
    logoutBtn,
} from "./constants";
import { login, logout, register } from "../firebase/auth";
import { navigate } from "./router";
// ------------------------------------------- //

registerForm?.addEventListener("submit", (e: Event): void => {
    register(e);
});

loginForm?.addEventListener("submit", (e: Event): void => {
    login(e);
});

logoutBtn?.addEventListener("click", (): void => {
    logout();
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

backBtns.forEach((backBtn: Element | null) => {
    backBtn?.addEventListener("click", (): void => {
        navigate(chatroomsPage);
    });
});
