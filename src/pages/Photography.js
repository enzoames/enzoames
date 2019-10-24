// Copyright 2019 enzoames Inc. All Rights Reserved.

import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import media from '../styles/media';
import BlinkCursor from '../components/BlinkCursor';
import useOnScroll from '../hooks/useOnScroll';
import { COLORS } from '../styles/constants';
import albums from '../utils/albums';
import { GA_URL, GA_EL } from '../utils/config';
import Analytics from '../utils/Analytics';

const PhotographyPage = styled.div`
  max-width: 1000px;
  display: flex;
  margin: 0 auto;
`;

const AlbumList = styled.div`
  background-color: ${COLORS.WHITE};
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: fixed;

  ${media.md`
    display: block;
    padding: 30px;
    width: 200px;
    position: fixed;
  `}
`;

const Transition = styled.div`
  .down {
    transition: all 200ms ease-in;
  }
  .up {
    transition: all 200ms ease-out;
    transform: translate(0, -167%);
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

const Album = styled.div`
  font-size: 14px;
  position: relative;
  width: 50%;
  padding: 10px;
  cursor: pointer;
  text-align: center;

  ${media.md`
    padding: 0;
    margin-bottom: 15px;
    text-align: left;
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

  useEffect(() => {
    Analytics.logPageImpression(GA_URL.PHOTOGRAPHY);
    Analytics.logAlbumClick(GA_EL.ALBUM_WORLD);
  }, []);

  const handleClick = useCallback((name, album) => {
    Analytics.logAlbumClick(album);
    setAlbum(name);
  }, []);

  const renderGallery = () => {
    switch (album) {
      case 'nyc':
        return albums.nyc.map(photo => <Photo key={photo} src={photo} />);
      case 'world':
        return albums.world.map(photo => <Photo key={photo} src={photo} />);
      case 'people':
        return albums.people.map(photo => <Photo key={photo} src={photo} />);
      default:
        return 'NO PHOTOS';
    }
  };

  return (
    <PhotographyPage>
      <Transition>
        <AlbumList className={show ? 'down' : 'up'}>
          <Album onClick={() => handleClick('world', GA_EL.ALBUM_WORLD)}>
            World
            <BlinkCursor active={album === 'world'} />
          </Album>
          <Album onClick={() => handleClick('nyc', GA_EL.ALBUM_NYC)}>
            Nyc
            <BlinkCursor active={album === 'nyc'} />
          </Album>
          <Album onClick={() => handleClick('people', GA_EL.ALBUM_PEOPLE)}>
            People
            <BlinkCursor active={album === 'people'} />
          </Album>
        </AlbumList>
      </Transition>
      <Gallery>{renderGallery()}</Gallery>
    </PhotographyPage>
  );
}

export default Photography;
