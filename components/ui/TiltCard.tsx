import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = "", glowColor = "#8b5cf6" }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = mouseX.get();
    const yPct = mouseY.get();
    
    // Calculate rotation based on cursor position relative to center
    // Range -1 to 1
    const xPos = (clientX - left) / width - 0.5;
    const yPos = (clientY - top) / height - 0.5;

    x.set(xPos);
    y.set(yPos);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useMotionTemplate`${useMotionValue(mouseY.get() * -20)}deg`;
  const rotateY = useMotionTemplate`${useMotionValue(mouseX.get() * 20)}deg`;

  const maskImage = useMotionTemplate`radial-gradient(
    400px circle at ${mouseX.get() * 100 + 50}% ${mouseY.get() * 100 + 50}%,
    white,
    transparent
  )`;

  const style = {
    transformStyle: "preserve-3d",
    transform: useMotionTemplate`perspective(1000px) rotateX(${useSpring(useMotionValue(mouseY.get() * -15), {stiffness: 200, damping: 20})}deg) rotateY(${useSpring(useMotionValue(mouseX.get() * 15), {stiffness: 200, damping: 20})}deg)`
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style as any}
      className={`group relative rounded-xl transition-all duration-200 ease-linear ${className}`}
    >
        {/* Glow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(
            650px circle at ${mouseX.get() * 100 + 50}% ${mouseY.get() * 100 + 50}%,
            ${glowColor},
            transparent 80%
          )`,
          zIndex: 0
        }}
      />
      
      {/* Content Container */}
      <div className="relative h-full w-full rounded-xl bg-slate-900/90 border border-white/10 p-6 backdrop-blur-sm shadow-2xl overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};

export default TiltCard;