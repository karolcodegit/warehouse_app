import { Listbox } from "@headlessui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const apps = [
  { id: 1, name: "Apki", url: "/app1", unavailable: false },
  { id: 2, name: "Studio", url: "/app2", unavailable: false },
];

export function ApplicationListbox() {
  const [selectedApplication, setSelectedApplication] = useState(apps[0]);

  return (
    <Listbox value={selectedApplication} onChange={setSelectedApplication}>
      <Listbox.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Aplication
      </Listbox.Button>
      <AnimatePresence>
        <Listbox.Options className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {apps.map((app) => (
              <Listbox.Option
                key={app.id}
                value={app}
                disabled={app.unavailable}
                as={motion.li}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
              >
                <a href={app.url} target="_blank">
                  {app.name}
                </a>
              </Listbox.Option>
            ))}
          </div>
        </Listbox.Options>
      </AnimatePresence>
    </Listbox>
  );
}
