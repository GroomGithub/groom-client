import colors from '../../../../styles/colors';

const ArrowLeft = ({
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
        d="M6.83208 23.0016C6.70084 22.8697 6.59686 22.7132 6.52608 22.5412C6.45408 22.3698 6.41699 22.1858 6.41699 22C6.41699 21.8141 6.45408 21.6302 6.52608 21.4588C6.59686 21.2868 6.70084 21.1303 6.83208 20.9984L18.1654 9.66508C18.2961 9.52978 18.4524 9.42185 18.6253 9.3476C18.7981 9.27336 18.984 9.23428 19.1721 9.23264C19.3602 9.23101 19.5467 9.26685 19.7209 9.33808C19.895 9.40932 20.0531 9.51451 20.1861 9.64752C20.3192 9.78054 20.4243 9.93871 20.4956 10.1128C20.5668 10.2869 20.6027 10.4735 20.601 10.6616C20.5994 10.8497 20.5603 11.0356 20.4861 11.2084C20.4118 11.3812 20.3039 11.5376 20.1686 11.6682L11.2535 20.5833H36.167C36.5427 20.5833 36.9031 20.7326 37.1687 20.9983C37.4344 21.2639 37.5837 21.6243 37.5837 22C37.5837 22.3757 37.4344 22.7361 37.1687 23.0017C36.9031 23.2674 36.5427 23.4167 36.167 23.4167H11.2535L20.1686 32.3317C20.4266 32.5989 20.5694 32.9568 20.5662 33.3282C20.563 33.6997 20.414 34.055 20.1513 34.3177C19.8887 34.5803 19.5333 34.7293 19.1619 34.7325C18.7905 34.7358 18.4326 34.593 18.1654 34.3349L6.83208 23.0016Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowLeft;
