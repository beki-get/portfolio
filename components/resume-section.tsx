"use client";

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const workExperience = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Lead development of scalable web applications using React, Next.js, and Node.js. Mentored junior developers and implemented best practices for code quality and performance.',
    achievements: [
      'Increased application performance by 40%',
      'Led a team of 5 developers',
      'Implemented CI/CD pipelines'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'San Francisco, CA',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect user interfaces.',
    achievements: [
      'Built 15+ client projects',
      'Reduced load times by 60%',
      'Implemented responsive designs'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'WebSolutions',
    location: 'Remote',
    period: '2019 - 2020',
    description: 'Specialized in creating responsive, accessible web applications with a focus on user experience and modern JavaScript frameworks.',
    achievements: [
      'Improved accessibility scores by 90%',
      'Created reusable component library',
      'Optimized SEO performance'
    ]
  }
];

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Stanford University',
    location: 'Stanford, CA',
    period: '2017 - 2019',
    description: 'Specialized in Software Engineering and Human-Computer Interaction. Graduated Magna Cum Laude.',
    achievements: [
      'GPA: 3.8/4.0',
      'Research in Machine Learning',
      'Teaching Assistant for Web Development'
    ]
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'UC Berkeley',
    location: 'Berkeley, CA',
    period: '2013 - 2017',
    description: 'Foundation in computer science fundamentals, algorithms, and software development principles.',
    achievements: [
      'Dean\'s List for 6 semesters',
      'President of Computer Science Club',
      'Hackathon Winner (3x)'
    ]
  }
];

const certifications = [
  { name: 'AWS Certified Solutions Architect', year: '2023' },
  { name: 'Google Cloud Professional Developer', year: '2022' },
  { name: 'MongoDB Certified Developer', year: '2021' },
];

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey, education, and achievements in the world of software development.
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
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-xl" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {job.title}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={14} className="mr-1" />
                      {job.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                    <span className="font-semibold">{job.company}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {job.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Education */}
            <div className="flex items-center mb-8">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                <GraduationCap className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6 mb-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-blue-600 rounded-l-xl" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-purple-600 dark:text-purple-400 mb-2">
                    <span className="font-semibold">{edu.school}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {edu.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                <Award className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-green-500"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {cert.name}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}