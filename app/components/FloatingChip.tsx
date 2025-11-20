import { Box } from '@mui/material';
import { motion } from 'framer-motion';


export default function FloatingChip  ({
  text,
  icon,
  color,
  initialX,
  initialY,
}: {
  text: string;
  icon: React.ReactNode;
  color: string;
  initialX: number;
  initialY: number;
})  {
  return (
    <motion.div
      initial={{ x: initialX, y: initialY }}
      animate={{
        x: [
          initialX,
          initialX + 40,
          initialX + 20,
          initialX - 30,
          initialX,
        ],
        y: [
          initialY,
          initialY - 20,
          initialY + 30,
          initialY - 10,
          initialY,
        ],
        rotate: [0, 15, -10, 10, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        position: 'absolute',
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          px: 2,
          py: 1,
          borderRadius: 2,
          backgroundColor: color,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          fontWeight: 600,
          fontSize: '0.875rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
      >
        {icon}
        {text}
      </Box>
    </motion.div>
  );
};