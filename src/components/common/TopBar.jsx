import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faBars, faEthernet, faUser, faRotateRight, faVolumeHigh, faGripLinesVertical, faGripHorizontal, faTableColumns, faTableCells, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    () => clearInterval(timer);
  });

  return (
    <nav className="flex flex-row justify-between items-center absolute top-0 w-full h-[50px] pr-2">
      <div className="flex">
        <button className="bg-black w-[50px] h-[50px]">
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button className="navBtn pl-2">
          <a href="#"><FontAwesomeIcon icon={faChevronLeft} /></a>
        </button>
        <button className="navBtn">
          <a href="#"><FontAwesomeIcon icon={faChevronRight} /></a>
        </button>
        <button className="navBtn">
          <a href="#"><FontAwesomeIcon icon={faRotateRight} /></a>
        </button>
      </div>
      <div className="flex items-center flex-grow pl-10">
        <button className="px-2 w-[30px] h-30px text-[20px]">
          <FontAwesomeIcon icon={faBookmark} />
        </button>
        <input
          type="text"
          placeholder="Discover"
          className="w-full h-[30px] bg-[#1f212d] outline-none font-[16px] px-[1em] flex-1"
        />
        <div className="flex justify-between">
          <span className="px-2 border-r-2 border-gray-600">{time.getHours()}: {time.getMinutes()}</span>
          <span className="px-2">{time.toDateString().substring(0, 10)}</span>
        </div>
      </div>
      <div className="ml-10">
        <button className="pl-4 pr-2">
          <a href="#"><FontAwesomeIcon icon={faGripLinesVertical} /></a>
        </button>
        <button className="px-2 pr-4">
          <a href="#"><FontAwesomeIcon icon={faGripHorizontal} /></a>
        </button>
        <button className="px-2 border-l-2 border-gray-500">
          <a href="#"><FontAwesomeIcon icon={faEthernet} /></a>
        </button>
        <button className="px-2">
          <a href="#"><FontAwesomeIcon icon={faVolumeHigh} /></a>
        </button>
        <button className="px-2">
          <a href="#"><FontAwesomeIcon icon={faBars} /></a>
        </button>
      </div>
    </nav>
  );
};

export default TopBar;