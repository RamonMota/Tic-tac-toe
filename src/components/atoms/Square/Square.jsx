import "./Square.scss";

export const Square = ({
  value,
  onClick,
  isWinning = false,
  disabled = false,
  ariaLabel,
}) => {
  const className = `square${isWinning ? " winner" : ""}`;
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {value}
    </button>
  );
};
