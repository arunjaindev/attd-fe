import { useState } from "react";
import Select from "react-select";

const roleOptions = [
  { value: "Teacher", label: "Teacher" },
  { value: "Student", label: "Student" },
];

const classOptions = [
  { value: 9, label: 9 },
  { value: 10, label: 10 },
  { value: 11, label: 11 },
  { value: 12, label: 12 },
];

export default function AddUser() {
  function addHandler() {}
  const [role, setRole] = useState("");
  const [userClass, setUserClass] = useState(0);

  return (
    <div className="ml-60">
      <div className="font-bold text-4xl mt-8 ml-4 ">Add User</div>
      <form className="ml-4 mt-4 w-90" onSubmit={addHandler}>
        <div>
          <label className="font-medium text-xl">First Name:</label>
          <input
            name="firstname"
            autoComplete="on"
            id="firstname"
            type="text"
            className="border rounded-lg py-1 px-2 w-64 text-lg ml-4"
            placeholder="Enter First Name"
            required
          />
        </div>
        <div>
          <label className="font-medium text-xl">Last Name:</label>
          <input
            name="lastname"
            autoComplete="on"
            id="lastname"
            type="text"
            className="border rounded-lg py-1 px-2 w-64 text-lg ml-5 mt-4"
            placeholder="Enter Last Name"
            required
          />
        </div>
        <div>
          <label className="font-medium text-xl">User Email:</label>
          <input
            name="email"
            autoComplete="on"
            id="email"
            type="email"
            className="border rounded-lg py-1 px-2 w-64 text-lg ml-5 mt-4"
            placeholder="Enter User Email"
            required
          />
        </div>
        <div className="mt-4">
          <label className="font-medium text-xl">Select Role:</label>
          <Select
            className="w-60 mt-2"
            options={roleOptions}
            onChange={setRole}
            required
          />
        </div>

        <div className="mt-4">
          <label className="font-medium text-xl">Select Class:</label>
          <Select
            className="w-60 mt-2"
            options={classOptions}
            // isDisabled
            onChange={setUserClass}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 border rounded-lg text-lg px-8 py-1 bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          Add User
        </button>
      </form>
    </div>
  );
}
