import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div>
                <h2>Difference between Javascript and NodeJS.</h2>
                <p> Javascript: Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers. It is basically used on the client-side.	Javascript is capable enough to add HTML and play with the DOM.</p>
                <p> Node JS: NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side. Nodejs does not have capability to add HTML tags.
                </p>
            </div>
            <div>
                <h2>Differences between SQL and NoSQL databases.</h2>
                <p>SQL: These databases have fixed or static or predefined schema. These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.SQL are Vertically Scalable.</p>
                <p>NoSQL: They have dynamic schema. These databases are best suited for hierarchical data storage.These databases are not so good for complex queries. NoSQL are 	Horizontally scalable </p>
            </div>
            <div>
                <h2> What is the purpose of JWTs and how does it work. </h2>
                <p> The purpose of JWTs is an open standard used to share security information between two parties — a client and a server.
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            </div>
        </div>
    );
};

export default Blogs;