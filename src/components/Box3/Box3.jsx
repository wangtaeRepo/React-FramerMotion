import React, {useState} from 'react'
import {motion} from 'framer-motion'

export default function Box3() {
     
    return (
        <div className="box-container">
            <motion.div 
                className="box"
                // drag="x"
                // drag="y"
                drag
                dragConstraints={{
                    right: 20,
                    left: 10,
                    top: 5,
                    bottom: 5
                }}
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.9
                }}
            >
            </motion.div>
        </div>


    )
}