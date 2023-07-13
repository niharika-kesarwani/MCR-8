import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Sidebar } from "../components/Sidebar";
import { SortBar } from "../components/SortBar";
import { PostCard } from "../components/PostCard";
import { useForum } from "../main";
import { NavLink, useLocation } from "react-router-dom";

export const Home = () => {
  const {
    forum: { selectedSort, selectedPost },
    displayPosts,
  } = useForum();
  const location = useLocation();

  return (
    <div className="flex w-full grow justify-center bg-gray-100">
      <div className="flex w-full flex-col justify-between px-5 pb-5 pt-10 text-xl md:flex-row lg:max-w-5xl">
        <Sidebar />
        {location?.pathname === "/" ? (
          <div className="flex h-full w-full flex-col gap-5">
            <div className="w-full font-bold">{selectedSort}</div>
            <ul className="flex flex-col gap-5">
              {displayPosts?.map((post) => (
                <PostCard key={post?.postId} postData={post} />
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex h-full w-full flex-col gap-5">
            <div className="flex gap-5">
              <NavLink to="/">
                <ArrowBackOutlinedIcon />
              </NavLink>
              <div className="w-full font-bold">Post</div>
            </div>
            <PostCard postData={selectedPost} />
          </div>
        )}
        {location?.pathname === "/" && <SortBar />}
      </div>
    </div>
  );
};
