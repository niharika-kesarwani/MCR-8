import { useParams } from "react-router-dom";
import { useMeetup } from "../main";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import { meetupConstants } from "../constants/meetup-constants";
import { useEffect } from "react";

export const MeetupDetail = () => {
  const { meetupId } = useParams();
  const {
    meetup: { allMeetups },
    setMeetup,
  } = useMeetup();
  const { SET_SHOW_RSVP_MODAL, SET_SELECTED_MEETUP } = meetupConstants;

  const selectedMeetup = allMeetups?.find(({ id }) => id === meetupId);

  const {
    id,
    title,
    eventStartTime,
    eventEndTime,
    location,
    address,
    eventThumbnail,
    eventDescription,
    hostedBy,
    eventType,
    isPaid,
    eventTags,
    speakers,
    price,
    additionalInformation,
    isRSVP,
  } = selectedMeetup;

  useEffect(() => {
    setMeetup({ type: SET_SELECTED_MEETUP, payload: selectedMeetup });
  }, []);

  return (
    <div className="flex flex-col gap-10 md:flex-row">
      <div className="flex basis-[50%] flex-col gap-5">
        <div className="text-3xl font-bold">{title}</div>
        <div className="flex flex-col">
          <div>Hosted By:</div>
          <div className="font-bold">{hostedBy}</div>
        </div>
        <div>
          <img src={eventThumbnail} />
        </div>
        <div className="text-2xl font-bold">Details:</div>
        <div>{eventDescription}</div>
        <div className="text-2xl font-bold">Additional Information:</div>
        <div>
          {Object.entries(additionalInformation)?.map(([one, value], index) => (
            <div key={index}>
              <span className="font-bold">{one}:</span> {value}
            </div>
          ))}
        </div>
        <div className="text-2xl font-bold">Event Tags:</div>
        <div className="flex gap-3">
          {eventTags?.map((tag, index) => (
            <div
              key={index}
              className="rounded-lg bg-red-400 px-2 py-1.5 text-white"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="flex basis-[50%] flex-col gap-5">
        <div className="flex flex-col gap-5 rounded-lg bg-white p-5">
          <div className="flex items-center gap-3">
            <div>
              <AccessTimeIcon />
            </div>
            <div className="flex flex-col">
              <div>{eventStartTime} to</div>
              <div>{eventEndTime}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <FmdGoodOutlinedIcon />
            </div>
            <div className="flex flex-col">
              <div>{location}</div>
              <div>{address}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <CurrencyRupeeOutlinedIcon />
            </div>
            <div>{price}</div>
          </div>
        </div>
        <div className="text-2xl font-bold">Speakers: ({speakers?.length})</div>
        <div className="flex gap-5">
          {speakers?.map((speaker, index) => {
            const { name, image, designation } = speaker;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-lg bg-white p-3 text-center"
              >
                <div className="h-10 w-10">
                  <img
                    src={image}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="font-bold">{name}</div>
                <div>{designation}</div>
              </div>
            );
          })}
        </div>
        {new Date(eventStartTime) > new Date() && (
          <button
            className="w-min self-center rounded-lg bg-red-400 px-8 py-2 font-bold text-white"
            onClick={() =>
              setMeetup({ type: SET_SHOW_RSVP_MODAL, payload: true })
            }
          >
            {isRSVP ? "Already RSVPed" : "RSVP"}
          </button>
        )}
      </div>
    </div>
  );
};
