import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import ClassAttdPage from "./pages/teacher/classAttd";
import FetchAttdPage from "./pages/principal/fetchAttd";
import AddUserPage from "./pages/principal/addUser";
import DashboardPage from "./pages/Dashboard";
import PageNotFound from "./pages/Page Not Found/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="classAttendance" element={<ClassAttdPage />} />
        <Route path="userAttendance" element={<FetchAttdPage />} />
        <Route path="addUser" element={<AddUserPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
