import Navbar from "../../SharedComponents/Navbar";
import Sidebar from "../../SharedComponents/Sidebar";
import AddUser from "./addUser/AddUser";
import FetchAttd from "./fetchAttd/fetchAttd";

export default function PrincipalPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <FetchAttd />
    </>
  );
}
