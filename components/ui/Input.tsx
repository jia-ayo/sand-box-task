interface InputProps {
  title?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({
  title,
  name,
  placeholder,
  value,
  type,
  disabled,
  onChange,
}) => {
  return (
    <div className="mb-6">
      <label
        className="block font-sansRegular text-[16px] text-[#201950]  mb-2"
        htmlFor={name}
      >
        {title}
      </label>
      <input
        id={name}
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className="
        rounded-[12px] bg-[#3C3C7833] w-full py-[16px] text-[#6d6b6b] leading-tight focus:outline-none px-[24px] focus:shadow-outline
      "
      />
    </div>
  );
};

export default Input;
