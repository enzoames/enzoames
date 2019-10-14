// Copyright 2019 enzoames Inc. All Rights Reserved.

import { useState, useEffect, useCallback } from 'react';

function useOnScroll() {
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = useCallback(() => {
    const current = document.body.getBoundingClientRect().top;
    setScrollPos(current);
    let show = current > scrollPos;
    if (scrollPos >= 0) {
      show = true;
    }
    setShow(show);
  }, [scrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return show;
}

export default useOnScroll;
