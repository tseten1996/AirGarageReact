import React from 'react';

export default function CustomNavigation(){
    const navBarImgStyle = {
        width: "33%"
    };

    return (
        <div className="navbar">
           <img
            alt=""
            style={navBarImgStyle}
            src="/air-garage.png"
            className="d-inline-block align-top"
            />
        </div>
    );
}