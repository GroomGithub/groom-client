import colors from '../../../../styles/colors';

const ArrowRight = ({
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
        d="M37.1679 23.0016C37.2992 22.8697 37.4031 22.7132 37.4739 22.5412C37.5459 22.3698 37.583 22.1858 37.583 22C37.583 21.8141 37.5459 21.6302 37.4739 21.4588C37.4031 21.2868 37.2992 21.1303 37.1679 20.9984L25.8346 9.66508C25.7039 9.52978 25.5476 9.42185 25.3747 9.3476C25.2019 9.27336 25.016 9.23428 24.8279 9.23264C24.6398 9.23101 24.4533 9.26685 24.2791 9.33808C24.105 9.40932 23.9469 9.51451 23.8139 9.64752C23.6808 9.78054 23.5757 9.93871 23.5044 10.1128C23.4332 10.2869 23.3973 10.4735 23.399 10.6616C23.4006 10.8497 23.4397 11.0356 23.5139 11.2084C23.5882 11.3812 23.6961 11.5376 23.8314 11.6682L32.7465 20.5833H7.833C7.45728 20.5833 7.09694 20.7326 6.83126 20.9983C6.56559 21.2639 6.41633 21.6243 6.41633 22C6.41633 22.3757 6.56559 22.7361 6.83126 23.0017C7.09694 23.2674 7.45728 23.4167 7.833 23.4167H32.7465L23.8314 32.3317C23.5734 32.5989 23.4306 32.9568 23.4338 33.3282C23.437 33.6997 23.586 34.055 23.8487 34.3177C24.1113 34.5803 24.4667 34.7293 24.8381 34.7325C25.2095 34.7358 25.5674 34.593 25.8346 34.3349L37.1679 23.0016Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowRight;
