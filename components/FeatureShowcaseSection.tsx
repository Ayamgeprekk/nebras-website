'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'High Conversion Design',
    desc: 'Every pixel is placed with intent, guiding your visitors toward the finish line with psychological precision.',
    image: '/portfolio-1.png',
  },
  {
    title: 'Fast Performance',
    desc: 'Blink and it’s loaded. Our clean-code architecture ensures your site is lightning fast on every device.',
    image: '/portfolio-1.png',
  },
  {
    title: 'Trust Focused UX',
    desc: 'We build digital relationships. Our layouts are designed to establish instant authority and credibility.',
    image: '/portfolio-1.png',
  },
];

const FeatureShowcaseSection = () => {
  return (
    <section className="section bg-black overflow-hidden">
      <div className="container">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col lg:flex-row items-center gap-20 mb-[160px] last:mb-0 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Text */}
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.2, 0, 0, 1] }}
              className="w-full lg:w-1/2"
            >
              <h3 className="text-[42px] md:text-[56px] font-bold mb-6 tracking-tight leading-tight text-white">
                {feature.title}
              </h3>
              <p className="text-[20px] text-[#86868B] max-w-lg leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>

            {/* Image/Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.2, 0, 0, 1] }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border border-white/5 bg-[#0B0B0B] group shadow-2xl">
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureShowcaseSection;
