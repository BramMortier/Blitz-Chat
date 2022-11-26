// ------------------------------------------- //
// module imports
import { Navigation } from "./lib/router";
import { Firebase } from "./lib/firebase";
// ------------------------------------------- //

export class App {
    constructor() {
        // init app navigation
        let navigation: Navigation = new Navigation();

        // init firebase auth & db
        let firebase: Firebase = new Firebase();
    }
}
