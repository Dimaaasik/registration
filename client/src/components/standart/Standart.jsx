import './standart.css';
import React from "react";

const Standart = () => {
    const gifUrl = "https://gifdb.com/images/file/you-realize-its-friday-zootopia-bfpai4oj0i7emmu4.gif";

    return (
        <div>
            <img src={gifUrl} alt="Гіфка" />
        </div>
    );
};

export default Standart;
