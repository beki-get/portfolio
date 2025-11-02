"use client";

import { motion } from 'framer-motion';
import { Download, Calendar, Zap, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  const stats = [
    { icon: Calendar, label: 'Years Building Automation Tools', value: '2+' },
    { icon: Zap, label: 'Workflows Automated', value: '15+' },
    { icon: MapPin, label: 'Based In', value: 'Addis Ababa' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Backend Engineer for Business Automation
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700"
              >
                <Image
                  src="/about.jpg"
                  alt="Bereket Getaye – MERN Backend Developer"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -top-3 -right-3 bg-gradient-to-br from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2 text-sm font-semibold"
              >
                <Zap size={16} />
                Automation Expert
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-7"
          >
            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                I Build Scalable Backend Systems That Power Business Growth
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Specializing in <span className="font-semibold text-blue-600">MERN backend architecture</span>, I design and deploy 
                automation tools that streamline invoicing, payment processing, CRM workflows, and reporting — all with 
                <span className="font-medium"> Node.js, Express, MongoDB, and real time APIs</span>.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                From secure data pipelines to AI-integrated dashboards, I turn complex business needs into clean, 
                production-ready systems. <strong>Full-stack capable, backend obsessed.</strong>
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.06, y: -3 }}
                  className="text-center p-5 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <Icon className="mx-auto mb-2 text-blue-600 dark:text-blue-400" size={26} />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="/resume.pdf"
              download="Bereket_Getaye_Resume.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-7 py-3.5 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}