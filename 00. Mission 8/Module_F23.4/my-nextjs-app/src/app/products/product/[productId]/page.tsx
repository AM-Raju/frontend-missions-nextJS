import React from 'react';

const DynamicPage = ({params, searchParams}) => {

    console.log(params, searchParams);
    
    return (
        <div>
            <h1>This is dynamic page</h1>
        </div>
    );
};

export default DynamicPage;