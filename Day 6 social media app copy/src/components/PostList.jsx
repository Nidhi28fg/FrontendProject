import { useContext } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/post-list-store";

function PostList () {
    const {postList} = useContext(PostListData);
    return (
        <div className="flex flex-wrap">
            {postList.map((post) => ( 
            <Post key={post.id} post={post}/>))}
        </div>
    )
}

export default PostList;