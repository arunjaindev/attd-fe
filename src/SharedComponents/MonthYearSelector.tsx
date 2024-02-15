import { useState } from "react";
import Select from "react-select";
import { months } from "./constants";
import { years } from "./constants";
import { getReq } from "../services/api";

export default function MonthYearSelector() {
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  const handleMonthChange = (e) => {
    setMonth(e.value);
  };

  const handleYearChange = (e) => {
    setYear(e.value);
  };

  const fetchAttendance = async () => {
    const id = 3;
    const endpoint = "/userAttendance/" + id + "/" + month + "/" + year;
    const response = await getReq(endpoint);
  };

  return (
    <div className="flex items-centre mt-4">
      <div className="px-6 w-40">
        <Select onChange={handleMonthChange} options={months} />
      </div>
      <div className="px-6 w-60">
        <label></label>
        <Select onChange={handleYearChange} options={years} />
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
  );
}
