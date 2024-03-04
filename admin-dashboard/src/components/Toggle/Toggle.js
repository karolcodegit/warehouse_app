import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Toggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="">
  <Switch
    checked={enabled}
    onChange={setEnabled}
    className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'}
      relative inline-flex h-6 w-12 rounded-full cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75`}
  >
    <span className="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
        pointer-events-none inline-block h-6 w-6 rounded-full bg-white shadow transform ring-0 transition-transform duration-200 ease-in-out`}
    />
  </Switch>
</div>
  )
}