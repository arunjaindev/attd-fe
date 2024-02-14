import Navbar from "../../SharedComponents/Navbar";
import Sidebar from "../../SharedComponents/Sidebar";
import AddUser from "./addUser/AddUser";

export default function PrincipalPage() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <AddUser />
    </div>
  );
}
