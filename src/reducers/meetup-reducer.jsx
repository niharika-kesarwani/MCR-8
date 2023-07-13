import { meetups } from "../data/meetup-data";

export const meetupReducer = (state, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export const initialMeetup = {
  allMeetups: meetups,
};
