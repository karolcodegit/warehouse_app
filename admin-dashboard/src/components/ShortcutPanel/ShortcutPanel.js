import React from 'react';
import { DeviceIcon, RecoveryIcon, TruckColorIcon } from '../../utils/icons';
import { Link } from 'react-router-dom';

const ShortcutPanel = () => {
    const shortcuts = [
      { icon: RecoveryIcon, text: 'Create ticket', link: '/create-ticket' },
      { icon: DeviceIcon, text: 'Add device', link: '/add-device' },
      { icon: TruckColorIcon, text: 'Add truck', link: '/add-device' },
      // Dodaj więcej skrótów tutaj
    ];
  
    return (
      <div className="overflow-hidden relative">
        <div className="flex h-full w-full">
          <div className='min-w-80 px-8 py-4 bg-white shadow-md rounded-md'>
            <div className="flex flex-col">
              <ul>
                {shortcuts.map((shortcut, index) => (
                  <li key={index} className="flex items-center gap-2 py-3">
                    <Link to={shortcut.link} className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-200">
                      <shortcut.icon />
                      {shortcut.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ShortcutPanel;