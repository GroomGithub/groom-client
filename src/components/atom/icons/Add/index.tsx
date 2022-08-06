import colors from '../../../../styles/colors';
import { IconProps } from '../../../../types/icon';

const Add = ({
  className,
  width = '40px',
  height = '40px',
  color = colors.grayScale.gray05
}: IconProps) => {
  return (
    <svg
      {...{ className, width, height }}
      viewBox="0 0 44 44"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 20.5H20.5V8.5C20.5 8.10218 20.658 7.72064 20.9393 7.43934C21.2206 7.15804 21.6022 7 22 7C22.3978 7 22.7794 7.15804 23.0607 7.43934C23.342 7.72064 23.5 8.10218 23.5 8.5V20.5H35.5C35.8978 20.5 36.2794 20.658 36.5607 20.9393C36.842 21.2206 37 21.6022 37 22C37 22.3978 36.842 22.7794 36.5607 23.0607C36.2794 23.342 35.8978 23.5 35.5 23.5H23.5V35.5C23.5 35.8978 23.342 36.2794 23.0607 36.5607C22.7794 36.842 22.3978 37 22 37C21.6022 37 21.2206 36.842 20.9393 36.5607C20.658 36.2794 20.5 35.8978 20.5 35.5V23.5H8.5C8.10218 23.5 7.72064 23.342 7.43934 23.0607C7.15804 22.7794 7 22.3978 7 22C7 21.6022 7.15804 21.2206 7.43934 20.9393C7.72064 20.658 8.10218 20.5 8.5 20.5Z"
        fill="#343A3F"
      />
    </svg>
  );
};

export default Add;