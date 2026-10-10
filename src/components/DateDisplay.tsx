"use client";
import { useEffect, useState } from "react";

const DateDisplay = () => {
    const [date, setDate] = useState("");

    useEffect(() => {
        const today = new Date().toLocaleDateString("bn-BD", {
            dateStyle: "full",
        });

        setDate(today);
    }, []);

    return (
        <p className="mt-1 text-[10px] text-gray-600 sm:text-xs">
            {date}
        </p>
    );
};

export default DateDisplay;
