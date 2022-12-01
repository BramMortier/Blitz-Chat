// ------------------------------------------- //
// module imports
import { firebaseApp } from "./firebase";
import { NewChatroomData, renderChatroom, renderChatroomInfo } from "../lib/chatrooms";
import { NewMessageData, renderMessage } from "../lib/messages";
import { chatroomsList, messagesList } from "../lib/constants";
import {
    Firestore,
    getFirestore,
    collection,
    CollectionReference,
    DocumentData,
    query,
    Query,
    QueryDocumentSnapshot,
    where,
    orderBy,
    addDoc,
    onSnapshot,
    updateDoc,
    doc,
    DocumentReference,
    getDoc,
} from "firebase/firestore";
import { timestampFormat } from "../lib/date_formatting";
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

export const getChatroomInfo = async (chatroomId: string): Promise<void> => {
    const chatroomRef: DocumentReference<DocumentData> = doc(db, "chatrooms", chatroomId);

    const chatroom = await getDoc(chatroomRef);
    renderChatroomInfo(chatroom.data());
};

export const updateChatroom = async (chatroomId: string, data: any): Promise<void> => {
    const chatroomRef: DocumentReference<DocumentData> = doc(db, "chatrooms", chatroomId);

    await updateDoc(chatroomRef, {
        lastMessage: data.message,
        timeOfLastMessage: timestampFormat(data.timestamp),
    });
};

export const updateChatroomUsers = async (chatroomId: string, amount: number): Promise<void> => {
    const chatroomRef: DocumentReference<DocumentData> = doc(db, "chatrooms", chatroomId);

    await updateDoc(chatroomRef, {
        activeUsers: amount,
    });
};

export const newChatroom = async (data: NewChatroomData): Promise<void> => {
    await addDoc(chatroomsRef, data);
};

export const getMessages = async (chatroomId: string): Promise<void> => {
    const queryStatement: Query<DocumentData> = query(messagesRef, where("chatroomId", "==", chatroomId), orderBy("timestamp"));

    const messagesSnapshot = onSnapshot(queryStatement, (messages) => {
        messagesList.innerHTML = "";

        messages.forEach((message: QueryDocumentSnapshot<DocumentData>) => {
            renderMessage(message.data());
        });
    });
};

export const newMessage = async (data: NewMessageData): Promise<void> => {
    await addDoc(messagesRef, data);
};
