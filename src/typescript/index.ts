// ------------------------------------------- //
// sass entry point
import "../sass/style.scss";

// module imports
import { registerBtn, loginBtn, loginPage, chatPage, chatroomsPage, chatrooms, pages } from "./lib/constants";
// import { Router } from "./lib/navigation";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// ------------------------------------------- //

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

// class Firebase {
//     firebaseConfig = {
//         apiKey: "AIzaSyAfLyWlU3BMjia7qU9-qYDGGMuuPEBtFqU",
//         authDomain: "blitz-chat-d6dc9.firebaseapp.com",
//         projectId: "blitz-chat-d6dc9",
//         storageBucket: "blitz-chat-d6dc9.appspot.com",
//         messagingSenderId: "909983333760",
//         appId: "1:909983333760:web:be045f1d22c5d9378ed565",
//         measurementId: "G-8VW8H07175",
//     };
//     app = initializeApp(this.firebaseConfig);
//     analytics = getAnalytics(this.app);
// }

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
