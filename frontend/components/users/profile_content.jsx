import React from "react";
import UserPostsContainer from "../posts/user_posts_container";
import FriendsContainer from "./friends_container";

const ProfileContent = props => {
  return props.toRender === "friends" ? (
    <FriendsContainer user={props.user} />
  ) : (
    <UserPostsContainer user={props.user} />
  );
};

export default ProfileContent;
