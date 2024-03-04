import LabelInput from "../LabelInput/LabelInput";

const Select = ({
  label,
  name,
  value,
  onChange,
  options,
  className = "",
  white,
  icon: Icon,
}) => {
  const handleSelectChange = (e) => {
    onChange({ target: { name, value: e.target.value } });
  };

  return (
    <div>
      <LabelInput label={label} white={white} />
      <div className={`flex items-center mt-2 border border-gray-300 rounded"`}>
        {Icon && (
          <div className="text-gray-600 px-4 border-r py-3">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <select
          name={name}
          className={`text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full py-3 pl-2 text-sm border-gray-300 rounded ${className}`}
          value={value}
          onChange={handleSelectChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
