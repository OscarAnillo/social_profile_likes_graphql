import { useSelector } from "react-redux";
import { MdLocationOn, MdWork } from "react-icons/md";

export const ProfileCard = () => {
  const { user } = useSelector((state) => state.users);

  return (
    <div className="profile-div">
      <div className="profile-container-div">
        <img src={user.picturePath} alt="" className="profile-img" />
        <div>
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <p>{user.occupation}</p>
        </div>
        <hr style={{ margin: "10px" }} />
        <div className="row-user">
          <MdLocationOn className="icon" />
          <p className="user-data">{user.location}</p>
        </div>
        <div className="row-user">
          <MdWork className="icon" />
          <p className="user-data">{user.occupation}</p>
        </div>
        <hr style={{ margin: "10px" }} />
        <p className="user-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
          magnam. Harum soluta illum laboriosam eius eligendi vel blanditiis?
          Quod, cupiditate voluptas. Dolores mollitia reprehenderit blanditiis
          fugiat, quod a cum voluptatum?
        </p>
      </div>
    </div>
  );
};
