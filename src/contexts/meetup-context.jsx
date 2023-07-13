/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer } from "react";
import { initialMeetup, meetupReducer } from "../reducers/meetup-reducer";

export const MeetupContext = createContext();

export const MeetupProvider = ({ children }) => {
  const [meetup, setMeetup] = useReducer(meetupReducer, initialMeetup);

  const { allMeetups, eventTypeFilter } = meetup;
  const displayMeetups =
    eventTypeFilter === "both"
      ? allMeetups
      : allMeetups?.filter(({ eventType }) =>
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
