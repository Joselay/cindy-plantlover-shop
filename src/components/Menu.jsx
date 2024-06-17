const Menu = () => {
  return (
    <div className="fixed p-4 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded-lg shadow-lg left-1/2 top-1/2 z-[100] w-[90%] h-[90%]">
      <button className="absolute top-0 text-6xl transition duration-200 right-3 text-stone-400 hover:text-stone-500">
        &times;
      </button>
    </div>
  );
};

export default Menu;
