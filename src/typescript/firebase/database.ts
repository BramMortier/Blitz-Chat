// ------------------------------------------- //
// module imports
import { firebaseApp } from "./firebase";
import { newChatroomData, renderChatroom } from "../lib/chatrooms";
import { chatroomsList } from "../lib/constants";
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
} from "firebase/firestore";
// ------------------------------------------- //

// Database init
export const db: Firestore = getFirestore(firebaseApp);

// Collection references
let chatroomsRef: CollectionReference<DocumentData> = collection(db, "chatrooms");
let messagesRef: CollectionReference<DocumentData> = collection(db, "messages");

onSnapshot(chatroomsRef, (chatrooms) => {
    chatroomsList.innerHTML = "";

    chatrooms.forEach((chatroom: QueryDocumentSnapshot<DocumentData>) => {
        // console.log(chatroom.id, "=>", chatroom.data());
        renderChatroom(chatroom.id, chatroom.data());
    });
});

export const newChatroom = async (data: newChatroomData): Promise<void> => {
    await addDoc(chatroomsRef, data);
};

export const getMessages = async (chatroomId: string): Promise<void> => {
    let ref: Query<DocumentData> = query(messagesRef, where("chatroomId", "==", chatroomId));

    const messages = await getDocs(ref);

    messages.forEach((message: QueryDocumentSnapshot<DocumentData>) => {
        console.log(message.id, "=>", message.data());
    });
};
