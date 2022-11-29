// ------------------------------------------- //
// module imports
import { getMessages, newChatroom } from "../firebase/database";
import { chatPage, chatroomsList, chatroomsPage, createChatroomForm, createChatroomNameErr, createChatroomThemeErr } from "./constants";
import { navigate } from "./router";
import { validateText } from "./validation";
// ------------------------------------------- //

export const renderChatroom = (id: string, data: any): void => {
    let chatroomEl: Element = document.createElement("li");
    chatroomEl.classList.add("chatrooms__chat");
    chatroomEl.innerHTML = `
        <span class="chatrooms__chatroom-id">${id}</span>
        <div class="chatrooms__chat-icon">
            <div class="chatrooms__icon-placeholder"></div>
        </div>
        <div class="chatrooms__chat-info">
            <h4 class="primary-font text-inverted">${data.name}</h4>
            <p class="extra-subtle bold text-xs">${data.lastMessage}</p>
        </div>
        <div class="chatrooms__chat-status">
            <p class="extra-subtle bold text-xs">${data.timeOfLastMessage}</p>
            <img src="./images/icons/check.svg" alt="status icon" />
        </div>
    `;

    chatroomEl?.addEventListener("click", (e: Event): void => {
        let targetChatroom = e.target as HTMLElement;
        getMessages(targetChatroom.innerText);

        navigate(chatPage);
    });

    chatroomsList?.appendChild(chatroomEl);
};

export type newChatroomData = {
    name: string;
    description: string;
    theme: string;
    lastMessage: string;
    timeOfLastMessage: string;
};

export const createChatroom = async (e: Event): Promise<void> => {
    e.preventDefault();

    let name: string = createChatroomForm.groupname.value;
    let description: string = createChatroomForm.description.value;
    let theme: string = createChatroomForm.theme.value;

    if (!validateText(name)) createChatroomNameErr.innerHTML = "please fill in a name";
    if (!validateText(theme)) createChatroomThemeErr.innerHTML = "please choose a theme";

    let data: newChatroomData = {
        name: name,
        description: description,
        theme: theme,
        lastMessage: "",
        timeOfLastMessage: "",
    };

    if (validateText(name) && validateText(theme)) {
        newChatroom(data);
        navigate(chatroomsPage);
    }
};
