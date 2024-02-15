import { useState } from "react";
import Select from "react-select";
import { classOptions, roleOptions } from "./constants";
import { postReq } from "../../../services/api";

export default function AddUser() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [userClass, setUserClass] = useState(0);

  const roleChangeHandler = (event) => {
    setRole(event.value);
  };

  const classChangeHandler = (event) => {
    setUserClass(event.value);
  };

  const addUserHandler = async () => {
    if (role === "teacher") {
      setUserClass(0);
    }

    const userInfo = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      role: role,
      class: userClass,
    };
    await postReq("/addUser", userInfo);
  };

  return (
    <div className="pl-60">
      <div className="font-bold text-4xl pt-8 pl-8 ">Add User</div>
      <form id="form" className="ml-8 pt-4 w-90" onSubmit={addUserHandler}>
        <div>
          <label htmlFor="firstname" className="font-medium text-xl pr-4">
            First Name:
          </label>
          <input
            name="firstname"
            autoComplete="on"
            id="firstname"
            type="text"
            className="border rounded-lg py-1 px-2 w-64 text-lg"
            placeholder="Enter First Name"
            required
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastname" className="font-medium text-xl pr-5">
            Last Name:
          </label>
          <input
            name="lastname"
            autoComplete="on"
            id="lastname"
            type="text"
            className="border rounded-lg py-1 px-2 w-64 text-lg mt-4"
            placeholder="Enter Last Name"
            required
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="font-medium text-xl pr-5">
            User Email:
          </label>
          <input
            name="email"
            autoComplete="on"
            id="email"
            type="email"
            className="border rounded-lg py-1 px-2 w-64 text-lg mt-4"
            placeholder="Enter User Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="role" className="font-medium text-xl">
            Select Role:
          </label>
          <Select
            className="w-60 mt-2"
            options={roleOptions}
            onChange={roleChangeHandler}
            required
          />
        </div>

        <div className="mt-4">
          <label htmlFor="class" className="font-medium text-xl">
            Select Class:
          </label>
          <Select
            className="w-60 mt-2"
            options={classOptions}
            isDisabled={role !== "student"}
            onChange={classChangeHandler}
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
