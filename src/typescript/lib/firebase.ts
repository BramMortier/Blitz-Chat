// ------------------------------------------- //
// module imports
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, Auth, UserCredential } from "firebase/auth";
import {
    registerName,
    registerEmail,
    registerPassword,
    registerNameErr,
    registerPasswordErr,
    registerEmailErr,
    loginPage,
    registerFormErr,
    loginEmail,
    loginEmailErr,
    loginPassword,
    loginPasswordErr,
    chatroomsPage,
    loginFormErr,
} from "./constants";
import { navigate } from "./router";
// ------------------------------------------- //

const firebaseConfig = {
    apiKey: "AIzaSyAfLyWlU3BMjia7qU9-qYDGGMuuPEBtFqU",
    authDomain: "blitz-chat-d6dc9.firebaseapp.com",
    projectId: "blitz-chat-d6dc9",
    storageBucket: "blitz-chat-d6dc9.appspot.com",
    messagingSenderId: "909983333760",
    appId: "1:909983333760:web:be045f1d22c5d9378ed565",
    measurementId: "G-8VW8H07175",
};

export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth();
export const db: Firestore = getFirestore(firebaseApp);
export const analytics: Analytics = getAnalytics(firebaseApp);

export const register = async (e: Event): Promise<void> => {
    e.preventDefault();

    let errorList: string[] = [];

    let name: string = "";
    let email: string = "";
    let password: string = "";

    if (registerName?.value) {
        name = registerName.value;
    } else {
        errorList.push("name error");
        if (registerNameErr !== null) registerNameErr.innerHTML = "please fill in your name";
    }

    if (registerEmail?.value) {
        email = registerEmail.value;
    } else {
        errorList.push("email error");
        if (registerEmailErr !== null) registerEmailErr.innerHTML = "please fill in your e-mail";
    }

    if (registerPassword?.value) {
        password = registerPassword.value;
    } else {
        errorList.push("password error");
        if (registerPasswordErr !== null) registerPasswordErr.innerHTML = "please fill in a password";
    }

    if (errorList.length == 0) {
        try {
            let userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            if (userCredential) {
                navigate(loginPage);
            }
        } catch (error) {
            if (registerFormErr !== null) registerFormErr.innerHTML = "An account with this email already exists";
            console.error(`code: ${error.code} error: ${error.message}`);
        }
    }
};

export const login = async (e: Event): Promise<void> => {
    e.preventDefault();

    let errorList: string[] = [];

    let email: string = "";
    let password: string = "";

    if (loginEmail?.value) {
        email = loginEmail.value;
    } else {
        errorList.push("email error");
        if (loginEmailErr !== null) loginEmailErr.innerHTML = "please fill in your e-mail";
    }

    if (loginPassword?.value) {
        password = loginPassword.value;
    } else {
        errorList.push("password error");
        if (loginPasswordErr !== null) loginPasswordErr.innerHTML = "please fill in a password";
    }

    if (errorList.length == 0) {
        try {
            let userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
            if (userCredential) {
                navigate(chatroomsPage);
            }
        } catch (error) {
            if (loginFormErr !== null) loginFormErr.innerHTML = "A login error occured";
            console.error(`code: ${error.code} error: ${error.message}`);
        }
    }
};
