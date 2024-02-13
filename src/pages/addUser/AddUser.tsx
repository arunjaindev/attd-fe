import Select from "react-select";

const roleOptions = [
  { value: "Teacher", label: "Teacher" },
  { value: "Student", label: "Student" },
];

export default function AddUser() {
  return (
    <div className="ml-60">
      <div className="font-bold text-4xl mt-8 ml-4 ">Add User</div>
      <input type="text" className="block border ml-4 " />
      <input type="text" className="block border ml-4 " />
      <input type="email" className="block border ml-4 " />
      <Select className="w-60 mt-10 ml-4" options={roleOptions} />
    </div>
  );
}
