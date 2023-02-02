import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import { GoTrashcan } from 'react-icons/go';

function AlbumsListItems({ album }) {
  const header = (
    <div>
      <Button>
        <GoTrashcan />
      </Button>
      {album.title}
    </div>
  );

  return (
    <ExpandablePanel header={header} key={album.id}>
      List of photos in the album.
    </ExpandablePanel>
  );
}

export default AlbumsListItems;
