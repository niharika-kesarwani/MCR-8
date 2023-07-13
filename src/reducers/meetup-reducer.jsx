import { meetups } from "../data/meetup-data";
import { meetupConstants } from "../constants/meetup-constants";

const { SET_TEXT_FILTER, SET_TYPE_FILTER } = meetupConstants;

export const meetupReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TEXT_FILTER:
      return { ...state, textFilter: payload };
    case SET_TYPE_FILTER:
      return { ...state, eventTypeFilter: payload };
    default:
      return state;
  }
};

export const initialMeetup = {
  allMeetups: meetups,
  textFilter: "",
  eventTypeFilter: "both",
};
