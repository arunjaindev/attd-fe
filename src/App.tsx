import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignIn } from "./pages/Login"
import ClassAttdPage from "./pages/teacher/classAttd"
import FetchAttdPage from "./pages/principal/fetchAttd"
import AddUserPage from "./pages/principal/addUser"
import { Dashboard } from "./pages/Dashboard"
import PageNotFound from "./pages/Page Not Found/NotFound"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="classAttendance" element={<ClassAttdPage />} />
        <Route path="userAttendance" element={<FetchAttdPage />} />
        <Route path="addUser" element={<AddUserPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
