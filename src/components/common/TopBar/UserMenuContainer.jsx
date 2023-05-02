import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEthernet, faVolumeHigh, faGripLinesVertical, faGripHorizontal } from "@fortawesome/free-solid-svg-icons";

const UserMenuContainer = () => {
  return (
    <div className="flex justify-center items-center" id="userMenu">
      <button>
        <a href="#"><FontAwesomeIcon icon={faGripLinesVertical} /></a>
      </button>
      <button>
        <a href="#"><FontAwesomeIcon icon={faGripHorizontal} /></a>
      </button>
      <div className="border-l-[1px] border-gray-600 h-[40px]"></div>
      <button>
        <a href="#"><FontAwesomeIcon icon={faEthernet} /></a>
      </button>
      <button>
        <a href="#"><FontAwesomeIcon icon={faVolumeHigh} /></a>
      </button>
      <button>
        <a href="#"><FontAwesomeIcon icon={faBars} /></a>
      </button>
    </div>
  );
};

export default UserMenuContainer;