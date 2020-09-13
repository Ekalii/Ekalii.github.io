import React from 'react';
import './blog.css';
import { blogs } from '../../portfolio';

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

                </div>
                
            </div>
        </section>
    );
}
export default Blog;