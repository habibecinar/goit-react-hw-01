import React from "react";
import styles from "./FriendListItem.module.css";
function FriendListItem({ avatar, name, isOnline }) {
  const statusClass = isOnline ? styles.online : styles.offline;

  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p className={`${styles.status} ${statusClass}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
