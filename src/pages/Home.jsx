import { MeetupCard } from "../components/MeetupCard";
import { meetupConstants } from "../constants/meetup-constants";
import { useMeetup } from "../main";

export const Home = () => {
  const { setMeetup, displayMeetups } = useMeetup();
  const { SET_TYPE_FILTER } = meetupConstants;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col justify-between gap-5 md:flex-row">
        <div className="text-3xl font-bold">Meetup Events</div>
        <select
          className="p-2"
          onChange={(e) =>
            setMeetup({ type: SET_TYPE_FILTER, payload: e.target.value })
          }
        >
          <option value="both">Both</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-x-5">
        {displayMeetups?.map((meetup) => (
          <MeetupCard meetup={meetup} key={meetup.id} />
        ))}
      </div>
    </div>
  );
};
