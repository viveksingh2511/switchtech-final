import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

const Instructor = () => {
  const instructors = [
    {
      name: "Akshay Mehta",
      title: "Lead Instructor & Founder",
      location: "Hinjewadi, Pune",
      achievements: [
        "7+ years in Data Engineering & Cloud",
        "Production ETL pipelines (Fortune 500)",
        "Expert in Python, SQL, PySpark, Airflow",
      ],
      skills: [
        { name: "Python & PySpark", value: 95 },
        { name: "Airflow & ETL", value: 92 },
      ],
    },
    {
      name: "Rohit Sharma",
      title: "Senior Cloud Architect",
      location: "Bangalore, India",
      achievements: [
        "10+ years in Cloud & DevOps",
        "Designed multi-region AWS systems",
        "Mentored 300+ engineers",
      ],
      skills: [
        { name: "AWS & GCP", value: 94 },
        { name: "Terraform", value: 90 },
      ],
    },
    {
      name: "Neha Verma",
      title: "Data Analytics Lead",
      location: "Hyderabad, India",
      achievements: [
        "8+ years in Data Analytics",
        "Built BI dashboards for MNCs",
        "Expert in SQL & Power BI",
      ],
      skills: [
        { name: "SQL", value: 96 },
        { name: "Power BI", value: 93 },
      ],
    },
  ];
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


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
                <div className="max-w-7xl mx-auto p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                    {instructors.map((person, idx) => (
                      <Card
                        key={idx}
                        className="border-2 hover:border-primary/50 transition-all duration-300 shadow-xl bg-card/90"
                      >
                        <CardContent className="p-6">

                          {/* Name */}
                          <div className="mb-4">
                            <h3 className="text-2xl font-bold">{person.name}</h3>
                            <p className="text-primary font-medium">{person.title}</p>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                              <MapPin className="w-4 h-4" />
                              {person.location}
                            </div>
                          </div>

                          {/* Achievements */}
                          <div className="mb-6">
                            <h4 className="font-semibold mb-3">Achievements</h4>
                            <div className="space-y-2">
                              {person.achievements.map((item, i) => (
                                <div key={i} className="flex gap-2 text-sm">
                                  <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Skills */}
                          <div className="mb-6">
                            <h4 className="font-semibold mb-3">Skills</h4>
                            <div className="space-y-3">
                              {person.skills.map((skill, i) => (
                                <div key={i}>
                                  <div className="flex justify-between text-xs mb-1">
                                    <span>{skill.name}</span>
                                    <span>{skill.value}%</span>
                                  </div>
                                  <Progress value={skill.value} className="h-2" />
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button size="sm" onClick={() => scrollToSection('#contact')} className="bg-gradient-to-r from-primary to-secondary">
                              <Phone className="w-4 h-4 mr-2" />
                              Contact
                            </Button>
                            <Button onClick={() => scrollToSection('#contact')} size="sm" variant="outline">
                              <Mail className="w-4 h-4 mr-2" />
                              Schedule a Call
                            </Button>
                          </div>

                        </CardContent>
                      </Card>
                    ))}
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