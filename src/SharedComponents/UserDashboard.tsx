import Select from "react-select"
import { useState } from "react"
import { getReq, postReq } from "../services/api"
import { avatarURL, months, years } from "./constants"
import { useAuthContext } from "../contexts/AuthState"
import { OptionType } from "./constants"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserDashboard() {
  const [month, setMonth] = useState<number>()
  const [year, setYear] = useState<number>()
  const [attd, setAttd] = useState<string[]>([])
  const [showTable, setShowTable] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { user } = useAuthContext()

  const handleMonthChange = (selectedOption: OptionType | null) => {
    setMonth(selectedOption?.value)
  }

  const handleYearChange = (selectedOption: OptionType | null) => {
    setYear(selectedOption?.value)
  }

  const fetchAttendance = async () => {
    const id = user?.ID
    const endpoint = "/userAttendance/" + id + "/" + month + "/" + year
    const response = await getReq(endpoint)
    setAttd(response)
    setShowTable(true)
  }


  async function punchIn() {
    const info = {
      userid: user?.ID,
    }
    const res = await postReq("/punchIn", info)
    toast.info(res)
    setIsLoading(false)
  }
  function punchInHandler() {
    setIsLoading(true)
    punchIn()
  }

  async function punchOut() {
    const info = {
      userid: user?.ID,
    }
    const res =await postReq("/punchOut", info)
    toast.info(res)
    setIsLoading(false)
  }
  function punchOutHandler() {
    setIsLoading(true)
    punchOut()
  }

  return (
    <div className="pl-60 pt-16">
    {isLoading && <progress className="progress w-560"></progress>}
      <div className="bg-sky-50 h-full w-full py-4 px-4 flex items-center">
        <div className="w-1/10">
          <img
            className="inline w-24 h-24 mr-4"
            src={avatarURL + user?.firstName + ".svg"}
            alt="User Avatar"
          />
        </div>
        <div className="w-1/2 ml-8">
          <div className="text-4xl font-bold">
            {user?.firstName + " " + user?.lastName}
          </div>
          <div className="text-xl text-gray-600">{user?.email}</div>
        </div>
        <div className="w-4/10 pl-48">
          <button
            className="border font-medium text-white bg-indigo-500 px-8 py-2 rounded-full"
            type="button"
            onClick={punchInHandler}
            disabled={isLoading}
          >
            Punch In
          </button>
          <button
            className="ml-2 border font-medium text-white bg-indigo-500 px-8 py-2 rounded-full"
            type="button"
            onClick={punchOutHandler}
            disabled={isLoading}
          >
            Punch Out
          </button>
        </div>
      </div>
      <div className="text-2xl font-bold px-6 pt-10">Fetch Your Attendance</div>
      <div className="flex items-centre mt-4">
        <div className="px-6 w-40">
          <label>Month:</label>
          <Select onChange={handleMonthChange} options={months} required />
        </div>
        <div className="px-6 w-60">
          <label>Year:</label>
          <Select onChange={handleYearChange} options={years} required />
        </div>
        <div className="px-6 w-80 pt-5">
          <button
            onClick={fetchAttendance}
            type="button"
            className="border font-medium text-white bg-indigo-500 px-8 py-2 rounded-full"
            disabled={isLoading}
          >
            Fetch
          </button>
        </div>
      </div>
      <div className="pt-8 pl-6">
        {showTable && (
          <div className="text-2xl font-bold">
            Present On:
          <table className="">
            <tbody className="text-lg font-medium">
              {attd.map((dt: string) => (
                <tr key={dt}>
                  <td>{dt.slice(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )}
      </div>
      <ToastContainer/>
    </div>
  )
}
