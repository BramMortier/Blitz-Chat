// ------------------------------------------- //
// module imports
import { Timestamp } from "firebase/firestore";
import { newMessage, updateChatroom } from "../firebase/database";
import { messageForm, messagesList } from "./constants";
import { timestampFormat } from "./date_formatting";
import { validateText } from "./validation";
// ------------------------------------------- //

export type NewMessageData = {
    chatroomId: string;
    message: string;
    timestamp: Timestamp;
    user: string;
};

export const renderMessage = (data: any): void => {
    let messageEl = document.createElement("li");

    if (data.user == sessionStorage.getItem("userId")) {
        messageEl.classList.add("chat__message--owned");
    } else {
        messageEl.classList.add("chat__message");
    }

    messageEl.innerHTML = `
        <p class="chat__message-content">${data.message}</p>
        <p class="chat__message-timestamp extra-subtle">${timestampFormat(data.timestamp)}</p>
    `;

    messagesList.appendChild(messageEl);
    updateChatroom(sessionStorage.getItem("currentChatroomId") as string, data);
};

export const sendMessage = async (e: Event): Promise<void> => {
    e.preventDefault();

    let message: string = messageForm.message.value;

    let data: NewMessageData = {
        chatroomId: sessionStorage.getItem("currentChatroomId") as string,
        message: message,
        timestamp: Timestamp.now(),
        user: sessionStorage.getItem("userId") as string,
    };

    if (validateText(message)) {
        messageForm.reset();
        newMessage(data);
    }
};
