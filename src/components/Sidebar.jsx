import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const Sidebar = () => {
  const doneNotify = async (chatID, currentUser, dataUser) => {
    await updateDoc(doc(db, "userChats", currentUser), {
      [chatID + ".seen"]: true,
    });

    await updateDoc(doc(db, "userChats", dataUser), {
      [chatID + ".seen"]: true,
    });
  };

  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats doneNotify={doneNotify} />
    </div>
  );
};

export default Sidebar;
