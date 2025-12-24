import React from 'react';
import BackToTopButton from '@site/src/components/BackToTopButton';

export default function Root({children}) {
  return (
    <>
      {children}
      <BackToTopButton />
    </>
  );
}
