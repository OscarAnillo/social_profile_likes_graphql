import { ProfileCard } from "../Components/ProfileCard";
import { AddPost } from "../Components/AddPost";
import { AdComponent } from "../Components/AdComponent";
import { AllPost } from "../Components/AllPosts";

export const Home = () => {
  return (
    <div className="home-row">
      <ProfileCard />
      <div>
        <AddPost />
        <AllPost />
      </div>
      <AdComponent />
    </div>
  );
};
