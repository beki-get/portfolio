"use client";

import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch,
  Palette,
  Zap
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Globe,
    skills: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'Next.js', level: 90, icon: '▲' },
      { name: 'TypeScript', level: 88, icon: '📘' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨' },
      { name: 'JavaScript', level: 95, icon: '🟨' },
      { name: 'HTML/CSS', level: 98, icon: '🌐' },
    ]
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 90, icon: '🟢' },
      { name: 'Express.js', level: 85, icon: '🚀' },
      { name: 'Python', level: 80, icon: '🐍' },
      { name: 'REST APIs', level: 92, icon: '🔗' },
      { name: 'GraphQL', level: 75, icon: '📊' },
      { name: 'Microservices', level: 78, icon: '🔧' },
    ]
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 88, icon: '🍃' },
      { name: 'PostgreSQL', level: 85, icon: '🐘' },
      { name: 'Redis', level: 80, icon: '🔴' },
      { name: 'Supabase', level: 82, icon: '⚡' },
      { name: 'Prisma', level: 85, icon: '🔷' },
      { name: 'MySQL', level: 78, icon: '🐬' },
    ]
  },
  {
    title: 'Tools & Others',
    icon: Code2,
    skills: [
      { name: 'Git', level: 95, icon: '📝' },
      { name: 'Docker', level: 80, icon: '🐳' },
      { name: 'AWS', level: 75, icon: '☁️' },
      { name: 'Vercel', level: 90, icon: '▲' },
      { name: 'Jest', level: 85, icon: '🧪' },
      { name: 'Figma', level: 70, icon: '🎨' },
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                  <category.icon className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}