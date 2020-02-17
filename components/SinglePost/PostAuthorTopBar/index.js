import React from 'react';
import { fullName } from '../../../utils/string';

const PostAuthorTopBar = ({author}) => {
  return (
    <div>
      {fullName(author)}
    </div>
  );
};

export default PostAuthorTopBar;
