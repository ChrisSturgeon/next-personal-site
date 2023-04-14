import styles from './HamburgerButton.module.css';

interface showMobileProps {
  showMobile: boolean;
  toggleNav: React.MouseEventHandler<HTMLButtonElement>;
}

export default function HamburgerButton({
  showMobile,
  toggleNav,
}: showMobileProps) {
  if (showMobile) {
    return (
      <button className={styles.hamburger} onClick={toggleNav}>
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Menu / Close_LG">
            <path
              id="Vector"
              d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
              stroke="#000000"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
    );
  } else {
    return (
      <button className={styles.hamburger} onClick={toggleNav}>
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18L20 18"
            stroke="#000000"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#000000"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#000000"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </button>
    );
  }
}
