import { useState } from "react";
import Select from "react-select";

const months = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
  { value: 10, label: 10 },
  { value: 11, label: 11 },
  { value: 12, label: 12 },
];

const years = [
  { value: 2021, label: 2021 },
  { value: 2022, label: 2022 },
  { value: 2023, label: 2023 },
  { value: 2024, label: 2024 },
];

export default function MonthYearSelector() {
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  async function fetchAttendance() {}

  return (
    <div className="flex items-centre mt-4">
      <div className="px-6 w-40">
        <Select onChange={setMonth} options={months} />
      </div>
      <div className="px-6 w-60">
        <Select onChange={setYear} options={years} />
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
