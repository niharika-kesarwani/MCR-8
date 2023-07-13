import { meetupConstants } from "../constants/meetup-constants";
import { useMeetup } from "../main";

export const RSVPModal = () => {
  const {
    meetup: { selectedMeetup },
    setMeetup,
  } = useMeetup();
  const { SET_SHOW_RSVP_MODAL, SET_RSVP_MEETUP } = meetupConstants;

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
  } = selectedMeetup;

  const formSubmitHandler = () => {
    setMeetup({ type: SET_SHOW_RSVP_MODAL, payload: false });
    setMeetup({ type: SET_RSVP_MEETUP, payload: selectedMeetup });
  };

  return (
    <div
      className="mx-2 flex max-h-screen w-full max-w-lg flex-col gap-5 overflow-y-auto rounded-lg bg-white p-5"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="text-2xl font-bold
      "
      >
        Complete your RSVP
      </div>
      <div className="text-slate-800">Fill in your personal information.</div>
      <form className="flex flex-col gap-5" onSubmit={formSubmitHandler}>
        <div className="flex flex-col gap-3">
          <label className="font-bold">Name:</label>
          <input type="text" className="rounded-lg border p-2" />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-bold">Email:</label>
          <input type="email" className="rounded-lg border p-2" />
        </div>
        {isPaid && <div>* You have to make the payment at the venue.</div>}
        <button
          type="submit"
          className="w-min self-center rounded-lg bg-red-300 px-8 py-2 font-bold text-white hover:bg-red-400"
        >
          RSVP
        </button>
      </form>
    </div>
  );
};
