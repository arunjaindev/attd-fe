//dashboard for student and teacher
// func - punch in, punch out, fetch self attendance

import MonthYearSelector from "./MonthYearSelector";

export default function UserDash() {
  function punchIn() {}
  function punchOut() {}

  return (
    <div className="ml-60">
      <div className="bg-sky-50 h-full w-full py-4 px-4 flex items-center">
        <div className="w-1/10">
          <img
            className="inline w-24 h-24 mr-4"
            src="https://api.multiavatar.com/BondBw.svg"
            alt="User Avatar"
          />
        </div>
        <div className="w-1/2 ml-8">
          <div className="text-4xl font-bold">User Name</div>
          <div className="text-xl text-gray-600">user@example.com</div>
        </div>
        <div className="w-4/10">
          <button
            className="ml-40 border font-medium text-white bg-indigo-500 px-8 py-2 rounded-full"
            onClick={punchIn}
          >
            Punch In
          </button>
          <button
            className="ml-8 border font-medium text-white bg-indigo-500 px-8 py-2 rounded-full"
            onClick={punchOut}
          >
            Punch Out
          </button>
        </div>
      </div>
      <div className="text-2xl font-bold px-6 mt-10">Fetch Your Attendance</div>
      <MonthYearSelector />
      <div className="mt-20 ml-4 font-bold text-3xl">
        DISPLAY HEATMAP ON FETCH
      </div>
    </div>
  );
}
