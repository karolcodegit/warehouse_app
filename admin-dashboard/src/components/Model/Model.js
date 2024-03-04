import { Dialog } from '@headlessui/react'
import Paragraph from '../Paragraph/Paragraph'

const Modal = ({
    isOpen,
    handleCloseModal,
    title,
    description,
    paragraph,
    children,
    handleSave,
    saveButtonLabel = 'Save',
    cancelButtonLabel = 'Cancel',
    customClass = '',
    bodyText
  }) => {
    return (
      <Dialog open={isOpen} onClose={handleCloseModal} className={`relative z-50 ${customClass}`}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 w-screen overflow-y-auto">
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-xl rounded-2xl bg-white p-8 border border-gray-300 transform overflow-hidden text-left align-middle shadow-xl transition-all opacity-100 scale-100">
              {title && (
                <Dialog.Title className="text-lg font-bold mb-4">{title}</Dialog.Title>
              )}
              {description && (
                <Dialog.Description className="text-gray-500 py-3">
                  {description}
                </Dialog.Description>
              )}
              {paragraph && (
                <Paragraph>
                  {paragraph}
                </Paragraph>
              )}
              {children ? children : bodyText}
              <div className="mt-4 flex justify-end">
                <button onClick={handleSave} className="px-4 py-2 bg-gray-300 text-black rounded mr-2">{saveButtonLabel}</button>
                <button onClick={handleCloseModal} className="px-4 py-2 bg-red-500 text-white rounded">{cancelButtonLabel}</button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    )
  }

export default Modal