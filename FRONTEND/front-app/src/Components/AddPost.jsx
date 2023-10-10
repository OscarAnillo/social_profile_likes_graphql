import { useState } from "react";
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../Mutation/post-mutation";
import { GET_ALL_POSTS } from "../Queries/post-queries";

export const AddPost = () => {
  const { user } = useSelector((state) => state.users);
  const [userInput, setUserInput] = useState("");
  const [createPost] = useMutation(CREATE_POST, {
    refetchQueries: [{ query: GET_ALL_POSTS }],
  });

  const submitHandler = (e) => {
    e.preventDefault();

    createPost({
      variables: { userId: user.id, description: userInput, picturePath: "" },
    });
    setUserInput("");
  };

  return (
    <div className="add-post-div">
      <div className="add-post-container">
        <div className="add-post-row">
          <img src={user.picturePath} alt="" />
          <div>
            <h4>
              {user.firstName} {user.lastName}
            </h4>
            <p>{user.location}</p>
          </div>
        </div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Add post..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
