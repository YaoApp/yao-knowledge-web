import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function SearchIntput() {
  return (
    <div>
      <Combobox className="relative mt-2 rounded-md shadow-sm ">
        <div>
          <Combobox.Input
            type="text"
            className="block h-12  w-full rounded-lg text-lg border-0 py-1.5 pl-4 pr-20 text-gray-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
            placeholder="输入你的问题"
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-4">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  );
}
