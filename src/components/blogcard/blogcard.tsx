import React from 'react';
import './blogcard.css';

function BlogCard({ blogs }: any) {
    const Fade: any = require('react-reveal/Fade')
    return (
        <Fade bottom duration={800}>
        <a className="blog-card" href={blogs.url}>
            <div className="blog-card-title">
                <p>{blogs.title}</p>
            </div>
            <div className="blog-card-desc">
                <p>{blogs.desc}</p>
            </div>
        </a>
        </Fade>
    )
}
export default BlogCard;