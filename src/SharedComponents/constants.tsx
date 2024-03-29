export const avatarURL = "https://api.multiavatar.com/"

export const routes = {
  dashboard: "dashboard"
}

export const NAV_ROUTES = [
  { path: "/dashboard", label: "Dashboard"},
  { path: "/classAttendance", label: "Class Attendance", role: "teacher" },
  { path: "/userAttendance", label: "User Attendance", role: "principal" },
  { path: "/addUser", label: "Add User", role: "principal" },
]

export interface OptionType {
  value: number
  label: number
}

export enum userRoles {
  student = "student",
  teacher = "teacher",
  principal = "principal",
}

export enum userClasses {
  zero = 0,
}

export const months = [
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
]

export const years = [
  { value: 2021, label: 2021 },
  { value: 2022, label: 2022 },
  { value: 2023, label: 2023 },
  { value: 2024, label: 2024 },
]
