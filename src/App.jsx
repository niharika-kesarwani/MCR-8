import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { MeetupDetail } from "./pages/MeetupDetail";
import { useMeetup } from "./main";
import { RSVPModal } from "./modals/RSVPModal";
import { meetupConstants } from "./constants/meetup-constants";

function App() {
  const {
    meetup: { showRSVPModal },
    setMeetup,
  } = useMeetup();
  const { SET_SHOW_RSVP_MODAL } = meetupConstants;

  return (
    <div className="min-h-screen bg-slate-200 p-5">
      <Header />
      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-500" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meetup/:meetupId" element={<MeetupDetail />} />
      </Routes>
      {showRSVPModal && (
        <div
          className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-[black] bg-opacity-50"
          onClick={() =>
            setMeetup({ type: SET_SHOW_RSVP_MODAL, payload: false })
          }
        >
          <RSVPModal />
        </div>
      )}
    </div>
  );
}

export default App;
