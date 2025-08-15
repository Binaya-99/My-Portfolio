'use client';

import { Box, Typography, useTheme } from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState, useRef } from 'react';

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Material-UI', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'MongoDB', level: 70 },
  { name: 'TypeScript', level: 65 },
];

export default function SkillsCircle() {
  const theme = useTheme();
  const [positions, setPositions] = useState<any>([]);
  const [progressValues, setProgressValues] = useState<number[]>(skills.map(() => 0));

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 }); // triggers when 30% visible

  useEffect(() => {
    // Calculate positions on client only
    const radius = 200;
    const center = 250;
    const size = 100;
    const pos = skills.map((_, index) => {
      const angle = (index / skills.length) * (2 * Math.PI);
      const x = radius * Math.cos(angle) + center - size / 2;
      const y = radius * Math.sin(angle) + center - size / 2;
      return { x, y };
    });
    setPositions(pos as any);
  }, []);

  useEffect(() => {
    if (isInView) {
      // Animate progress values when section is visible
      skills.forEach((skill, i) => {
        setTimeout(() => {
          setProgressValues(prev => {
            const newVals = [...prev];
            newVals[i] = skill.level;
            return newVals;
          });
        }, i * 200); // stagger animation
      });
    }
  }, [isInView]);

  return (
    <Box
      id="skills"
      ref={sectionRef}
      sx={{
        px: 2,
        py: 8,
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      {/* Background Green Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Background Gradient Circle */}
        <Box
          sx={{
            position: "absolute",
            width: 400,
            height: 400,
            background: `radial-gradient(circle, rgba(138, 233, 159, 0.45) 0%, rgba(138, 233, 158, 0) 70%)`,
            filter: "blur(50px)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />

        {/* Stylish SKILLS Text */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            letterSpacing: "8px",
            textTransform: "uppercase",
            color: "#8AE99F",
            zIndex: 1,
            textShadow: "0 0 20px rgba(138, 233, 159, 0.8), 0 0 40px rgba(138, 233, 159, 0.6)",
            animation: "glowPulse 2.5s infinite alternate",
            fontFamily: "'Orbitron', sans-serif", // Looks futuristic
            userSelect: "none",
          }}
        >
          SKILLS
        </Typography>

        <style>
          {`
          @keyframes glowPulse {
            0% {
              text-shadow: 0 0 20px rgba(138, 233, 159, 0.8), 0 0 40px rgba(138, 233, 159, 0.6);
              transform: scale(0.8);
            }
            100% {
              text-shadow: 0 0 30px rgba(138, 233, 159, 1), 0 0 60px rgba(138, 233, 159, 0.9);
              transform: scale(1.05);
            }
          }
        `}
        </style>
      </Box>
      {/* Circular skill indicators */}
      <Box
        sx={{
          position: 'relative',
          width: 500,
          height: 500,
        }}
      >
        {positions.length > 0 &&
          skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100,
              }}
              style={{
                position: 'absolute',
                left: `${positions[index].x}px`,
                top: `${positions[index].y}px`,
                width: 100,
                height: 100,
              }}
            >
              <CircularProgressbar
                value={progressValues[index]}
                text={`${progressValues[index]}%`}
                styles={buildStyles({
                  textColor: '#8AE99E',
                  pathColor: '#8AE99E',
                  trailColor: 'rgba(138, 233, 158, 0.2)',
                  textSize: '16px',
                  pathTransitionDuration: 1.5, // smooth animation
                })}
              />
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  textAlign: 'center',
                  mt: 1,
                  color: '#fff',
                }}
              >
                {skill.name}
              </Typography>
            </motion.div>
          ))}
      </Box>
    </Box>
  );
}
