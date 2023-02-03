import { useFetchPhotosQuery, useAddPhotoMutation } from '../store';
import Button from '../components/Button';
import Skeleton from './Skeleton';
import PhotosListItem from './PhotosListItems';

function PhotosList({ album }) {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className="h-8 w-full" />;
  } else if (error) {
    content = <div>Error fetching images</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photos
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default PhotosList;
