const Input = ({ type, label, placeholder, value, onChange }) => {
  return (
    <div>
      <label className="text-[13px] text-slate-800">{label}</label>
      <div className="w-full flex justify-between gap-3 text-sm text-black bg-gray-50/50 rounded px-4 py-3 mb-4 mt-2 border border-gray-100 outline-none focus-within:border-sky-300">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default Input;
