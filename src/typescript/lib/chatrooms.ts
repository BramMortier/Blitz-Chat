// ------------------------------------------- //
// module imports
import { getChatroomInfo, getMessages, newChatroom } from "../firebase/database";
import {
    activeChatroomUsers,
    chatPage,
    chatroomName,
    chatroomsList,
    chatroomsPage,
    createChatroomForm,
    createChatroomNameErr,
    createChatroomThemeErr,
    messagesList,
} from "./constants";
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
        getChatroomInfo(targetChatroom.innerText);

        sessionStorage.setItem("currentChatroomId", targetChatroom.innerText);

        navigate(chatPage);
    });

    chatroomsList?.appendChild(chatroomEl);
};

export const renderChatroomInfo = (data: any): void => {
    messagesList.className = "";
    messagesList.classList.add("chat__messages", `chat__messages--${data.theme}`);

    chatroomName.innerHTML = data.name;
    activeChatroomUsers.innerHTML = data.activeUsers;
};

export type NewChatroomData = {
    name: string;
    activeUsers: number;
    adminUser: string;
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

    let data: NewChatroomData = {
        name: name,
        activeUsers: 0,
        adminUser: sessionStorage.getItem("userId") as string,
        description: description,
        theme: theme,
        lastMessage: "No messages send yet",
        timeOfLastMessage: "",
    };

    if (validateText(name) && validateText(theme)) {
        createChatroomForm.reset();
        newChatroom(data);
        navigate(chatroomsPage);
    }
};
