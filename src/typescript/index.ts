// ------------------------------------------- //
// sass entry point
import "../sass/style.scss";

// module imports
// import { registerBtn, loginBtn, loginPage, chatPage, chatroomsPage, chatrooms, pages } from "./lib/constants";
// import { Router } from "./lib/navigation";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// ------------------------------------------- //

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

class Router {
    constructor() {
        console.log("Navigation loaded");
    }

    navigate = (destinationPage: Element | null): void => {
        destinationPage?.classList.remove("page--hidden");

        pages.map((page) => {
            if (page !== destinationPage) page?.classList.add("page--hidden");
        });
    };
}

class Firebase {
    firebaseConfig = {
        apiKey: "AIzaSyAfLyWlU3BMjia7qU9-qYDGGMuuPEBtFqU",
        authDomain: "blitz-chat-d6dc9.firebaseapp.com",
        projectId: "blitz-chat-d6dc9",
        storageBucket: "blitz-chat-d6dc9.appspot.com",
        messagingSenderId: "909983333760",
        appId: "1:909983333760:web:be045f1d22c5d9378ed565",
        measurementId: "G-8VW8H07175",
    };
    app = initializeApp(this.firebaseConfig);
    analytics = getAnalytics(this.app);
}

const initApp = (): void => {
    console.log("Site loaded");
    const router = new Router();

    registerBtn?.addEventListener("click", () => {
        router.navigate(loginPage);
    });

    loginBtn?.addEventListener("click", () => {
        router.navigate(chatroomsPage);
    });

    chatrooms.map((chatroom) => {
        chatroom?.addEventListener("click", () => {
            router.navigate(chatPage);
        });
    });

    // registerBtn?.addEventListener("click", () => {
    //     router.navigate(loginPage);
    // });

    // registerBtn?.addEventListener("click", () => {
    //     router.navigate(loginPage);
    // });

    // registerBtn?.addEventListener("click", () => {
    //     router.navigate(loginPage);
    // });
};

window.addEventListener("load", initApp);
