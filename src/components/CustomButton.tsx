import { GoArrowUpRight } from 'react-icons/go';

interface IProps {
  bgColor: string;
  text: string;
  color: string;
  onClick: () => void;
}
export default function CustomButton({
  bgColor,
  text,
  color,
  onClick,
}: IProps) {
  return (
    <button
      type="submit"
      className={`px-4 py-4 rounded-full flex items-center text-sm md:text-lg gap-2 bg-${bgColor} text-${color} font-semibold`}
      onClick={onClick}
    >
      {text} <GoArrowUpRight />
    </button>
  );
}
