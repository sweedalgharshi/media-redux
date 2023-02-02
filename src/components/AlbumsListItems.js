import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import { GoTrashcan } from 'react-icons/go';
import { useRemoveAlbumMutation } from '../store';
import { Fragment } from 'react';

function AlbumsListItems({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <Fragment>
      <Button
        onClick={handleRemoveAlbum}
        loading={results.isLoading}
        className="mr-2"
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </Fragment>
  );

  return (
    <ExpandablePanel header={header} key={album.id}>
      List of photos in the album.
    </ExpandablePanel>
  );
}

export default AlbumsListItems;
