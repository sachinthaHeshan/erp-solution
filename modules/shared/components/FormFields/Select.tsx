import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";

export type OptionType = {
  label: string;
  value: string;
};

interface SelectProps {
  options: OptionType[];
  placeholder?: string;
  className?: string;
  label?: string;
}

export const Select = ({
  options,
  placeholder,
  className,
  label,
}: SelectProps) => {
  const [selected, setSelected] = useState<OptionType | null>(options?.[0]);

  return (
    <div className={`w-full ${className}`}>
      {label ? (
        <label className="block mb-2 text-sm font-medium ">{label}</label>
      ) : null}

      <Listbox value={selected} onChange={setSelected}>
        <div className="group relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white border border-gray-200  h-12 pl-3 pr-8 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            {selected ? (
              <span className="block truncat">{selected.label}</span>
            ) : (
              <span className="block truncat text-gray-400">{placeholder}</span>
            )}

            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className={`block h-5 w-5 text-gray-400 ${
                  selected ? "group-hover:hidden" : ""
                }`}
                aria-hidden="true"
              />
            </div>
          </Listbox.Button>

          {selected ? (
            <button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <XCircleIcon
                onClick={() => {
                  setSelected(null);
                }}
                className="group-hover:block hidden h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </button>
          ) : null}

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-40 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.label}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
