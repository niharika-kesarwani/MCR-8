/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import { forumReducer, initialForum } from "../reducers/forum-reducer";

export const ForumContext = createContext();

export const ForumProvider = ({ children }) => {
  const [forum, setForum] = useReducer(forumReducer, initialForum);

  const displayPosts =
    forum?.selectedSort === "Latest Posts"
      ? [...forum.forumData.posts]?.sort((a, b) => {
          const date1 = new Date(a.createdAt);
          const date2 = new Date(b.createdAt);
          return date2 - date1;
        })
      : [...forum.forumData.posts]?.sort((a, b) => a.upvotes > b.upvotes);

  return (
    <ForumContext.Provider value={{ forum, setForum, displayPosts }}>
      {children}
    </ForumContext.Provider>
  );
};

export const useForum = () => useContext(ForumContext);
