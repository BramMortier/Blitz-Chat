export const registerBtn: Element | null = document.getElementById("register-btn");
export const loginBtn: Element | null = document.getElementById("login-btn");

export const registerPage: Element | null = document.getElementById("register-page");
export const loginPage: Element | null = document.getElementById("login-page");
export const chatroomsPage: Element | null = document.getElementById("chatrooms-page");
export const chatPage: Element | null = document.getElementById("chat-page");
export const createChatPage: Element | null = document.getElementById("create-chat-page");

export const chatroomsList: Element | null = document.getElementById("chatrooms-list");
export const chatrooms: (Element | null)[] = [...document.querySelectorAll(".chatrooms__chat")];

export const pages: (Element | null)[] = [registerPage, loginPage, chatroomsPage, chatPage, createChatPage];
