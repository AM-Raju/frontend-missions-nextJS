import { IBlog } from '@/types/index.types';
import React from 'react';
import LatestBlogCard from '../ui/LatestBlogCard';
import BlogCard from '../ui/BlogCard';

const LatestBlogs = ({blogs}: {blogs: IBlog[]}) => {
    return (
        <div>
            <h1 className='text-4xl text-center font-semibold mt-10 mb-5'>Latest Blogs From <span className='text-accent'>Blogiz</span> </h1>
            <p className='text-gray-400 text-center w-1/4 mx-auto'>
                <i>
                    Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.
                </i>
            </p>
            <div className='grid grid-cols-2 gap-4 w-[70%] mx-auto my-5'>
                {
                    blogs.slice(0,2).map(blog=> <LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>)
                }
               
            </div>
            <div  className='grid grid-cols-3 gap-4 w-[70%] mx-auto my-5'>
                 {
                    blogs.slice(2,5).map(blog=> <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default LatestBlogs;