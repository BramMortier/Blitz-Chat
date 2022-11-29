// ------------------------------------------- //
// module imports
import { firebaseApp } from "./firebase";
import { renderChatroom } from "../lib/chatrooms";
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
} from "firebase/firestore";
// ------------------------------------------- //

export const db: Firestore = getFirestore(firebaseApp);

export const getChatrooms = async (): Promise<void> => {
    let ref: CollectionReference<DocumentData> = collection(db, "chatrooms");

    const chatrooms = await getDocs(ref);

    chatrooms.forEach((chatroom: QueryDocumentSnapshot<DocumentData>) => {
        // console.log(chatroom.id, "=>", chatroom.data());
        renderChatroom(chatroom.data());
    });
};

export const getMessages = async (chatroomId: string): Promise<void> => {
    let ref: Query<DocumentData> = query(collection(db, "messages"), where("chatroomId", "==", chatroomId));

    const messages = await getDocs(ref);

    messages.forEach((message: QueryDocumentSnapshot<DocumentData>) => {
        console.log(message.id, "=>", message.data());
    });
};
