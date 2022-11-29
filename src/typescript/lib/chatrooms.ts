// ------------------------------------------- //
// module imports
import { chatPage, chatroomsList, chatroomsPage, createChatroomForm } from "./constants";
import { navigate } from "./router";
// ------------------------------------------- //

export const renderChatroom = (data: any): void => {
    let chatroomEl: Element = document.createElement("li");
    chatroomEl.classList.add("chatrooms__chat");
    chatroomEl.innerHTML = `
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

    chatroomEl?.addEventListener("click", (): void => {
        navigate(chatPage);
    });

    chatroomsList?.appendChild(chatroomEl);
};

export const createChatroom = (e: Event): void => {
    e.preventDefault();

    console.log(createChatroomForm.groupname.value);

    navigate(chatroomsPage);
};
