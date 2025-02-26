import React from 'react';

const MockedImage = props => {
  return <img {...props} alt={props.alt || 'mocked image'} />;
};

export default MockedImage;
