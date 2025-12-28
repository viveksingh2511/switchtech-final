import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Clock, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Hero = () => {
  const techBadges = ['Python', 'SQL', 'PySpark', 'Airflow', 'Jenkins', 'AWS', 'GCP', 'JIRA'];

  const stats = [
    { icon: Clock, value: '16', label: 'Weeks' },
    { icon: Award, value: '8+', label: 'Technologies' },
    { icon: Users, value: '15', label: 'Max Students' },
    { icon: Award, value: '100%', label: 'Support' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient"></div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <Badge className="px-4 py-2 text-sm bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/50 backdrop-blur-sm">
                <Calendar className="w-4 h-4 mr-2 inline" />
                🔥 New Batch Starting March 2nd, 2026
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Become a{' '}
              <span className="text-gradient inline-block">Job-Ready</span>
              <br />
              <span className="text-gradient inline-block">Data Engineer</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Master the full data engineering ecosystem—from building robust data pipelines to deploying them in real-world production environments. Our program guides you step by step with hands-on projects, industry-relevant tools, and continuous mentorship, featuring expert faculty from IIT who bring strong academic foundations and real-world problem-solving experience, and we support you end-to-end until you successfully get placed.
            </motion.p>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            >
              {techBadges.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <Badge variant="secondary" className="px-3 py-1.5 font-medium text-sm">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/50 text-white group"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#curriculum')}
                className="border-2 hover:bg-primary/10"
              >
                Download Curriculum
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="flex-1 w-full max-w-lg"
          >
            <div className="glass-card rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-center mb-6">
                Complete Data Engineering Stack
              </h3>
              <p className="text-center text-muted-foreground mb-8">
                Everything you need to become a job-ready data engineer
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-background/50 backdrop-blur-sm rounded-xl p-4 text-center hover:shadow-lg transition-all"
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <div className="text-3xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Next Batch Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="bg-primary/10 backdrop-blur-sm rounded-xl p-4 border border-primary/30"
              >
                <div className="flex items-center justify-center gap-2 text-primary mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">Next Batch: March 2nd, 2026</span>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Limited seats • Small batch size
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
        >
          <div className="w-1.5 h-3 bg-foreground/50 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;