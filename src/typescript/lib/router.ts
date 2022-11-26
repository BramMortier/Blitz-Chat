// ------------------------------------------- //
// module imports
import { registerBtn, loginBtn, loginPage, chatPage, chatroomsPage, chatrooms, pages } from "./constants";
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

        chatrooms.map((chatroom: Element | null) => {
            chatroom?.addEventListener("click", () => {
                this.navigate(chatPage);
            });
        });
    }
}
