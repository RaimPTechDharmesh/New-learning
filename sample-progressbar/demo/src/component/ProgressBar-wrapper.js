import React, {useEffect, useState} from "react";
import { CircularProgress } from "@chakra-ui/react";

const ProgressBarWrapper = ({ children }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Change the delay as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <CircularProgress isIndeterminate color="green.300" />
                </div>
            ) : (
                children
            )}
        </>
    );
};

export default ProgressBarWrapper;