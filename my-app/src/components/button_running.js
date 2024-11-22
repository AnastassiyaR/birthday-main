import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './button_running.css';

function ButtonRunning({ onClick }) {
  const [showButton, setShowButton] = useState(false);

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const appearButton = () => {
    setShowButton(true);
  };

  useEffect(() => {
    const timer = setTimeout(appearButton, 9000); // Show button after 100 ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showButton && (
        <motion.button
          className='buttonclick'
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
          onClick={onClick} // Call onClick prop when button is clicked
        >
          Hello?
        </motion.button>
      )}
    </div>
  );
}

export default ButtonRunning;