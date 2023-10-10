import PropTypes from "prop-types";

export const PostComponent = ({ post }) => {
  return (
    <div className="all-posts-div">
      <div className="all-posts-row">
        <img src={post.userPicturePath} alt="" />
        <div>
          <h4>
            {post.firstName} {post.lastName}
          </h4>
          <p>{post.location}</p>
        </div>
      </div>
      <div className="post-user-info">
        <p>{post.description}</p>
        <img src={post.picturePath} alt="" width="100%" />
      </div>
    </div>
  );
};

PostComponent.propTypes = {
  post: PropTypes.object,
};
