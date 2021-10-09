import React from 'react';
import './AppStyle.tsx';
import * as s from './AppStyle';
// import { useState } from 'react';

function App() {

  return (
    <s.ContainerTicTac className="App">
      <s.TicTac>
        <li>
          <div>
            <svg width="89" height="90" viewBox="0 0 89 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M81.9478 7.87974C85.4468 12.1452 84.8147 18.5091 80.9546 22.4324L62.5568 41.0223C60.6155 42.9839 60.6155 46.1773 62.5568 48.1389L80.9546 66.7289C84.8373 70.6522 85.4468 77.0161 81.9478 81.2815C77.9297 86.1856 70.7512 86.4365 66.417 82.057L47.7032 63.1478C45.7618 61.1861 42.6015 61.1861 40.6601 63.1478L22.3075 81.6921C18.1087 85.9347 10.9753 86.2084 6.88947 81.8518C4.97068 79.8217 4 77.1758 4 74.5526C4 71.8383 5.0384 69.1239 7.07006 67.0482L25.7839 48.1389C27.7252 46.1773 27.7252 42.9839 25.7839 41.0223L7.47639 22.478C3.27763 18.2354 3.00675 11.0275 7.31837 6.92173C9.32745 4.98291 11.9235 4.00209 14.5195 4.00209C17.2058 4.00209 19.8921 5.05133 21.9463 7.10421L40.6601 26.0135C42.6015 27.9751 45.7618 27.9751 47.7032 26.0135L66.417 7.10421C70.7512 2.72474 77.9523 2.97565 81.9478 7.87974Z" stroke="black" stroke-width="8" stroke-miterlimit="10"/>
            </svg>
          </div>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </s.TicTac>
    </s.ContainerTicTac>
  );
}

export default App;