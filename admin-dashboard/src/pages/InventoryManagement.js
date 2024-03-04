import React from 'react'

const InventoryManagement = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-200">
      <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>
      <div className="flex space-x-6">
        <div className="bg-white shadow-md p-4 rounded">
          <h2 className="text-xl font-bold mb-2">Electronics</h2>
          <ul className="list-disc list-inside">
            <li>Laptop</li>
            <li>Phone</li>
            <li>Tablet</li>
          </ul>
        </div>
        <div className="bg-white shadow-md p-4 rounded">
          <h2 className="text-xl font-bold mb-2">Furniture</h2>
          <ul className="list-disc list-inside">
            <li>Table</li>
            <li>Chair</li>
            <li>Sofa</li>
          </ul>
        </div>
        <div className="bg-white shadow-md p-4 rounded">
          <h2 className="text-xl font-bold mb-2">Clothing</h2>
          <ul className="list-disc list-inside">
            <li>Shirt</li>
            <li>Pants</li>
            <li>Jacket</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default InventoryManagement