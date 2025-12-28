import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, BookOpen, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const WhyChoose = () => {
  const reasons = [
    {
      icon: Target,
      title: 'Real-world ETL & API projects',
      description: 'Work on industry-standard projects that simulate real production environments',
    },
    {
      icon: Users,
      title: 'Industry mentorship & mock interviews',
      description: 'Get guided by experienced professionals with personalized feedback',
    },
    {
      icon: BookOpen,
      title: 'Resume & portfolio building',
      description: 'Build a strong portfolio that showcases your skills to potential employers',
    },
    {
      icon: Award,
      title: 'Placement support till hired',
      description: 'Continuous support and guidance until you land your dream job',
    },
  ];

  const stats = [
    { value: '16', label: 'Weeks', color: 'from-blue-500 to-cyan-500' },
    { value: '8', label: 'Technologies', color: 'from-purple-500 to-pink-500' },
    { value: '15+', label: 'Projects', color: 'from-green-500 to-emerald-500' },
    { value: '250+', label: 'Hours', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose SwitchTech?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive training designed to make you job-ready with hands-on experience
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    >
                      <reason.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="glass-card border-2">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center"
                  >
                    <div className={`text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;