
const Header = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between items-center px-6 space-y-4 bg-slate-100 p-4">

        <h1 className="text-gray-800 font-bold text-3xl">Chef&apos;s Table</h1>
        <ul className="flex gap-6 text-gray-600 font-semibold text-base">
            <li><a href="">Home</a></li>
            <li><a href="">Recipes</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Search</a></li>
        </ul>
        <div className="flex flex-row justify-between items-center gap-4">

        <div>
        <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      // eslint-disable-next-line react/no-unknown-property
      fill-rule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      // eslint-disable-next-line react/no-unknown-property
      clip-rule="evenodd" />
  </svg>
</label>
        </div>
        <div className="bg-green-400 flex items-center justify-center rounded-full w-12 h-12">
            <i className="fa-regular fa-user-circle text-3xl"></i>
        </div>
        </div>
        </div>
    );
};

export default Header;