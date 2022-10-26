import React from 'react';

const Course = ({sub}) => {
    return (
        <div>
          <h2>course name:{sub.name}</h2>
          <p>id:{sub.id}</p>  
        </div>
    );
};

export default Course;