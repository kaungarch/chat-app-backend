import express from "express";
import { verifyToken } from "../middleware/verifyToken";
import {
  accessChat,
  fetchChats,
  sendMessage,
  test,
} from "../controllers/ChatController";

const router = express.Router();

router.post("/chat", verifyToken, accessChat);

router.post("/send", verifyToken, sendMessage);

router.post("/get_all_chats", verifyToken, fetchChats);

router.get("/test_something", verifyToken, test);

export { router };
