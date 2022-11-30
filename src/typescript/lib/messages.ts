// ------------------------------------------- //
// module imports
import { Timestamp } from "firebase/firestore";
import { newMessage } from "../firebase/database";
import { messageForm, messagesList } from "./constants";
import { validateText } from "./validation";
// ------------------------------------------- //

export type newMessageData = {
    chatroomId: string;
    message: string;
    timestamp: Timestamp;
    user: string;
};

export const renderMessage = (data: any): void => {
    let messageEl = document.createElement("li");
    messageEl.classList.add("chat__message");

    let hours: string = data.timestamp.toDate().getHours();
    let minutes: string = data.timestamp.toDate().getMinutes();

    messageEl.innerHTML = `
        <p class="chat__message-content">${data.message}</p>
        <p class="chat__message-timestamp extra-subtle">${hours}h ${minutes}</p>
    `;

    messagesList.appendChild(messageEl);
};

export const sendMessage = async (e: Event): Promise<void> => {
    e.preventDefault();

    let message: string = messageForm.message.value;

    let data: newMessageData = {
        chatroomId: sessionStorage.getItem("currentChatroomId") as string,
        message: message,
        timestamp: Timestamp.now(),
        user: sessionStorage.getItem("userId") as string,
    };

    if (validateText(message)) {
        newMessage(data);
    }
};
