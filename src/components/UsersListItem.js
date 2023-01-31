import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/useThunk';
import ExpandablePanel from './ExpandablePanel';
import { Fragment } from 'react';

function UsersListItem({ user }) {
  const [doRemoveUser, isRemoveUser, removeUserError] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <Fragment>
      <Button className="mr-3" loading={isRemoveUser} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {removeUserError && <div>Error Deleting user...</div>}
      {user.name}
    </Fragment>
  );

  return <ExpandablePanel header={header}>Content</ExpandablePanel>;
}

export default UsersListItem;
