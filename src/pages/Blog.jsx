import React from 'react';
import SmallBanner from '../components/SmallBanner';
import PaginatedBlogCards from '../components/PaginatedBlogCards';

const Blog = ({ mode }) => {
  return (
    <>
      <SmallBanner title='Blogs' />
      <PaginatedBlogCards mode={mode} />
    </>
  );
};

export default Blog;
