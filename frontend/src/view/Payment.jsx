import React from 'react';

const Payment = () => (
  <div className="bg-white p-4 rounded-md shadow">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h2>
    <form className="space-y-4">
      <div className="flex items-center">
        <input
          id="paypal"
          name="paymentMethod"
          type="radio"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor="paypal" className="ml-2 block text-sm font-medium text-gray-700">
          PayPal
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="debit"
          name="paymentMethod"
          type="radio"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor="debit" className="ml-2 block text-sm font-medium text-gray-700">
          Debit on Delivery
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="credit"
          name="paymentMethod"
          type="radio"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor="credit" className="ml-2 block text-sm font-medium text-gray-700">
          Credit Card
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="bank-transfer"
          name="paymentMethod"
          type="radio"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor="bank-transfer" className="ml-2 block text-sm font-medium text-gray-700">
          Bank Transfer
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="cash-on-delivery"
          name="paymentMethod"
          type="radio"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor="cash-on-delivery" className="ml-2 block text-sm font-medium text-gray-700">
          Cash on Delivery
        </label>
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Confirm Payment
      </button>
    </form>
  </div>
);

export default Payment;