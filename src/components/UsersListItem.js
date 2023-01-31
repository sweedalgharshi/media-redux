import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/useThunk';

function UsersListItem({ user }) {
  const [doRemoveUser, isRemoveUser, removeUserError] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <Button loading={isRemoveUser} onClick={handleClick}>
          <GoTrashcan />
        </Button>
        {removeUserError && <div>Error Deleting user...</div>}
        {user.name}
      </div>
    </div>
  );
}

export default UsersListItem;
