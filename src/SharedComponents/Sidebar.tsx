import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="w-60 h-full absolute bg-slate-200">
      <SidebarItem content="Dashboard" />
      <SidebarItem content="Logout" />
    </div>
  );
}
