import React from 'react';

const AlbumList = ({ albumList }) => {
  const showList = albums =>
    albums
      ? albums.map((item, index) => (
          <img
            key={index}
            alt=''
            src={`/images/albums/${item.cover}.jpg`}
          ></img>
        ))
      : null;

  return <div className='albums_list'>{showList(albumList)}</div>;
};

export default AlbumList;