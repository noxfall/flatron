import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center absolute top-0 w-full h-[50px] px-[1em]">
      <div className="flex">
        <button className="navBtn">
          <a href="#"><FontAwesomeIcon icon={faChevronLeft} /></a>
        </button>
        <button className="navBtn">
          <a href="#"><FontAwesomeIcon icon={faChevronRight} /></a>
        </button>
      </div>
      <div className="flex items-center">
        <i className="flex items-center justify-center h-[30px] w-[35px] bg-[#6272a4] p-1"><FontAwesomeIcon icon={faSearch} /></i>
        <input
          type="text"
          placeholder="Discover"
          className="w-full h-[30px] bg-[#1f212d] outline-none font-[16px] px-[1em]"
        />
      </div>
      <div>
        <button>
          <a href="#"><FontAwesomeIcon icon={faBars} /></a>
        </button>
      </div>
    </nav>
  );
};

export default TopBar;