export default function Skill({ children }) {
  return (
    <span className="bg-orange-100 text-orange-700 transition duration-300 text-[13px] rounded-[4px] py-1.5 px-3 cursor-pointer hover:bg-orange-200 ">
      {children}
    </span>
  );
}
