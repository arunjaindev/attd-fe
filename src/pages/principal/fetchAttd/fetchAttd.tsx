import Select from "react-select";
import React, { useState } from "react";
import { getReq } from "../../../services/api";
import { months } from "../../../SharedComponents/constants";
import { years } from "../../../SharedComponents/constants";

interface OptionType {
  value: number;
  label: number;
}

export default function FetchAttd() {
  const [userid, setUserId] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();
  const [attd, setAttd] = useState<string[]>([]);
  const [show, setShow] = useState<boolean>(false);

  const handleIdChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleMonthChange = (selectedOption: OptionType) => {
    setMonth(selectedOption.value);
  };

  const handleYearChange = (selectedOption: OptionType) => {
    setYear(selectedOption.value);
  };

  const fetchAttendance = async () => {
    const endpoint = "/userAttendance/" + userid + "/" + month + "/" + year;
    const response = await getReq(endpoint);
    setAttd(response);
    setShow(true);
  };

  return (
    <div className="pl-60">
      <div className="text-4xl font-bold pt-20 px-6">Fetch Attendance</div>
      <div className="pt-6">
        <label htmlFor="userid" className="font-medium text-lg px-6 pt-8">
          User ID:
        </label>
        <input
          className="border px-2 py-1 rounded-full w-40"
          type="text"
          id="userid"
          onChange={handleIdChange}
          required
        />
      </div>
      <div className="flex items-centre pt-4">
        <div className="px-6 w-40">
          <label htmlFor="month" className="font-medium text-lg">
            Month:
          </label>
          <Select
            onChange={handleMonthChange}
            options={months}
            id="month"
            required
          />
        </div>
        <div className="px-6 w-60">
          <label htmlFor="year" className="font-medium text-lg">
            Year:
          </label>
          <Select
            onChange={handleYearChange}
            options={years}
            id="year"
            required
          />
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
        {show && (
          <table className="">
            <thead className="text-xl font-medium">Present On:</thead>
            <tbody className="text-lg">
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
