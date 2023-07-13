/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer } from "react";
import { initialMeetup, meetupReducer } from "../reducers/meetup-reducer";

export const MeetupContext = createContext();

export const MeetupProvider = ({ children }) => {
  const [meetup, setMeetup] = useReducer(meetupReducer, initialMeetup);

  return (
    <MeetupContext.Provider value={{ meetup, setMeetup }}>
      {children}
    </MeetupContext.Provider>
  );
};

export const useMeetup = () => useContext(MeetupContext);
