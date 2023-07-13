import logo from "../assets/logo.png";
import { meetupConstants } from "../constants/meetup-constants";
import { useMeetup } from "../main";

export const Header = () => {
  const { setMeetup } = useMeetup();
  const { SET_TEXT_FILTER } = meetupConstants;

  return (
    <div className="flex h-10 flex-col justify-between md:flex-row">
      <div className="h-full">
        <img src={logo} className="h-full" />
      </div>
      <div>
        <input
          type="text"
          className="h-8 rounded-lg border p-5"
          placeholder="Search by title or tags..."
          onChange={(e) =>
            setMeetup({ type: SET_TEXT_FILTER, payload: e.target.value })
          }
        />
      </div>
    </div>
  );
};
