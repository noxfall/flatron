import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, Card, CardHeader, CardBody, Button, Input } from '@material-tailwind/react';
import { addTodo } from '../utils/redux/todoSlice';

const NewTaskModal = ({ open, handler }) => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (title) {
      dispatch(addTodo({ id: todos.length + 1, author: `REDUX #${todos.length + 1}`, title: title }));
      setTitle('');
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        handler={handler}
        variant="gradient"
        className="bg-[#2c2e3a]"
      >
        <Card className="flex justify-center items-center bg-[#2c2e3a] h-[300px]">
          <CardHeader className="text-[24px] bg-transparent shadow-none text-center text-[#818eb6]">New Task</CardHeader>
          <CardBody className="px-2">
            <form className="flex flex-col justify-between items-center relative" onSubmit={handleAddTodo}>
              <Input variant="standard" label="Title" className="text-[#e0e3ed]" value={title} onChange={(e) => setTitle(e.target.value)} />
              <div className="pt-[2em]">
                <Button
                  type="submit"
                  variant="gradient"
                  color="green"
                  className="mr-1"
                  onClick={handler}
                >
                  <span>Confirm</span>
                </Button>
                <Button variant="gradient" color="red" onClick={handler}>
                  <span>Cancel</span>
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </Dialog>
    </div>
  );
};

export default NewTaskModal;