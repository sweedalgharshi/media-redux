import { useFetchPhotosQuery } from '../store';

function PhotosList({ album }) {
  useFetchPhotosQuery(album);

  return <div>{album.title}</div>;
}

export default PhotosList;
