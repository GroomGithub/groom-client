type Props = {
  className?: string;
};

const Alert = ({ className }: Props) => {
  return (
    <svg
      {...{ className }}
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 8.25C19.2805 8.25 16.6221 9.05642 14.3609 10.5673C12.0997 12.0782 10.3374 14.2256 9.29666 16.7381C8.25596 19.2506 7.98366 22.0153 8.51421 24.6825C9.04476 27.3497 10.3543 29.7997 12.2773 31.7227C14.2003 33.6457 16.6503 34.9552 19.3175 35.4858C21.9848 36.0163 24.7494 35.744 27.2619 34.7033C29.7744 33.6626 31.9218 31.9003 33.4327 29.6391C34.9436 27.3779 35.75 24.7195 35.75 22C35.7457 18.3546 34.2957 14.8597 31.718 12.282C29.1403 9.70434 25.6454 8.2543 22 8.25ZM22 33.25C19.775 33.25 17.5999 32.5902 15.7498 31.354C13.8998 30.1179 12.4578 28.3609 11.6064 26.3052C10.7549 24.2495 10.5321 21.9875 10.9662 19.8052C11.4003 17.6229 12.4717 15.6184 14.0451 14.045C15.6184 12.4717 17.623 11.4002 19.8052 10.9662C21.9875 10.5321 24.2495 10.7549 26.3052 11.6064C28.3609 12.4578 30.1179 13.8998 31.354 15.7498C32.5902 17.5999 33.25 19.775 33.25 22C33.2464 24.9826 32.0599 27.8419 29.9509 29.9509C27.8419 32.0599 24.9826 33.2464 22 33.25ZM23.25 29.5H20.75V27H23.25V29.5ZM23.25 24.5H20.75V14.5H23.25V24.5Z"
        fill="#343A3F"
      />
    </svg>
  );
};

export default Alert;
