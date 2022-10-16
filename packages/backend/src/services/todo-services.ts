import ChatItem from "@my-todo-app/shared"
import { loadAllChatItems, loadTodoItem, saveChatItem } from "../models/todos-repository"

export const saveChat = async (chatItem: ChatItem): Promise<ChatItem[]> => {
    if (!chatItem.text || chatItem.text == "") {
        throw new Error("Invalid text on todo item!")
    }

    chatItem.timeStamp = new Date()

    await saveChatItem(chatItem)

    return await loadAllChatItems()
}

export const loadChats = async (): Promise<ChatItem[]> => {
    return await loadAllChatItems();
}

export const loadItemById = async (chatId: string): Promise<ChatItem> => {
    const item = await loadTodoItem(chatId);
    if (!item) {
        throw new Error(`Can't find item with id ${chatId}`)
    }
    return item
}