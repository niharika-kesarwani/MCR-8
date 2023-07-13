import { meetups } from "../data/meetup-data";
import { meetupConstants } from "../constants/meetup-constants";

const {
  SET_TEXT_FILTER,
  SET_TYPE_FILTER,
  SET_SHOW_RSVP_MODAL,
  SET_SELECTED_MEETUP,
  SET_RSVP_MEETUP,
} = meetupConstants;

export const meetupReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TEXT_FILTER:
      return { ...state, textFilter: payload };
    case SET_TYPE_FILTER:
      return { ...state, eventTypeFilter: payload };
    case SET_SHOW_RSVP_MODAL:
      return { ...state, showRSVPModal: payload };
    case SET_SELECTED_MEETUP:
      return { ...state, selectedMeetup: payload };
    case SET_RSVP_MEETUP:
      return {
        ...state,
        allMeetups: state?.allMeetups?.map((meetup) =>
          meetup.id === payload.id ? { ...payload, isRSVP: true } : meetup
        ),
      };
    default:
      return state;
  }
};

export const initialMeetup = {
  allMeetups: meetups,
  textFilter: "",
  eventTypeFilter: "both",
  showRSVPModal: false,
  selectedMeetup: {},
};
