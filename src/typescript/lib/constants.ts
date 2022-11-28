// buttons
export const registerBtn: Element | null = document.getElementById("register-btn");
export const loginBtn: Element | null = document.getElementById("login-btn");
export const logoutBtn: Element | null = document.getElementById("logout-btn");
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

// register form elements
export const registerForm: Element | null = document.getElementById("register-form");

export const registerName: HTMLInputElement | null = <HTMLInputElement>document.getElementById("register-name");
export const registerEmail: HTMLInputElement | null = <HTMLInputElement>document.getElementById("register-email");
export const registerPassword: HTMLInputElement | null = <HTMLInputElement>document.getElementById("register-password");

export const registerFormErr: Element | null = document.getElementById("register-form-err");
export const registerNameErr: Element | null = document.getElementById("register-name-err");
export const registerEmailErr: Element | null = document.getElementById("register-email-err");
export const registerPasswordErr: Element | null = document.getElementById("register-password-err");

export const loginLink: Element | null = document.getElementById("login-link");

// login form elements
export const loginForm: Element | null = document.getElementById("login-form");

export const loginEmail: HTMLInputElement | null = <HTMLInputElement>document.getElementById("login-email");
export const loginPassword: HTMLInputElement | null = <HTMLInputElement>document.getElementById("login-password");

export const loginFormErr: Element | null = document.getElementById("login-form-err");
export const loginEmailErr: Element | null = document.getElementById("login-email-err");
export const loginPasswordErr: Element | null = document.getElementById("login-password-err");

export const registerLink: Element | null = document.getElementById("register-link");

// chatrooms pgae elements
export const chatroomsList: Element | null = document.getElementById("chatrooms-list");

// chat page elements
export const messagesList: Element | null = document.getElementById("messages-list");
