import colors from '../../../../styles/colors';
import { IconProps } from '../../../../types/icon';

const SearchFill = ({
  className,
  width = '40px',
  height = '40px',
  color = colors.grayScale.gray05
}: IconProps) => {
  return (
    <svg
      {...{ className, width, height, color }}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.8032 26.5739C24.8031 26.5739 24.8033 26.5738 24.8032 26.5739ZM33.4339 31.2453L26.9677 24.7791C28.4774 22.7357 29.1846 20.2052 28.9485 17.6694C28.7041 15.0454 27.468 12.6134 25.4922 10.8694C23.5164 9.12545 20.9497 8.20087 18.3157 8.28425C15.6817 8.36762 13.1788 9.45256 11.3172 11.3178C10.3554 12.2792 9.59234 13.4207 9.07174 14.6771C8.55115 15.9334 8.2832 17.28 8.2832 18.64C8.2832 20 8.55115 21.3466 9.07174 22.6029C9.59234 23.8593 10.3554 25.0008 11.3172 25.9622C13.0999 27.7472 15.4737 28.8188 17.9916 28.9751C20.4211 29.1259 22.823 28.4144 24.776 26.9709L31.2384 33.4334L31.2422 33.437C31.5345 33.7194 31.926 33.8756 32.3324 33.8721C32.7388 33.8685 33.1276 33.7055 33.415 33.4182C33.7024 33.1308 33.8654 32.742 33.8689 32.3356C33.8724 31.9292 33.7162 31.5376 33.4339 31.2453ZM13.2968 13.2978C13.2967 13.2979 13.2969 13.2977 13.2968 13.2978ZM11.9317 15.8628C12.273 15.0382 12.7645 14.2848 13.3806 13.6405L13.509 13.5121C14.6956 12.3255 16.257 11.5871 17.927 11.4225C19.5971 11.258 21.2725 11.6777 22.6679 12.61C24.0632 13.5423 25.0922 14.9295 25.5794 16.5354C26.0666 18.1412 25.9819 19.8663 25.3399 21.4168C24.6978 22.9672 23.538 24.2471 22.058 25.0383C20.5781 25.8295 18.8697 26.0831 17.2237 25.7559C15.5778 25.4287 14.0962 24.5409 13.0314 23.2438C11.9667 21.9467 11.3846 20.3196 11.3843 18.6415C11.381 17.6882 11.5671 16.7437 11.9317 15.8628Z"
        fill={color}
      />
    </svg>
  );
};

export default SearchFill;