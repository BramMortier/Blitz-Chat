// ------------------------------------------- //
// module imports
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, Auth, UserCredential, signOut } from "firebase/auth";
import { navigate } from "../lib/router";
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
} from "../lib/constants";
// ------------------------------------------- //

// init authentication
export const auth: Auth = getAuth();

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
            if (loginFormErr !== null) loginFormErr.innerHTML = "Wrong email password combination";
            console.error(`code: ${error.code} error: ${error.message}`);
        }
    }
};

auth.onAuthStateChanged((user) => {
    console.log(user);
});

export const logout = (): void => {
    console.log("signing out...");
    auth.signOut();
    navigate(loginPage);
};
