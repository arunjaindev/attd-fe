export default function SidebarItem(props) {
  return (
    <button className="font-semibold text-lg text-left block px-4 py-3 w-full hover:bg-slate-100">
      {props.content}
    </button>
  );
}
