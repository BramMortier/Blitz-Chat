// ------------------------------------------- //
// module imports
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, Auth, UserCredential, User } from "firebase/auth";
import { validateEmail, validateUsername, validatePassword } from "../lib/validation";
import { navigate } from "../lib/router";
import {
    registerUsernameErr,
    registerPasswordErr,
    registerEmailErr,
    loginPage,
    registerFormErr,
    loginEmailErr,
    loginPasswordErr,
    chatroomsPage,
    loginFormErr,
    loginForm,
    registerForm,
} from "../lib/constants";
// ------------------------------------------- //

// init authentication
export const auth: Auth = getAuth();

auth.onAuthStateChanged((user: User): void => {
    if (user) {
        sessionStorage.setItem("userId", user.uid);
        navigate(chatroomsPage);
    } else {
        sessionStorage.removeItem("userId");
        navigate(loginPage);
    }
});

export const register = async (e: Event): Promise<void> => {
    e.preventDefault();

    let username: string = registerForm.username.value;
    let email: string = registerForm.email.value;
    let password: string = registerForm.password.value;

    if (!validateUsername(username)) registerUsernameErr.innerHTML = "please fill in a username";
    if (!validateEmail(email)) registerEmailErr.innerHTML = "please fill in your email";
    if (!validatePassword(password)) registerPasswordErr.innerHTML = "password can't be empty";

    if (validateUsername(username) && validateEmail(email) && validatePassword(password)) {
        try {
            let userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);

            if (userCredential) {
                registerForm.reset();
                navigate(loginPage);
            }
        } catch (error) {
            registerFormErr.innerHTML = "An account with this email already exists";
        }
    }
};

export const login = async (e: Event): Promise<void> => {
    e.preventDefault();

    let email: string = loginForm.email.value;
    let password: string = loginForm.password.value;

    if (!validateEmail(email)) loginEmailErr.innerHTML = "email can't be empty";
    if (!validatePassword(password)) loginPasswordErr.innerHTML = "password can't be empty";

    if (validateEmail(email) && validatePassword(password)) {
        try {
            let userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);

            if (userCredential) {
                loginForm?.reset();
                navigate(chatroomsPage);
            }
        } catch (error) {
            loginFormErr.innerHTML = "Wrong email password combination";
        }
    }
};

export const logout = (): void => {
    auth.signOut();
};
