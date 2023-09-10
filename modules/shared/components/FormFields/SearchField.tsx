interface SearchFieldProps {
  variant?: "dark" | "light";
}

export const SearchField = ({ variant = "light" }: SearchFieldProps) => {
  return (
    <div className="relative w-96 h-min">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-black"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className={`block w-full h-12 pl-10  pr-2 text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500   dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none ${
          variant === "dark"
            ? "bg-khaki-100"
            : "bg-white border border-brown-200"
        }`}
        placeholder="Search"
        required={false}
      />
    </div>
  );
};
