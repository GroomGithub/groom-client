import colors from '../../../../styles/colors';

const Clock = ({
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
        d="M22 7C19.0333 7 16.1332 7.87973 13.6665 9.52796C11.1997 11.1762 9.27713 13.5189 8.14181 16.2597C7.0065 19.0006 6.70945 22.0166 7.28823 24.9264C7.86701 27.8361 9.29562 30.5088 11.3934 32.6066C13.4912 34.7044 16.1639 36.133 19.0736 36.7118C21.9834 37.2906 24.9994 36.9935 27.7403 35.8582C30.4811 34.7229 32.8238 32.8003 34.472 30.3335C36.1203 27.8668 37 24.9667 37 22C36.9953 18.0232 35.4134 14.2106 32.6014 11.3986C29.7894 8.58655 25.9768 7.00469 22 7ZM22 34.2727C19.5727 34.2727 17.1999 33.5529 15.1816 32.2044C13.1634 30.8559 11.5904 28.9391 10.6615 26.6966C9.73259 24.454 9.48955 21.9864 9.9631 19.6057C10.4366 17.225 11.6055 15.0382 13.3219 13.3219C15.0382 11.6055 17.225 10.4366 19.6057 9.96309C21.9864 9.48954 24.454 9.73258 26.6966 10.6615C28.9391 11.5904 30.8559 13.1634 32.2044 15.1816C33.5529 17.1999 34.2727 19.5727 34.2727 22C34.2691 25.2538 32.9749 28.3733 30.6741 30.6741C28.3733 32.9749 25.2538 34.2691 22 34.2727ZM30.1818 22C30.1818 22.3617 30.0382 22.7085 29.7824 22.9642C29.5267 23.22 29.1798 23.3636 28.8182 23.3636H22C21.6383 23.3636 21.2915 23.22 21.0358 22.9642C20.78 22.7085 20.6364 22.3617 20.6364 22V13.8182C20.6364 13.4565 20.78 13.1097 21.0358 12.8539C21.2915 12.5982 21.6383 12.4545 22 12.4545C22.3617 12.4545 22.7085 12.5982 22.9642 12.8539C23.22 13.1097 23.3636 13.4565 23.3636 13.8182V20.6364H28.8182C29.1798 20.6364 29.5267 20.78 29.7824 21.0358C30.0382 21.2915 30.1818 21.6383 30.1818 22Z"
        fill={color}
      />
    </svg>
  );
};

export default Clock;