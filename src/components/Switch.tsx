interface Props {
  onCheck: (checked: boolean) => void;
  value: boolean;
}

export default function Switch({ onCheck, value }: Props) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={value}
        className="sr-only peer"
        onChange={(event) => {
          onCheck(event.target.checked);
        }}
      />
      <div
        className="w-13 h-6 border-2 border-gray-300 dark:border-gray-600 rounded-full peer
          peer-focus:outline-hidden peer-focus:ring-2 peer-focus:ring-tertiary-300 dark:peer-focus:ring-tertiary-800 
          peer-checked:after:translate-x-full peer-checked:after:border-white 
          peer-checked:bg-tertiary-600 dark:peer-checked:bg-tertiary-800
          after:content-[''] after:absolute after:top-[3px] after:left-1.5
          peer-checked:after:left-3 peer-checked:translate-x
          after:bg-white after:border-gray-300 after:border after:rounded-full 
          after:h-[18px] after:w-[18px] aafter:transition-all after:ease-in-out after:duration-300"
      ></div>
    </label>
  );
}
