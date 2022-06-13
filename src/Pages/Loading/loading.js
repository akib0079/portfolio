import React from 'react';
import HashLoader from "react-spinners/HashLoader";

const loading = () => {
    return (
        <div className="sweet-loading">
            <HashLoader color={'#F2AE02'} size={65} />
        </div>
    );
};

export default loading;