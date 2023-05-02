import { useState, useEffect } from 'react';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NewTaskModal } from './';
import { todos } from '../mockDb';

const NewTask = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => setOpen(!open);

  return (
    <div className="flex justify-center items-center 
    rounded-md bg-[#1f212d] w-full h-[65px] 
    cursor-pointer transition ease-in-out hover:bg-slate-800">
      <div
        onClick={toggleModal}
      >
        <FontAwesomeIcon icon={faPlus} />

      </div>
      <NewTaskModal open={open} handler={toggleModal} callback={() => toggleModal} />
    </div>
  );
};

export default NewTask;