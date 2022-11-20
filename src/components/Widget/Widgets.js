import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>
      <div className="widgets__widgetsContiner">
        <h2>今どうしてる？</h2>

        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId={"1593862522297122816"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="warriors"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/warriors"}
          options={{ text: "勉強中", via: "warriors" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
