import { useContext } from "react";
import { PostList } from "../store/post-list-store";



function Post({ post }) {
const {deletePost} = useContext(PostList);

  return (
    <div className="m-2">
      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-900 text-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"></div>
          <div className="font-bold text-xl mb-2">
            {post.id}. {post.title}
          </div>
          <p className="text-base">{post.body}</p>
          <p className="text-base">
            Likes-
            {post.reactions}
          </p>
          <p className="text-base">
            User Id-
            {post.userId}
          </p>
          <button onClick={() => deletePost(post.id)}>delete</button>
        </div>
        <div className="px-6 pt-4 pb-2">
          {post.tags.map((tag) => (
            <a key={tag}
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
