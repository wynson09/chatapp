import addNotification from "react-push-notification";
const Notification = ({
  userMsg,
  currentUser,
  seen,
  doneNotify,
  chatID,
  dataUser,
}) => {
  if (!seen) {
    doneNotify(chatID, currentUser, dataUser);
    if (userMsg !== currentUser) {
      addNotification({
        title: "Inta Chat Notification!",
        message: "You have a new message.",
        duration: 5000,
        native: true,
      });
    }
  }

  return <div></div>;
};

export default Notification;
