import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDownload, faEnvelope, faFile, faFolder, faGear, faGlobe, faHomeLg, faMusic, faPhotoFilm, faPlus, faTerminal, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faFileWord } from '@fortawesome/free-regular-svg-icons';

const LeftBar = () => {
  return (
    <aside
      id="leftBar"
      className="flex flex-col justify-start items-center absolute left-0 top-[50px] w-[50px] h-full"
    >
      <div className="flex flex-col py-2 h-full">
        <button>
          <FontAwesomeIcon icon={faHomeLg} />
        </button>
        <button>
          <FontAwesomeIcon icon={faGlobe} />
        </button>
        <hr />
        <button>
          <FontAwesomeIcon icon={faFolder} />
        </button>
        <button>
          <FontAwesomeIcon icon={faPhotoFilm} />
        </button>
        <button>
          <FontAwesomeIcon icon={faMusic} />
        </button>
        <button>
          <FontAwesomeIcon icon={faFileWord} />
        </button>
        <button>
          <FontAwesomeIcon icon={faDownload} />
        </button>
        <hr />
        <button>
          <FontAwesomeIcon icon={faCode} />
        </button>
        <button>
          <FontAwesomeIcon icon={faTerminal} />
        </button>
        <button>
          <FontAwesomeIcon icon={faFile} />
        </button>
        <hr />
        <button>
          <FontAwesomeIcon icon={faUsers} />
        </button>
        <button>
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
        <hr />
        <button>
          <FontAwesomeIcon icon={faGear} />
        </button>
        <button>
          <FontAwesomeIcon icon={faPlus} />
        </button>

      </div>
    </aside>
  );
};

export default LeftBar;