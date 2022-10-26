import React from 'react';

const Blog = () => {
    return (
       <div>
        <h4 className='text-center'>1. what is cors?</h4>
        <p className='m-3'>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets scripts, iframes and videos.Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
        <h4 className='text-center'>2. Why are you using firebase? What other options do you have to implement authentication?</h4>
        <p className='m-3'>Why are you using firebase?: Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity.</p>
        <p className='m-3'>What other options do you have to implement authentication?:  Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.To use the Firebase Storage we need to authenticate a user via Firebase authentication. The default security rules require users to be authenticated. Firebase Storage is basically a powerful and simple object storage, in which you can store your files easily.</p>
        <h4 className='text-center'>3. How does the private route work?</h4>
        <p className='m-3'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.The Route component from react-router is public by default but we can build upon it to make it restricted. We can add a restricted prop with a default value of false and use the condition if the user is authenticated and the route is restricted, then we redirect the user back to the Dashboard component</p>
        <h4 className='text-center'>4.What is Node? How does Node work?</h4>
        <p className='m-3'>What is Node?: Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications</p>
        <p className='m-3'>How does Node work?: It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
       </div>   
 );
};

export default Blog;