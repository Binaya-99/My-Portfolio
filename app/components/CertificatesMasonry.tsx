'use client';

import { Box, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';

// Types
interface Certificate {
  title: string;
  image: string;
}

interface TiltElement extends HTMLDivElement {
  vanillaTilt?: {
    destroy: () => void;
  };
}

const certificates: Certificate[] = [
  { title: 'React Web Development', image: '/certificates/web-development-react.jpg' },
  { title: 'AI Prompt Engineering', image: '/certificates/AI-prompt-GEN-AI.jpg' },
  { title: 'Android Development', image: '/certificates/android-development.jpg' },
  { title: 'Flutter Development', image: '/certificates/flutter-udemy.jpg' },
  { title: 'Google Digital Marketing', image: '/certificates/google-digital-marketing.jpg' },
  { title: 'MERN Stack Udemy', image: '/certificates/MERN-stack-udemy.jpg' },
  { title: 'SAP ABAP Certification', image: '/certificates/SAP-ABAP.jpg' },
];

export default function CertificatesMasonry() {
  const tiltRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    if (isMobile) return;

    const currentRefs = [...tiltRefs.current];

    currentRefs.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 12,
          speed: 300,
          glare: true,
          'max-glare': 0.25,
          scale: 1.02,
        });
      }
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (!ref) return;
        const tiltElement = ref as TiltElement;
        tiltElement.vanillaTilt?.destroy();
      });
    };
  }, [isMobile]);

  return (
    <Box sx={{ py: 10, px: 4, background: '#000' }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          mb: 6,
          color: '#8AE99E',
          fontWeight: 700,
          letterSpacing: '1px',
          textShadow: '0 0 15px rgba(138,233,158,0.4)',
        }}
      >
        Certifications Gallery
      </Typography>

      {/* ---------- MOBILE AUTO SLIDER ---------- */}
      {isMobile && (
        <div
          style={{
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <motion.div
            style={{
              display: 'flex',
              gap: '20px',
              width: 'max-content',
            }}
            animate={{ x: ['0px', '-50%'] }}
            transition={{
              ease: 'linear',
              duration: certificates.length * 4,
              repeat: Infinity,
            }}
          >
            {[...certificates, ...certificates].map((cert, index) => (
              <div
                key={index}
                style={{
                  width: '85vw',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: '1px solid rgba(138,233,158,0.25)',
                  background: 'rgba(255,255,255,0.03)',
                  boxShadow: '0 0 25px rgba(138,233,158,0.15)',
                  flexShrink: 0,
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{ width: '100%', display: 'block', borderRadius: '18px' }}
                />

                <div
                  style={{
                    padding: '12px 16px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))',
                    color: '#8AE99E',
                    fontWeight: 600,
                  }}
                >
                  {cert.title}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* ---------- DESKTOP MASONRY ---------- */}
      {!isMobile && (
        <Box
          sx={{
            columnCount: { xs: 1, sm: 2, md: 3 },
            columnGap: '24px',
          }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                tiltRefs.current[index] = el;
              }}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              style={{
                breakInside: 'avoid',
                marginBottom: '24px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '18px',
                  border: '1px solid rgba(138,233,158,0.25)',
                  boxShadow: '0 0 25px rgba(138,233,158,0.15)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    display: 'block',
                    borderRadius: '18px',
                    transition: '0.4s ease',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    padding: '12px 16px',
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))',
                    color: '#8AE99E',
                    fontWeight: 600,
                  }}
                >
                  {cert.title}
                </div>
              </div>
            </motion.div>
          ))}
        </Box>
      )}
    </Box>
  );
}
