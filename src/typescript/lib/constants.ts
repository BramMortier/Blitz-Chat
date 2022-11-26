// buttons
export const registerBtn: Element | null = document.getElementById("register-btn");
export const loginBtn: Element | null = document.getElementById("login-btn");
export const createChatBtn: Element | null = document.getElementById("create-chat-btn");
export const completeCreateChatBtn: Element | null = document.getElementById("complete-create-chat-btn");
export const backBtns: (Element | null)[] = [...document.querySelectorAll(".back-btn")];

// app pages
export const registerPage: Element | null = document.getElementById("register-page");
export const loginPage: Element | null = document.getElementById("login-page");
export const chatroomsPage: Element | null = document.getElementById("chatrooms-page");
export const chatPage: Element | null = document.getElementById("chat-page");
export const createChatPage: Element | null = document.getElementById("create-chat-page");

export const pages: (Element | null)[] = [registerPage, loginPage, chatroomsPage, chatPage, createChatPage];

// chatrooms pgae elements
export const chatroomsList: Element | null = document.getElementById("chatrooms-list");
export const chatrooms: (Element | null)[] = [...document.querySelectorAll(".chatrooms__chat")];
