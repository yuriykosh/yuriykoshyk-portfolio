export function DesignIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16 24a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8Zm0-14a6 6 0 1 0 6 6a6.007 6.007 0 0 0-6-6Z"
      ></path>
      <circle cx="16" cy="16" r="2" fill="currentColor"></circle>
      <circle cx="16" cy="4" r="2" fill="currentColor"></circle>
      <circle cx="16" cy="28" r="2" fill="currentColor"></circle>
      <circle cx="28" cy="16" r="2" fill="currentColor"></circle>
      <circle cx="4" cy="16" r="2" fill="currentColor"></circle>
      <circle cx="7.515" cy="7.515" r="2" fill="currentColor"></circle>
      <circle cx="24.485" cy="24.485" r="2" fill="currentColor"></circle>
      <circle cx="24.485" cy="7.515" r="2" fill="currentColor"></circle>
      <circle cx="7.515" cy="24.485" r="2" fill="currentColor"></circle>
    </svg>
  );
}