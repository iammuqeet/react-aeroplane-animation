import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" py-4 fixed top-0 left-0 right-0 w-full flex justify-center z-10">
      <div className="flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-white text-lg font-medium px-4 py-2 rounded-md transition ${
              isActive ? "bg-[#f46000]" : "hover:bg-gray-700"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            `text-white text-lg font-medium px-4 py-2 rounded-md transition ${
              isActive ? "bg-[#f46000]" : "hover:bg-gray-700"
            }`
          }
        >
          Blogs
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
