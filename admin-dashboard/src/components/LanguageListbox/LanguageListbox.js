import { Listbox } from "@headlessui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const languages = [
  { id: 1, name: "English", flag: "🇬🇧" },
  { id: 2, name: "Polski", flag: "🇵🇱" },
];

export function LanguageListbox() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
      <Listbox.Button className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {selectedLanguage.flag} {selectedLanguage.name}
      </Listbox.Button>
      <AnimatePresence>
        <Listbox.Options className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {languages.map((language) => (
              <Listbox.Option
                key={language.id}
                value={language}
                as={motion.li}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
              >
                {language.flag} {language.name}
              </Listbox.Option>
            ))}
          </div>
        </Listbox.Options>
      </AnimatePresence>
    </Listbox>
  );
}
