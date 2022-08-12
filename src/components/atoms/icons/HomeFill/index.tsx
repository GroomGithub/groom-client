import colors from '../../../../styles/colors';

const HomeOutline = ({
  className,
  width = '40px',
  height = '40px',
  color = colors.grayScale.gray05
}: IconProps) => {
  return (
    <svg
      {...{ className, width, height }}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.831 7.252L36.3307 16.252H36.3322C36.6001 16.4307 36.8035 16.6909 36.9121 16.9941C37.0207 17.2973 37.0289 17.6274 36.9354 17.9356C36.8418 18.2438 36.6516 18.5137 36.3927 18.7054C36.1339 18.8971 35.8203 19.0004 35.4982 19H33.9982V35.5C33.9982 35.8978 33.8402 36.2794 33.5589 36.5607C33.2776 36.842 32.8961 37 32.4983 37H11.4987C11.1009 37 10.7194 36.842 10.4381 36.5607C10.1568 36.2794 9.99877 35.8978 9.99877 35.5V19H8.4988C8.17699 18.9998 7.86378 18.896 7.60545 18.7041C7.34712 18.5122 7.15736 18.2422 7.06421 17.9342C6.97106 17.6261 6.97945 17.2963 7.08814 16.9934C7.19684 16.6905 7.40007 16.4305 7.66782 16.252L21.1675 7.252C21.4136 7.0879 21.7027 7.00023 21.9985 7C22.2948 6.99993 22.5845 7.08762 22.831 7.252Z"
        fill={color}
      />
    </svg>
  );
};

export default HomeOutline;
