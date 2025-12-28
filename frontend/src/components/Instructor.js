import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

const Instructor = () => {
  const achievements = [
    '7+ years in Data Engineering & Cloud',
    'Production ETL pipelines (Fortune 500)',
    'Expert in Python, SQL, PySpark, Airflow',
    'Mentored 200+ students successfully',
    'Real-world pipeline architecture focus',
  ];

  const skills = [
    { name: 'Python & PySpark', value: 95 },
    { name: 'SQL & Warehousing', value: 93 },
    { name: 'Airflow & ETL', value: 92 },
    { name: 'AWS / GCP', value: 90 },
    { name: 'CI/CD & Jenkins', value: 88 },
  ];

  return (
    <section id="instructor" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        ></motion.div>
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
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30 px-4 py-2">
            Meet Your Instructor
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Learn from an Industry Expert
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get mentored by Akshay Mehta, a seasoned Data Engineer with extensive experience in
            scalable data pipelines and placement-driven training.
          </p>
        </motion.div>

        {/* Instructor Card */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 shadow-2xl bg-card/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left - Image Section */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative bg-gradient-to-br from-primary/20 to-secondary/20 p-8 lg:p-12 flex items-center justify-center"
                  >
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="relative z-10"
                      >
                        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                          <img
                            src="/images/instructor.avif"
                            alt="Akshay Mehta"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </motion.div>

                      {/* Floating Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, type: 'spring' }}
                        className="absolute -bottom-4 -right-4 bg-background rounded-xl p-4 shadow-xl border-2 border-primary/50 z-10"
                      >
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                          <div>
                            <div className="text-2xl font-bold">5.0</div>
                            <div className="text-xs text-muted-foreground">200+ Students</div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Right - Info Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="p-8 lg:p-12"
                  >
                    {/* Name & Title */}
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold mb-2">Akshay Mehta</h3>
                      <p className="text-lg text-primary font-medium mb-2">
                        Lead Instructor & Founder
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>Hinjewadi, Pune</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold mb-4">Professional Achievements</h4>
                      <div className="space-y-3">
                        {achievements.map((achievement, index) => (
                          <motion.div
                            key={achievement}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold mb-4">Technical Expertise</h4>
                      <div className="space-y-4">
                        {skills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                          >
                            <div className="flex justify-between text-sm mb-2">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.value}%</span>
                            </div>
                            <Progress value={skill.value} className="h-2" />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                      className="bg-primary/10 rounded-xl p-6 border border-primary/30"
                    >
                      <h4 className="font-bold mb-2">Ready to Become a Data Engineer?</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Contact Akshay to discuss curriculum, career roadmap & placement support.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                          <Phone className="w-4 h-4 mr-2" />
                          Contact Instructor
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mail className="w-4 h-4 mr-2" />
                          Schedule a Call
                        </Button>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;