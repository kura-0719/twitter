import React from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function Timeline() {
  const postData = collection(db, "posts");
  getDocs(postData).then((querySnapshot) => {
    console.log(querySnapshot.docs.map((docs) => docs.data()));
  });

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <Post
        displayName="ぼく"
        username="me"
        verified={true}
        text="Reactなう。"
        avatar=""
        image="https://source.unsplash.com/random"
      />
    </div>
  );
}

export default Timeline;
