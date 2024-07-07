import { GoArrowUpRight } from "react-icons/go";

interface IProps {
  bgColor: string;
  text: string;
  color: string;
}
export default function CustomButton({ bgColor, text, color }: IProps) {
  return (
    <button
      className={`px-4 py-4 rounded-full flex items-center gap-2 bg-${bgColor} text-${color} font-semibold`}
    >
      {text} <GoArrowUpRight />
    </button>
  );
}
