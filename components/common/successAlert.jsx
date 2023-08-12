import React from "react";

const SuccessAlert = ({ message }) => {
    return (
        <div
            className="p-4 text-sm text-green-800 rounded-lg bg-green-100"
            role="alert"
        >
            <span className="font-medium">Success!</span> {message}
        </div>
    );
};

export default SuccessAlert;
