import React from 'react';
import './blog.css';
import { blogs } from '../../portfolio';
import BlogCard from '../blogcard/blogcard';

function Blog() {
    return (
        <section className="section--blog" id="blog">
            <div className="inner">
                
                <div className="title">
                    <p>{blogs.title}</p>
                </div>

                <div className="sub-title">
                    <p>{blogs.subTitle}</p>
                </div>

                <div className="content">
                    {blogs.list.map(v => {
                        return <BlogCard blogs={v} />
                    })}
                </div>
                
            </div>
        </section>
    );
}
export default Blog;