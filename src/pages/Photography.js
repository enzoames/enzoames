// Copyright 2019 enzoames Inc. All Rights Reserved.

import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import media from '../styles/media';
import BlinkCursor from '../components/BlinkCursor';
import useOnScroll from '../hooks/useOnScroll';
import { COLORS } from '../styles/constants';
import albums from '../utils/albums';

const Transition = styled.div`
  position: relative;
  margin-top: 80px;

  .down {
    transition: all 200ms ease-in;
  }
  .up {
    transition: all 200ms ease-out;
    transform: translate(0, -80px);
  }

  ${media.md`
     .down {
      transition: none;
     }
     .up {
      transition: none;
      transform: none;
     }   
  `}
`;

const AlbumList = styled.div`
  background-color: ${COLORS.WHITE};
  height: 80px;
  width: 100%;
  padding: 0 0 0 32px;
  display: flex;
  align-items: center;
  gap: 32px;
  position: fixed;
  top: 80px;
  left: 0;

  ${media.md`
    display: block;
    padding: 32px 0 0 0;
    width: 200px;
    position: fixed;
    left: unset;
    top: unset;
  `}
`;

const Album = styled.div`
  font-size: 14px;
  position: relative;
  cursor: pointer;

  ${media.md`
    padding: 0;
    margin-bottom: 15px;
  `}
`;

const Gallery = styled.div`
  width: 100%;
  padding: 30px;
  margin-top: 70px;

  ${media.md`
    width: 800px;
    margin-left: 200px;
    margin-top: 0;
  `}
`;

const Photo = styled.img`
  display: block;
  margin: 0 auto 30px auto;
  width: auto;
  height: auto;
  max-width: 250px;
  max-height: 250px;

  ${media.sm`
    max-width: 350px;
    max-height: 350px;    
  `}

  ${media.md`
    max-width: 700px;
    max-height: 600px;    
  `}
`;

function Photography() {
  const [album, setAlbum] = useState('world');
  const show = useOnScroll(true);

  const handleClick = useCallback((name) => {
    setAlbum(name);
  }, []);

  const renderGallery = () => {
    switch (album) {
      case 'nyc':
        return albums.nyc.map((photo, index) => (
          <Photo
            key={photo}
            src={photo}
            alt={`Enzo Ames Photography - NYC - ${index + 1}`}
            title={`Enzo Ames Photography - NYC - ${index + 1}`}
          />
        ));
      case 'world':
        return albums.world.map((photo, index) => (
          <Photo
            key={photo}
            src={photo}
            alt={`Enzo Ames Photography - World - ${index + 1}`}
            title={`Enzo Ames Photography - World - ${index + 1}`}
          />
        ));
      case 'people':
        return albums.people.map((photo, index) => (
          <Photo
            key={photo}
            src={photo}
            alt={`Enzo Ames Photography - People - ${index + 1}`}
            title={`Enzo Ames Photography - People - ${index + 1}`}
          />
        ));
      default:
        return 'NO PHOTOS';
    }
  };

  return (
    <>
      <Transition>
        <AlbumList className={show ? 'down' : 'up'}>
          <Album onClick={() => handleClick('world')}>
            World
            <BlinkCursor active={album === 'world'} />
          </Album>
          <Album onClick={() => handleClick('nyc')}>
            Nyc
            <BlinkCursor active={album === 'nyc'} />
          </Album>
          {/* <Album onClick={() => handleClick('people')}>
            People
            <BlinkCursor active={album === 'people'} />
          </Album> */}
        </AlbumList>
      </Transition>
      <Gallery>{renderGallery()}</Gallery>
    </>
  );
}

export default Photography;
