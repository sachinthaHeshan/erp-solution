import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Button } from "./Button";
import { useSession, signOut } from "next-auth/react";

export const UserMiniProfileMenu = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left w-full">
        <div className="p-4">
          <Menu.Button className="inline-flex w-full border border-red-1000 justify-between items-center rounded-md px-4 py-3 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <div className="flex justify-between items-center gap-2">
              <Image
                className="rounded-full"
                width={40}
                height={40}
                src="/avatar.png"
                alt={"avatar"}
              />
              {session?.user?.name}
            </div>
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 -rotate-90 border border-red-1000 rounded-full text-red-1000"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute bottom-24 left-4 mt-2 w-72 p-4 origin-top-right border border-red-1000 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex justify-center flex-col items-center">
              <Image
                className=" border border-red-1000 p-1"
                width={60}
                height={60}
                src="/avatar.png"
                alt={"avatar"}
              />
              <p>{session?.user?.name}</p>
              <p>{session?.user?.email}</p>
              <Button>MANAGE PROFILE</Button>
              <div></div>
              <button
                onClick={() => {
                  signOut();
                }}
                className="flex justify-center items-center"
              >
                Sign Out
                <ChevronDownIcon
                  className="ml-2 -mr-1 h-5 w-5 -rotate-90 border border-red-1000 bg-red-1000 rounded-full text-white"
                  aria-hidden="true"
                />
              </button>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
