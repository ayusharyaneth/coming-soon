"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 38,
        hours: 11,
        minutes: 24,
        seconds: 46,
    });

    useEffect(() => {
        // Set target date for demo purposes
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 38);
        targetDate.setHours(targetDate.getHours() + 11);
        targetDate.setMinutes(targetDate.getMinutes() + 24);

        const target = targetDate.getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = target - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: "Days", value: timeLeft.days },
        { label: "Hrs", value: timeLeft.hours },
        { label: "Min", value: timeLeft.minutes },
        { label: "Sec", value: timeLeft.seconds },
    ];

    return (
        <div className="flex gap-6 md:gap-12 justify-center">
            {timeUnits.map((unit, index) => (
                <div key={index} className="flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="text-4xl md:text-6xl font-light text-white tracking-tight tabular-nums"
                    >
                        {unit.value < 10 ? `0${unit.value}` : unit.value}
                    </motion.div>
                    <span className="text-xs md:text-sm text-gray-400 mt-2 font-medium uppercase tracking-wider">
                        {unit.label}
                    </span>
                </div>
            ))}
        </div>
    );
};
