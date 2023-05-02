import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChevronLeft, faChevronRight, faRotateRight } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
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
  );
};

export default Navigation;