'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: position.x - 100, // center the 200px div on the cursor
        y: position.y - 100,
      }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    />
  );
}
