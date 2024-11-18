'use client';

import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

interface BookCallBtnProps {
  className: string;
}

const BookCallBtn: FunctionComponent = () => {
  const ref = useRef<HTMLDialogElement | null>(null);
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (showModel) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }
  }, [showModel]);

  return (
    <>
      <button
        className="fixed bottom-3 right-4 bg-white w-[12rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black dark:border-white border-opacity-25 dark:border-opacity-40 shadow-2xl rounded-md flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 "
        onClick={() => setShowModel((prev) => !prev)}
      >
        Book a Meeting
        <span className="btn btn-icon bg-slate-600 hover:bg-slate-700 border-slate-600 hover:border-slate-700 text-white rounded-full ml-2">
          <FaCalendarAlt className="text-xl text-gray-950 bg-white  dark:text-white dark:bg-gray-950" />
        </span>
      </button>
      <dialog
        ref={ref}
        onClick={(e) => {
          if (!ref.current) {
            return;
          }

          const dialogDimensions = ref.current.getBoundingClientRect();
          if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
          ) {
            ref.current.close();
            setShowModel(false);
          }
        }}
        className="h-full w-full md:w-[90%] md:h-[90%] rounded-lg shadow-md"
      >
        {/* {<!-- Google Calendar Appointment Scheduling begin --> */}
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3gPf_Qac9N5jiUzaWyaFNxV6Q5Aaw3wmu73lddcBgulOeEZwGC16wEkFJ4v_tdi1KaHYyVIUQu?gv=true"
          width="100%"
          height="100%"
        ></iframe>
        {/* <!-- end Google Calendar Appointment Scheduling -->} */}
      </dialog>
    </>
  );
};

export default BookCallBtn;
