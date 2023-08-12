import React from "react";

const ErrorAlert = () => {
    return (
        <div
            className="p-4 text-sm text-red-800 rounded-lg bg-red-100"
            role="alert"
        >
            <span className="font-medium">Error!</span> {message}
        </div>
    );
};

export default ErrorAlert;
