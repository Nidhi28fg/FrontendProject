import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function Form() {
  const {addPost} = useContext(PostList);
  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const reactions = useRef();
  const tags = useRef();

const handleSubmit = (event) =>{
  event.preventDefault();
  const userId1 = userId.current.value;
  const postTitle1 = postTitle.current.value;
  const postBody1 = postBody.current.value;
  const reactions1 = reactions.current.value;
  // const tags1 = tags.current.value.split(/(\s+)/);
  const tags1 = tags.current.value.split(" ");

  userId.current.value= "";
  postTitle.current.value= "";
  postBody.current.value= "";
  reactions.current.value= "";
  tags.current.value= "";

  addPost ( userId1, postTitle1, postBody1, reactions1, tags1);

}

return (
    <div>
      <div className="p-3 bg-black text-white">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="userId"
              className="block text-sm font-medium text-gray-300"
            >
              Post userId
            </label>
            <input
              type="text"
              id="userId"
              ref={userId}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <div id="emailHelp" className="mt-1 text-xs text-gray-400">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-300"
            >
              Post Title
            </label>
            <input
              type="text"
              id="title"
              ref={postTitle}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <div id="emailHelp" className="mt-1 text-xs text-gray-400">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-3">
              <label
                htmlFor="body"
                className="block text-sm font-medium text-gray-300"
              >
                Post Body
              </label>
              <input
                type="text"
                id="body"
                ref={postBody}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-3 flex items-center">
            <div className="mb-3">
              <label
                htmlFor="reactions"
                className="block text-sm font-medium text-gray-300"
              >
                Reactions
              </label>
              <input
                type="text"
                id="reactions"
                ref={reactions}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-3 flex items-center">
            <div className="mb-3">
              <label
                htmlFor="userId"
                className="block text-sm font-medium text-gray-300"
              >
                UserId
              </label>
              <input
                type="text"
                id="userId"
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-3 flex items-center">
            <div className="mb-3">
              <label
                htmlFor="tags"
                className="block text-sFm font-medium text-gray-300"
              >
                Tags
              </label>
              <input
                type="text"
                id="tags"
                ref={tags}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
