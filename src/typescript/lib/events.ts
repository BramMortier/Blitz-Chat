// ------------------------------------------- //
// module imports
import {
    registerForm,
    chatroomsPage,
    backBtns,
    createChatroomBtn,
    createChatroomPage,
    loginForm,
    loginLink,
    loginPage,
    registerLink,
    registerPage,
    logoutBtn,
    createChatroomForm,
    messageForm,
} from "./constants";
import { login, logout, register } from "../firebase/auth";
import { navigate } from "./router";
import { createChatroom } from "./chatrooms";
import { sendMessage } from "./messages";
// ------------------------------------------- //

// auth events
registerForm.addEventListener("submit", (e: Event): void => {
    register(e);
});

loginForm.addEventListener("submit", (e: Event): void => {
    login(e);
});

logoutBtn.addEventListener("click", (): void => {
    logout();
});

loginLink.addEventListener("click", (): void => {
    navigate(loginPage);
});

registerLink.addEventListener("click", (): void => {
    navigate(registerPage);
});

// chatroom events
createChatroomBtn.addEventListener("click", (): void => {
    navigate(createChatroomPage);
});

createChatroomForm.addEventListener("submit", (e: Event): void => {
    createChatroom(e);
});

// message event
messageForm.addEventListener("submit", (e: Event): void => {
    sendMessage(e);
});

// all back btns
backBtns.forEach((backBtn: HTMLElement): void => {
    backBtn.addEventListener("click", (): void => {
        navigate(chatroomsPage);
    });
});
