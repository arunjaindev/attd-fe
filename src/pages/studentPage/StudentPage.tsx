import Navbar from "../../SharedComponents/Navbar";
import Sidebar from "../../SharedComponents/Sidebar";
import UserDash from "../../SharedComponents/UserDash";
import AddUser from "../addUser/AddUser";

export default function StudentPage() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <AddUser />
    </div>
  );
}
