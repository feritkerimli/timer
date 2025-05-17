import React, { useState, useEffect } from 'react';
function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    return (
        <div className="Clock">
            Saat: {hours} | Dəqiqə: {minutes} | Saniyə: {seconds}
        </div>
    );
}

export default Clock;