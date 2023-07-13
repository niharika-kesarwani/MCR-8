import { MeetupCard } from "../components/MeetupCard";
import { useMeetup } from "../main";

export const Home = () => {
  const {
    meetup: { allMeetups },
  } = useMeetup();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="text-3xl font-bold">Meetup Events</div>
        <select className="p-2">
          <option>Select Event Type</option>
          <option>Online</option>
          <option>Offline</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-x-5">
        {allMeetups?.map((meetup) => (
          <MeetupCard meetup={meetup} key={meetup.id} />
        ))}
      </div>
    </div>
  );
};
