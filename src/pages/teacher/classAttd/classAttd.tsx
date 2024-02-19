import Select from "react-select";
import { classOptions } from "../../principal/addUser/constants";
import { useState } from "react";
import { months, years } from "../../../SharedComponents/constants";
import { getReq } from "../../../services/api";

interface OptionType {
  value: number;
  label: number;
}

export default function ClassAttendance() {
  const [userClass, setUserClass] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();
  const [attd, setAttd] = useState([]);
  const [show, setShow] = useState<boolean>(false);

  const classChangeHandler = (selectedOption: OptionType) => {
    setUserClass(selectedOption.value);
  };

  const monthChangeHandler = (selectedOption: OptionType) => {
    setMonth(selectedOption.value);
  };

  const yearChangeHandler = (selectedOption: OptionType) => {
    setYear(selectedOption.value);
  };

  const fetchClassAttendance = async () => {
    const endpoint = "/classAttendance/" + userClass + "/" + month + "/" + year;
    const response = await getReq(endpoint);
    setAttd(response);
    setShow(true);
  };

  return (
    <div className="pl-60">
      <div className="text-4xl font-bold pl-6 pt-24">Fetch Class Attendance</div>
      <div className="pt-6 pl-6">
        <label htmlFor="class" className="font-medium text-xl">
          Select Class:
        </label>
        <Select
          id="class"
          className="w-60 mt-2"
          options={classOptions}
          onChange={classChangeHandler}
          required
        />
      </div>
      <div className="pt-4 pl-6">
        <label htmlFor="month" className="font-medium text-xl">
          Select Month:
        </label>
        <Select
          className="w-60 mt-2"
          id="month"
          options={months}
          onChange={monthChangeHandler}
          required
        />
      </div>
      <div className="pt-4 pl-6">
        <label htmlFor="year" className="font-medium text-xl">
          Select Year:
        </label>
        <Select
          className="w-60 mt-2"
          id="year"
          options={years}
          onChange={yearChangeHandler}
          required
        />
      </div>
      <div className="px-5 w-80 pt-6">
        <button
          onClick={fetchClassAttendance}
          className="border font-medium text-lg text-white bg-indigo-500 px-6 py-2 rounded-full"
        >
          Fetch
        </button>
      </div>
      <div className="pt-8 pl-6">
        {show && (
          <table className="border">
            <thead>
              <tr className="font-medium text-xl bg-sky-100">
                <th className="px-3">Day</th>
                <th className="px-3">Count</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {Object.entries(attd).map(([day, count]) => (
                <tr key={day}>
                  <td className="px-3">{day}</td>
                  <td className="px-3">{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
