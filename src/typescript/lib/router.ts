// ------------------------------------------- //
// module imports
import {
    registerBtn,
    loginBtn,
    backBtns,
    createChatBtn,
    completeCreateChatBtn,
    loginPage,
    chatPage,
    chatroomsPage,
    chatrooms,
    pages,
    createChatPage,
} from "./constants";
// ------------------------------------------- //

export class Router {
    navigate = (destinationPage: Element | null): void => {
        destinationPage?.classList.remove("page--hidden");

        pages.map((page: Element | null) => {
            if (page !== destinationPage) page?.classList.add("page--hidden");
        });
    };
}

export class Navigation extends Router {
    constructor() {
        super();

        registerBtn?.addEventListener("click", () => {
            this.navigate(loginPage);
        });

        loginBtn?.addEventListener("click", () => {
            this.navigate(chatroomsPage);
        });

        createChatBtn?.addEventListener("click", () => {
            this.navigate(createChatPage);
        });

        completeCreateChatBtn?.addEventListener("click", () => {
            this.navigate(chatroomsPage);
        });

        chatrooms.map((chatroom: Element | null) => {
            chatroom?.addEventListener("click", () => {
                this.navigate(chatPage);
            });
        });

        backBtns.map((backBtn: Element | null) => {
            backBtn?.addEventListener("click", () => {
                this.navigate(chatroomsPage);
            });
        });
    }
}
