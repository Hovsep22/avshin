import React from 'react';
import { NavLink } from 'react-router-dom';

const blogs = [
    {
        image: require('./../../images/projects/project20.jpg'),
        title: '',
        description: '',
        date: '2020',
        month: '',
        year: ''
    },
    {
        image: require('./../../images/projects/project21.jpg'),
        title: '',
        description: '',
        date: '2021',
        month: '',
        year: ''
    },
    {
        image: require('./../../images/projects/project23.jpg'),
        title: '',
        description: '',
        date: '2022',
        month: '',
        year: ''
    }
]

var bnr1 = require('./../../images/background/bg1.jpg');

class Blogs extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b30 square_shape1 bg-parallax bg-center bg-no-repeat" data-stellar-background-ratio="0.5" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head ">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">ՎԵՐՋԻՆ </span> ԲԼՈԳԸ</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                {blogs.map((item, index) => (
                                    <div className="col-md-4 col-sm-6" key={index}>
                                        <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
                                            <div className="mt-post-media mt-img-overlay7">
                                                <NavLink to="/post-image"><img src={item.image} alt=""/></NavLink>
                                            </div>
                                            <div className="mt-post-info p-a30">
                                                <div className="post-overlay-position">
                                                    <div className="mt-post-meta ">
                                                        <ul>
                                                            <li className="post-date"><strong className="text-primary">{item.date}</strong> <span>{item.month} {item.year}</span></li>
                                                            {/* <li className="post-author">By <NavLink to="/post-image">Admin</NavLink> </li> */}
                                                            {/* <li className="post-comment"><NavLink to="/post-image">2 comment</NavLink> </li> */}
                                                        </ul>
                                                    </div>
                                                    <div className="mt-post-title ">
                                                        <h4 className="post-title m-b0">{item.title}</h4>
                                                    </div>
                                                    <div className="mt-post-text">
                                                        <p>{item.description}</p>
                                                    </div>
                                                    <div className="readmore-line">
                                                        <span><NavLink to="/post-image" className="site-button-link" data-hover="Read More">
                                                        {/* Read More <i className="fa fa-angle-right arrow-animation" /> */}
                                                        </NavLink></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-right p-r50 text-uppercase hilite-dark">
                        <strong>Blog</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default Blogs;