// ------------------------------------------- //
// module imports
import { newMessage } from "../firebase/database";
import { messageForm, messagesList } from "./constants";
import { validateText } from "./validation";
// ------------------------------------------- //

export type newMessageData = {
    chatroomId: string;
    message: string;
    timestamp: string;
    user: string;
};

export const renderMessage = (data: any): void => {
    console.log(data.message);

    let messageEl = document.createElement("li");
    messageEl.classList.add("chat__message");
    messageEl.innerHTML = `
        <p class="chat__message-content">${data.message}</p>
        <p class="chat__message-timestamp extra-subtle">${data.timestamp}</p>
    `;

    messagesList.appendChild(messageEl);
};

export const sendMessage = async (e: Event): Promise<void> => {
    e.preventDefault();

    let message: string = messageForm.message.value;

    let data: newMessageData = {
        chatroomId: "",
        message: "",
        timestamp: "",
        user: "",
    };

    if (validateText(message)) {
        newMessage(data);
    }
};
