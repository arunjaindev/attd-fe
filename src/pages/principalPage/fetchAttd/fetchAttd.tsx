import Select from "react-select";
import { useState } from "react";
import { getReq } from "../../../services/api";
import { months } from "../../../SharedComponents/constants";
import { years } from "../../../SharedComponents/constants";

export default function FetchAttd() {
  const [userid, setUserId] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [attd, setAttd] = useState([]);
  const [show, setShow] = useState(false);

  const handleIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.value);
  };

  const handleYearChange = (e) => {
    setYear(e.value);
  };

  const fetchAttendance = async () => {
    const endpoint = "/userAttendance/" + userid + "/" + month + "/" + year;
    const response = await getReq(endpoint);
    setAttd(response);
    setShow(true);
  };

  return (
    <div className="pl-60">
      <div className="text-4xl font-bold py-8 px-6">Fetch Attendance</div>
      <label htmlFor="id" className="font-medium text-lg px-6">
        User ID:
      </label>
      <input
        className="border px-2 py-1 rounded-full w-40"
        type="text"
        onChange={handleIdChange}
        required
      />
      <div className="flex items-centre pt-4">
        <div className="px-6 w-40">
          <label htmlFor="month" className="font-medium text-lg">
            Month:
          </label>
          <Select onChange={handleMonthChange} options={months} required />
        </div>
        <div className="px-6 w-60">
          <label htmlFor="month" className="font-medium text-lg">
            Year:
          </label>
          <Select onChange={handleYearChange} options={years} required />
        </div>
        <div className="px-6 w-80 pt-4">
          <button
            onClick={fetchAttendance}
            className="border font-medium text-lg text-white bg-indigo-500 px-8 py-2 rounded-full"
          >
            Fetch
          </button>
        </div>
      </div>
      <div className="pt-8 pl-6">
        {show ? (
          <table className="">
            <thead className="text-xl font-medium">Present On:</thead>
            <tbody className="text-lg">
              {attd.map((dt) => (
                <tr key={dt}>
                  <td>{dt.slice(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
}
