/* eslint-disable react/prop-types */
export const MeetupCard = ({ meetup }) => {
  const {
    id,
    title,
    eventStartTime,
    eventEndTime,
    location,
    address,
    eventThumbnail,
    eventDescription,
    eventType,
    isPaid,
    eventTags,
    speakers,
    price,
    additionalInformation,
  } = meetup;
  return (
    <div className="flex h-60 w-60 flex-col gap-2">
      <div className="relative h-[60%] object-contain">
        <img src={eventThumbnail} className="h-full rounded-lg" />
        <div className="absolute left-2 top-2 rounded-lg bg-slate-100 px-2 py-1">
          {eventType} Event
        </div>
      </div>
      <div>
        <div className="text-neutral-700">{eventStartTime}</div>
        <div className="text-lg font-bold">{title}</div>
      </div>
    </div>
  );
};
