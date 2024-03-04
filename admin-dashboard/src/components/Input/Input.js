import LabelInput from "../LabelInput/LabelInput"

const Input = ({required, label, type, placeholder, onChange, value, name, autoComplete, col, icon: Icon, tag}) => {
  const InputTag = tag === 'textarea' ? 'textarea' : 'input';

  return (
    <div className={`mb-4 ${col ? 'flex items-center' : '' }`}>
        <LabelInput label={label}/>
        <div className='w-full leading-5 relative  rounded text-gray-700 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0'>
          <div className="pl-4 flex items-center absolute left-0 top-0 bottom-0">
            {Icon && <Icon className="text-slate-600 w-5 h-5 align-middle block " />}
          </div>
            <InputTag required={required} autoComplete={autoComplete} name={name} type={type} className={`block w-full py-2 pl-14 pr-5 text-gray-900  text-sm leading-6	${tag === 'textarea' ? 'h-40' : ''}`} placeholder={placeholder} onChange={onChange} value={value}/> 
        </div>
    </div>
  )
}
export default Input