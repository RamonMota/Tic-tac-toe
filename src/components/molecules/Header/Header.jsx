import { Fragment } from "react";
import "./Header.scss";
export const Header = () => {
  const displayInfo = [
    { name: "Player 1", value: 5 },
    { name: "Empate", value: 5 },
    { name: "Player 2", value: 5 },
  ];

  return (
    <div className="header">
      {displayInfo.map((item, index) => (
        <Fragment key={item.name}>
          <div className="info">
            <span>{item.value}</span>
            <p>{item.name}</p>
          </div>
          {displayInfo.length > index + 1 && (
            <span className="divider" aria-hidden="true"></span>
          )}
        </Fragment>
      ))}
    </div>
  );
};
