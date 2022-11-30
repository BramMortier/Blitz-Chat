// ------------------------------------------- //
// module imports
import { firebaseApp } from "./firebase";
import { newChatroomData, renderChatroom } from "../lib/chatrooms";
import { newMessageData, renderMessage } from "../lib/messages";
import { chatroomsList, messagesList } from "../lib/constants";
import {
    Firestore,
    getFirestore,
    collection,
    CollectionReference,
    DocumentData,
    getDocs,
    query,
    where,
    QueryDocumentSnapshot,
    Query,
    addDoc,
    onSnapshot,
    orderBy,
} from "firebase/firestore";
// ------------------------------------------- //

// Database init
export const db: Firestore = getFirestore(firebaseApp);

// Collection references
let chatroomsRef: CollectionReference<DocumentData> = collection(db, "chatrooms");
let messagesRef: CollectionReference<DocumentData> = collection(db, "messages");

export const getChatrooms = async (): Promise<void> => {
    const chatroomsSnapshot = onSnapshot(chatroomsRef, (chatrooms) => {
        chatroomsList.innerHTML = "";

        chatrooms.forEach((chatroom: QueryDocumentSnapshot<DocumentData>) => {
            renderChatroom(chatroom.id, chatroom.data());
        });
    });
};

export const newChatroom = async (data: newChatroomData): Promise<void> => {
    await addDoc(chatroomsRef, data);
};

export const getMessages = async (chatroomId: string): Promise<void> => {
    let queryStatement: Query<DocumentData> = query(messagesRef, where("chatroomId", "==", chatroomId), orderBy("timestamp"));

    const messagesSnapshot = onSnapshot(queryStatement, (messages) => {
        messagesList.innerHTML = "";

        messages.forEach((message: QueryDocumentSnapshot<DocumentData>) => {
            renderMessage(message.data());
        });
    });
};

export const newMessage = async (data: newMessageData): Promise<void> => {
    await addDoc(messagesRef, data);
};
