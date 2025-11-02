"use client";

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, Zap, Code2 } from 'lucide-react';

const workExperience = [
  {
    title: 'Backend MERN Developer – Business Automation',
    company: 'Client Projects (Remote)',
    location: 'Addis Ababa / Global',
    period: '2024 – Present',
    description: 'Designed and deployed backend systems for business automation tools, focusing on invoicing, lead capture, payment workflows, and real-time reporting.',
    achievements: [
      'Built 4+ production-grade automation APIs (Node.js + Express)',
      'Automated invoicing & payment reminders for 3 clients (saved 20+ hrs/week)',
      'Integrated Stripe, Twilio, and webhooks for real-time workflows',
      'Scaled MongoDB schemas for 10k+ records with 99.9% uptime'
    ]
  },
  {
    title: 'Full Stack Developer – Workflow Automation',
    company: 'Freelance & Open Source',
    location: 'Remote',
    period: '2023 – 2024',
    description: 'Developed full-stack tools to automate CRM, email sequences, and data pipelines using MERN stack with Firebase and Redis caching.',
    achievements: [
      'Created lead capture system with auto-follow-up (SMS + Email)',
      'Built AI-powered dashboard with real-time analytics (WebSocket)',
      'Reduced API response time by 70% via Redis + query optimization',
      'Open-sourced 2 backend automation templates (500+ stars)'
    ]
  }
];

const education = [
  {
    degree: 'B.Sc. Computer Science',
    school: 'University of Gondar',
    location: 'Gondar, Ethiopia',
    period: '2021 – 2025',
    description: 'Strong foundation in algorithms, data structures, system design, and full-stack development. Specialized in backend architecture and automation systems.',
    achievements: [
      'Top 10% in System Design & Backend Engineering',
      'Led team project: "Automated Billing System" (Node.js + MongoDB)',
      'Awarded for Best Backend Implementation (2024)'
    ]
  }
];

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Experience & Education
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full mb-5" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From building <strong>scalable backend automation systems</strong> to leading full-stack workflow tools — all powered by <strong>MERN + real-time APIs</strong>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mr-4 shadow-lg">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Automation Experience
              </h3>
            </div>

            <div className="space-y-8">
              {workExperience.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-xl" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {job.title}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                      <Calendar size={14} className="mr-1" />
                      {job.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-blue-600 dark:text-blue-400 mb-3 text-sm font-medium">
                    <Code2 size={15} className="mr-1" />
                    {job.company}
                    <span className="mx-2">•</span>
                    <MapPin size={14} className="mr-1" />
                    {job.location}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                    {job.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {job.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 mt-1.5 flex-shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl mr-4 shadow-lg">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: -5 }}
                  className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-l-xl" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-purple-600 dark:text-purple-400 mb-3 text-sm font-medium">
                    <span className="font-semibold">{edu.school}</span>
                    <span className="mx-2">•</span>
                    <MapPin size={14} className="mr-1" />
                    {edu.location}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed text-sm">
                    {edu.description}
                  </p>
                  
                  <ul className="space-y-1.5">
                    {edu.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mr-3 flex-shrink-0" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}