// ------------------------------------------- //
// module imports
import { pages } from "./constants";
// ------------------------------------------- //

export const navigate = (destinationPage: Element | null): void => {
    destinationPage?.classList.remove("page--hidden");

    pages.map((page: Element | null) => {
        if (page !== destinationPage) page?.classList.add("page--hidden");
    });
};
