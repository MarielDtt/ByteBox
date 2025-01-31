import React from "react";
import { motion } from "framer-motion";



const Loading = () => {

    return (
        <div className="w-8	h-8 flex justify-around">
            <span className="block w-2 h-2 bg-navbar rounded"></span>
            <span className="block w-2 h-2 bg-navbar rounded"></span>
            <span className="block w-2 h-2 bg-navbar rounded"></span>
        </div>
    )
}
export default Loading;