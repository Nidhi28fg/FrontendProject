import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  console.log(`currentpostlist - ${currPostList}`);
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if ( action.type === "ADD_POST"){
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId1, postTitle1, postBody1, reactions1, tags1) => {
    console.log(`${userId1}`);
     dispatchPostList({
      type: "ADD_POST",
      payload: {
         id: Date.now(),
    title: postTitle1,
    body: postBody1,
    reactions: reactions1,
    userId: userId1,
    tags: tags1,
      },
    });

  };

  const deletePost = (postId) => {
    //action anounce function sometime happen as a action
    console.log(`${postId}`);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi friend, just landed in Mumbai and the energy here is incredible! Excited to explore the city.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Exploring the Himalayas",
    body: "The majestic Himalayas are breathtaking! Trekking through the mountains has been an unforgettable experience.",
    reactions: 5,
    userId: "user-3",
    tags: ["adventure", "mountains", "trekking", "Himalayas"],
  },
  {
    id: "3",
    title: "Food Tour in Delhi",
    body: "Delhi's street food scene is next level! Tried some amazing local delicacies today. My taste buds are thanking me!",
    reactions: 10,
    userId: "user-12",
    tags: ["food", "Delhi", "travel", "street-food"],
  },
  {
    id: "4",
    title: "Relaxing on the Beaches of Goa",
    body: "Soaking up the sun and enjoying the serene beaches of Goa. This is the perfect escape!",
    reactions: 7,
    userId: "user-6",
    tags: ["beach", "relaxing", "Goa", "vacation"],
  },
  {
    id: "5",
    title: "Historical Wonders of Rajasthan",
    body: "Immersed in the rich history and vibrant culture of Rajasthan. The forts and palaces are simply stunning.",
    reactions: 8,
    userId: "user-15",
    tags: ["history", "culture", "Rajasthan", "travel"],
  },
];

export default PostListProvider;
