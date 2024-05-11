import React from 'react';
import './Blog.css';

const Blog = () => {
    const blogs = [
        {
            imageUrl: 'Image1.png',
            txt: 'Design',
            title: 'UX Review Presentations',
            description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
            pfp: 'Avatar (1).png',
            name: 'Olivia Rhye', 
            date: '20 Jan 2024',
        },
        {
            title: 'Migrating to Linear 101',
            description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
            imageUrl: 'Image2.png', 
            txt: 'Product',
            pfp: 'Avatar (2).png',
            name: 'Pheonix Baker', 
            date: '19 Jan 2024',
        },
        {   
             
            title: 'Building Your API Stack',
            description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
            imageUrl: 'Image3.png', 
            txt: 'Software Engineering',
            pfp: 'Avatar (3).png',
            name: 'Lana Steiner', 
            date: '18 Jan 2024',
        },
    ];


    return (
        <div className="container my-4">
            
            <div className="row mb-4">
                <div className="col-md-8">
                    <h6 style={{color: '#6941C6'}}>Our Blog</h6>
                    <h3>Latest Blog Posts</h3>
                    <p>Tool and strategies modern teams need to help their companies grow.</p>
                </div>
                <div className="col-md-4 text-md-end">
                    
                    <button className="btn btn-primary" style={{backgroundColor: '#6941C6'}}>View All Posts</button>
                </div>
            </div>

            
            <div className="row">
                {blogs.map((blog, index) => (
                    <div key={index} className="col-12 col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={blog.imageUrl} alt={`${blog.title} Image`} className="card-img-top" />
                            <div className="card-body">
                                
                                <h6 style ={{color: '#6941C6'}}>{blog.txt}</h6>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <img src="arrow-up-right.png" alt="Arrow" className="arrow-icon" style={{ cursor: 'pointer' }} />
                                </div>
                                
                                <p className="card-text">{blog.description}</p>
                                <div className="d-flex align-items-center">
                                    <img src={blog.pfp} alt="Profile" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
                                    <div>
                                        <p className="mb-0">{blog.name}</p>
                                        <p className="text-muted mb-0">{blog.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};


export default Blog;
