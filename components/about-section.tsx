"use client";

import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Award } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  const handleDownloadCV = () => {
    // Mock download functionality
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'John_Doe_CV.pdf';
    link.click();
  };

  const stats = [
    { icon: Calendar, label: 'Years Experience In Personal Projects', value: '2+' },
    { icon: Award, label: 'Projects Completed', value: '10+' },
    { icon: MapPin, label: 'Location', value: 'Addis Ababa' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="about.jpg"
                  alt="Bereket Getaye"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
              >
                <Award size={24} />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a dedicated Full Stack Developer  creating 
                innovative web applications. I specialize in React, Next.js, and Node.js, 
                with a passion for writing clean, efficient code and delivering exceptional user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I enjoy building apps that solve real problems and help businesses grow. I believe 
                in continuous learning and staying at the forefront of web development trends.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              {stats.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                >
                  <Icon className="mx-auto mb-2 text-blue-600" size={24} />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}