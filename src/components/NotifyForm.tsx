"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const NotifyForm = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted:", email);
        setEmail("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-8 max-w-[400px] mx-auto w-full">
            <input
                type="email"
                placeholder="E-mail Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-md bg-[#f5f5f5] text-gray-800 border-none outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-gray-500 text-sm"
                required
            />
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 rounded-md bg-[#333] text-white text-sm font-medium hover:bg-[#444] transition-colors whitespace-nowrap"
            >
                Notify me
            </motion.button>
        </form>
    );
};
