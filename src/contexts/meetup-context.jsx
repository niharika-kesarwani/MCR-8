/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer } from "react";
import { initialMeetup, meetupReducer } from "../reducers/meetup-reducer";

export const MeetupContext = createContext();

export const MeetupProvider = ({ children }) => {
  const [meetup, setMeetup] = useReducer(meetupReducer, initialMeetup);

  const { allMeetups, textFilter, eventTypeFilter } = meetup;

  const searchFilteredMeetups =
    textFilter === ""
      ? allMeetups
      : allMeetups?.filter(
          ({ title, eventTags }) =>
            title.toLowerCase().includes(textFilter.toLowerCase()) ||
            eventTags.some((tag) =>
              tag.toLowerCase().includes(textFilter.toLowerCase)
            )
        );

  const displayMeetups =
    eventTypeFilter === "both"
      ? searchFilteredMeetups
      : searchFilteredMeetups?.filter(({ eventType }) =>
          eventTypeFilter === "online"
            ? eventType === "Online"
            : eventType === "Offline"
        );

  return (
    <MeetupContext.Provider value={{ meetup, setMeetup, displayMeetups }}>
      {children}
    </MeetupContext.Provider>
  );
};

export const useMeetup = () => useContext(MeetupContext);
