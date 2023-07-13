import logo from "../assets/logo.png";
import { meetupConstants } from "../constants/meetup-constants";
import { useMeetup } from "../main";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { setMeetup } = useMeetup();
  const { SET_TEXT_FILTER } = meetupConstants;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row">
      <div className="h-10 hover:cursor-pointer" onClick={() => navigate("/")}>
        <img src={logo} className="h-full" />
      </div>
      <div>
        <input
          type="text"
          className="h-8 rounded-lg border p-5"
          placeholder="Search by title or tags..."
          onChange={(e) => {
            setMeetup({ type: SET_TEXT_FILTER, payload: e.target.value });
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};
