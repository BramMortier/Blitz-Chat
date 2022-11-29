// ------------------------------------------- //
// module imports
import { newChatroom } from "../firebase/database";
import { chatPage, chatroomsList, chatroomsPage, createChatroomForm } from "./constants";
import { navigate } from "./router";
// ------------------------------------------- //

export const renderChatroom = (id: string, data: any): void => {
    let chatroomEl: Element = document.createElement("li");
    chatroomEl.classList.add("chatrooms__chat");
    chatroomEl.innerHTML = `
        <div class="chatrooms__chat-icon">
            <div class="chatrooms__icon-placeholder"></div>
        </div>
        <div class="chatrooms__chat-info">
            <span class="chatrooms__chatroom-id">${id}</span>
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

        targetChatroom = targetChatroom.classList.contains("chatrooms__chat") ? targetChatroom : (targetChatroom.parentElement as HTMLElement);

        console.log(targetChatroom);

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

    let data: newChatroomData = {
        name: name,
        description: description,
        theme: theme,
        lastMessage: "",
        timeOfLastMessage: "",
    };

    newChatroom(data);

    // navigate(chatroomsPage);
};
