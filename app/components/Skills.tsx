'use client';

import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState, useRef } from 'react';

// ---------- Types ----------
interface Skill {
  name: string;
  level: number;
}

interface Position {
  x: number;
  y: number;
}

interface CircleConfig {
  containerSize: number;
  radius: number;
  itemSize: number;
}

// ---------- Data ----------
const skills: Skill[] = [
  { name: 'React.js', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Material-UI', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'MongoDB', level: 70 },
  { name: 'TypeScript', level: 65 },
];

export default function SkillsCircle() {
  const theme = useTheme();
  const [positions, setPositions] = useState<Position[]>([]);
  const [progressValues, setProgressValues] = useState<number[]>(skills.map(() => 0));

  const sectionRef = useRef<HTMLDivElement>(null);

  // ---------- Circle Size (responsive) ----------
  const [circleConfig, setCircleConfig] = useState<CircleConfig>({
    containerSize: 500,
    radius: 200,
    itemSize: 100,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 500) {
        setCircleConfig({
          containerSize: 280,
          radius: 110,
          itemSize: 70,
        });
      } else if (width <= 800) {
        setCircleConfig({
          containerSize: 400,
          radius: 170,
          itemSize: 85,
        });
      } else {
        setCircleConfig({
          containerSize: 500,
          radius: 200,
          itemSize: 100,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ---------- Calculate Circle Positions ----------
  useEffect(() => {
    const { radius, containerSize, itemSize } = circleConfig;

    const pos: Position[] = skills.map((_, index) => {
      const angle = (index / skills.length) * 2 * Math.PI;
      const x = radius * Math.cos(angle) + containerSize / 2 - itemSize / 2;
      const y = radius * Math.sin(angle) + containerSize / 2 - itemSize / 2;
      return { x, y };
    });

    setPositions(pos);
  }, [circleConfig]);

  // ---------- Progress Animation ----------
  useEffect(() => {
    skills.forEach((skill, i) => {
      setTimeout(() => {
        setProgressValues(prev => {
          const newVals = [...prev];
          newVals[i] = skill.level;
          return newVals;
        });
      }, i * 200);
    });
  }, []);

  return (
    <Box
      id="skills"
      ref={sectionRef}
      sx={{
        px: 2,
        py: { xs: 6, md: 10 },
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Background Glow & Title */}
      <Box
        sx={{
          position: 'absolute',
          width: circleConfig.containerSize,
          height: circleConfig.containerSize,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: circleConfig.containerSize,
            height: circleConfig.containerSize,
            background: `radial-gradient(circle, rgba(138,233,159,0.45) 0%, rgba(138,233,158,0) 70%)`,
            filter: 'blur(50px)',
            borderRadius: '50%',
          }}
        />

        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            letterSpacing: { xs: '4px', md: '8px' },
            textTransform: 'uppercase',
            color: '#8AE99F',
            zIndex: 1,
            fontSize: { xs: '35px', md: '55px' },
            textShadow: '0 0 20px rgba(138,233,159, .8)',
            animation: 'glowPulse 2.5s infinite alternate',
            fontFamily: "'Orbitron', sans-serif",
            userSelect: 'none',
          }}
        >
          SKILLS
        </Typography>

        <style>
          {`
            @keyframes glowPulse {
              0% { transform: scale(0.9); opacity: .8; }
              100% { transform: scale(1.05); opacity: 1; }
            }
          `}
        </style>
      </Box>

      {/* Skill Circles */}
      <Box
        sx={{
          position: 'relative',
          width: circleConfig.containerSize,
          height: circleConfig.containerSize,
          zIndex: 2,
        }}
      >
        {positions.length > 0 &&
          skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.2,
                type: 'spring',
                stiffness: 80,
              }}
              style={{
                position: 'absolute',
                left: positions[index]?.x,
                top: positions[index]?.y,
                width: circleConfig.itemSize,
                height: circleConfig.itemSize,
              }}
            >
              <CircularProgressbar
                value={progressValues[index]}
                text={`${progressValues[index]}%`}
                styles={buildStyles({
                  textColor: '#8AE99E',
                  pathColor: '#8AE99E',
                  trailColor: 'rgba(138,233,158,0.15)',
                  textSize: '14px',
                })}
              />
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  textAlign: 'center',
                  mt: 1,
                  color: '#ffffff',
                  fontSize: { xs: '10px', md: '13px' },
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
