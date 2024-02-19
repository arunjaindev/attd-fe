import Select from "react-select";
import { useState } from "react";
import { getReq } from "../services/api";
import { avatarURL, months, years } from "./constants";
import { useAuthContext } from "../contexts/AuthState";

interface OptionType {
  value: number;
  label: number;
}

export default function UserDash() {
  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();
  const [attd, setAttd] = useState([]);
  const [show, setShow] = useState<boolean>(false);
  const { user } = useAuthContext();

  const handleMonthChange = (selectedOption: OptionType) => {
    setMonth(selectedOption.value);
  };

  const handleYearChange = (selectedOption: OptionType) => {
    setYear(selectedOption.value);
  };

  const fetchAttendance = async () => {
    const id = user?.ID;
    const endpoint = "/userAttendance/" + id + "/" + month + "/" + year;
    const response = await getReq(endpoint);
    setAttd(response);
    setShow(true);
  };

  async function punchIn() {}
  function punchOut() {}

  return (
    <div className="pl-60 pt-16">
      <div className="bg-sky-50 h-full w-full py-4 px-4 flex items-center">
        <div className="w-1/10">
          <img
            className="inline w-24 h-24 mr-4"
            src={avatarURL}
            alt="User Avatar"
          />
        </div>
        <div className="w-1/2 ml-8">
          <div className="text-4xl font-bold">
            {user?.firstName + " " + user?.lastName}
          </div>
          <div className="text-xl text-gray-600">{user?.email}</div>
        </div>
        <div className="w-4/10 pl-48">
          <button
            className="border font-medium text-white bg-indigo-500 px-8 py-2 rounded-full"
            onClick={punchIn}
          >
            Punch In
          </button>
          <button
            className="ml-2 border font-medium text-white bg-indigo-500 px-8 py-2 rounded-full"
            onClick={punchOut}
          >
            Punch Out
          </button>
        </div>
      </div>
      <div className="text-2xl font-bold px-6 pt-10">Fetch Your Attendance</div>
      <div className="flex items-centre mt-4">
        <div className="px-6 w-40">
          <Select onChange={handleMonthChange} options={months} required />
        </div>
        <div className="px-6 w-60">
          <label></label>
          <Select onChange={handleYearChange} options={years} required />
        </div>
        <div className="px-6 w-80">
          <button
            onClick={fetchAttendance}
            className="border font-medium text-white bg-indigo-500 px-8 py-2 rounded-full"
          >
            Fetch
          </button>
        </div>
      </div>
      <div className="pt-8 pl-6">
        {show && (
          <table className="">
            <tbody className="text-lg">
              <tr className="text-xl font-medium">Dates Present:</tr>
              {attd.map((dt: string) => (
                <tr key={dt}>
                  <td>{dt.slice(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
