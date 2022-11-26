// ------------------------------------------- //
// module imports
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// ------------------------------------------- //

export class Firebase {
    private firebaseConfig: object = {
        apiKey: "AIzaSyAfLyWlU3BMjia7qU9-qYDGGMuuPEBtFqU",
        authDomain: "blitz-chat-d6dc9.firebaseapp.com",
        projectId: "blitz-chat-d6dc9",
        storageBucket: "blitz-chat-d6dc9.appspot.com",
        messagingSenderId: "909983333760",
        appId: "1:909983333760:web:be045f1d22c5d9378ed565",
        measurementId: "G-8VW8H07175",
    };
    public app: FirebaseApp = initializeApp(this.firebaseConfig);
    public analytics: Analytics = getAnalytics(this.app);
}

export class Authentication extends Firebase {
    constructor() {
        super();
    }
}
