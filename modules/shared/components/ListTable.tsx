import { ReactNode } from "react";

export const ListTable = () => {
  const columns = [
    {
      key: "company",
      Name: "COMPANY",
    },
    {
      key: "accountLead",
      Name: "ACCOUNT LEAD",
    },
    {
      key: "relationship",
      Name: "RELATIONSHIP",
    },
  ];

  const dataSource: { key: string | number; [key: string]: ReactNode }[] = [
    {
      key: "sdsdcdscsdc",
      company: "Apple MacBook Pro 17",
      accountLead: "Joeseph Smith",
      relationship: "Company",
    },
    {
      key: "fnvknfdvdffv",
      company: "Apple MacBook Pro 17",
      accountLead: "Joeseph Smith",
      relationship: "Company",
    },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-black">
        <thead className="text-xs text-gray-700 uppercase bg-brown-700  dark:text-white">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>

            {columns.map((column) => {
              return (
                <th
                  key={column.key}
                  scope="col"
                  className="px-6 py-3 font-normal"
                >
                  {column.Name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((row) => {
            return (
              <tr
                key={row.key}
                className="bg-white hover:bg-gray-100 border-b border-black"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>

                {columns.map((column) => {
                  return (
                    <td key={column.key} className="px-6 py-4">
                      {row?.[column.key]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
