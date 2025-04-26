'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, ArrowDownCircle } from 'lucide-react'; // Import icons
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const products = [
    {
        id: 1,
        name: 'AI Coaching Assistant',
        description:
            'Revolutionize your coaching with 24/7 AI support, student analytics, adaptive mentoring, and smart feedback mechanisms.',
        svg: '/AI_coach.png',
        specs: [
            'Real-time student tracking',
            'Emotion-based feedback',
            'Speech & video integration',
            'Goal-based mentoring system',
        ],
    },
    {
        id: 2,
        name: 'AI Recruiter',
        description:
            'Streamline your hiring with automated screening, smart candidate scoring, and communication workflows.',
        svg: '/Recruiter.png',
        specs: [
            'Resume parser with NLP',
            'Video interview analysis',
            'Candidate ranking system',
            'Chatbot-enabled scheduling',
        ],
    },
    {
        id: 3,
        name: 'AI Test Generator',
        description:
            'Auto-generate question papers, quizzes, and worksheets with control over difficulty, syllabus, and format.',
        svg: '/Test generator.png',
        specs: [
            'NEET / JEE / CGPSC syllabus',
            'Bloom’s taxonomy tagging',
            'PDF + Web formats',
            'Plagiarism-free question bank',
        ],
    },
    {
        id: 4,
        name: 'AI LMS',
        description:
            'Smart Learning Platform with personalized learning paths, video recommendations, and real-time analytics.',
        svg: '/LMS.png',
        specs: [
            'Dynamic learning paths',
            'Performance heatmaps',
            'AI video summarizer',
            'Gamified leaderboard',
        ],
    },
];

// Animation variants
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

// Array of colors for the circles
const circleColors = [
  'rgba(56, 189, 248, 0.15)', // Cyan
  'rgba(167, 139, 250, 0.15)', // Violet
  'rgba(244, 114, 182, 0.15)', // Rose
  'rgba(52, 211, 153, 0.15)',  // Emerald
];
const Products = () => {
    const handleScroll = () => {
        window.scrollBy({
            top: window.innerHeight, // Scroll down by the height of one viewport
            behavior: 'smooth', // Smooth scrolling animation
        });
    };

    return (
      <>
      <Navbar />
        <div className="bg-gray-900 text-white mt-10">
            {products.map((product, index) => (
                <section
                    key={product.id}
                    className={`min-h-screen flex flex-col justify-center py-16 md:py-24 relative overflow-hidden ${
                        index % 2 === 0 ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-tr from-gray-800 to-black'
                    }`}
                >
                {/* Background SVG Circles */}
                <div className="absolute inset-0 pointer-events-none z-0">
                        {Array.from({ length: 10 }, (_, i) => { // Generate 10 circles
                            const randomX = Math.random() * 100;
                            const randomY = Math.random() * 100;
                            const randomSize = Math.random() * 80 + 20; // Size between 20 and 100
                            const randomColor = circleColors[i % circleColors.length];
                            const randomDelay = Math.random() * 2; // Random animation delay

                            return (
                                <motion.div
                                    key={i}
                                    style={{
                                        position: 'absolute',
                                        left: `${randomX}%`,
                                        top: `${randomY}%`,
                                        width: `${randomSize}px`,
                                        height: `${randomSize}px`,
                                        borderRadius: '50%',
                                        backgroundColor: randomColor,
                                    }}
                                    initial={{ opacity: 0, scale: 0, rotate: Math.random() * 360 }}
                                    animate={{
                                        opacity: 0.3, // Fixed opacity
                                        scale: 1.2,
                                        rotate: Math.random() * 360 + 360,
                                    }}
                                    transition={{
                                        duration: 4, // Increased duration for smoother animation
                                        repeat: Infinity,
                                        ease: 'linear',
                                        delay: randomDelay,
                                        repeatType: 'reverse'
                                    }}
                                />
                            );
                        })}
                    </div>


                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl px-6 mx-auto space-y-12 lg:space-y-0">
                        {/* Text Content */}
                        <motion.div
                            className="w-full lg:w-1/2 flex flex-col space-y-6"
                            initial="hidden"
                            whileInView="visible"
                            variants={cardVariants}
                            viewport={{ once: true }} // Only animate once
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                {product.name}
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                {product.description}
                            </p>
                            <ul className="space-y-4">
                                {product.specs.map((spec, idx) => (
                                    <li key={idx} className="text-sm text-emerald-400 flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5" />
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-8 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 w-fit">
                                Explore {product.name}
                            </button>
                        </motion.div>

                        {/* Icon/Image */}
                        <motion.div
                            className="w-full lg:w-1/2 flex justify-center"
                            initial="hidden"
                            whileInView="visible"
                            // @ts-ignore
                            variants={{ ...cardVariants, transition: { ...cardVariants.transition, delay: 0.3 } }} // Staggered delay
                            viewport={{ once: true }}
                        >
                            <Image
                                src={product.svg}
                                alt={product.name}
                                width={300}  // Increased size for better visual impact
                                height={300}
                                className="drop-shadow-2xl animate-fadeIn" // Stronger shadow
                            />
                        </motion.div>
                    </div>

                    {/* Scroll Indicator (only on first section) */}
                    {index === 0 && (
                        <div
                            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce-y justify-center flex flex-col items-center cursor-pointer"
                            onClick={handleScroll} // Added onClick handler here
                        >
                            <ArrowDownCircle className="w-8 h-8" />
                            <p className="text-xs text-center mt-1">Scroll to Explore</p>
                        </div>
                    )}
                </section>
            ))}

        </div>
        <Footer />
        </>
    );
};

export default Products;
