// buttons
export const registerBtn = document.getElementById("register-btn") as HTMLElement;
export const loginBtn = document.getElementById("login-btn") as HTMLElement;
export const logoutBtn = document.getElementById("logout-btn") as HTMLElement;
export const createChatroomBtn = document.getElementById("create-chat-btn") as HTMLElement;
export const completeCreateChatroomBtn = document.getElementById("complete-create-chat-btn") as HTMLElement;
export const backBtns = [...document.querySelectorAll(".back-btn")] as HTMLElement[];

// app pages
export const registerPage = document.getElementById("register-page") as HTMLElement;
export const loginPage = document.getElementById("login-page") as HTMLElement;
export const chatroomsPage = document.getElementById("chatrooms-page") as HTMLElement;
export const chatPage = document.getElementById("chat-page") as HTMLElement;
export const createChatroomPage = document.getElementById("create-chat-page") as HTMLElement;

export const pages = [registerPage, loginPage, chatroomsPage, chatPage, createChatroomPage] as HTMLElement[];

// register form elements
export const registerForm = document.getElementById("register-form") as HTMLFormElement;

export const registerFormErr = document.getElementById("register-form-err") as HTMLElement;
export const registerUsernameErr = document.getElementById("register-name-err") as HTMLElement;
export const registerEmailErr = document.getElementById("register-email-err") as HTMLElement;
export const registerPasswordErr = document.getElementById("register-password-err") as HTMLElement;

export const loginLink = document.getElementById("login-link") as HTMLElement;

// login form elements
export const loginForm = document.getElementById("login-form") as HTMLFormElement;

export const loginFormErr = document.getElementById("login-form-err") as HTMLElement;
export const loginEmailErr = document.getElementById("login-email-err") as HTMLElement;
export const loginPasswordErr = document.getElementById("login-password-err") as HTMLElement;

export const registerLink = document.getElementById("register-link") as HTMLElement;

// create chat elements
export const createChatroomForm = document.getElementById("create-chat-form") as HTMLFormElement;
// chatrooms pgae elements
export const chatroomsList = document.getElementById("chatrooms-list") as HTMLElement;

// chat page elements
export const messagesList = document.getElementById("messages-list") as HTMLElement;

// regular expressions
export const emailRegex: RegExp = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
