import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Workflow, Settings, Cloud, GitBranch, Shield, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Features = () => {
  
  const features = [
    {
      icon: Code,
      title: 'Python & PySpark',
      subtitle: 'Data Processing',
      description: 'Build strong Python foundations for ETL, automation, and data workflows.',
      color: 'from-blue-500 to-cyan-500',
      link: '/1_Introduction_to_Python.html',
    },
    {
      icon: Database,
      title: 'SQL & Data Warehousing',
      subtitle: 'Snowflake / BigQuery',
      description: 'Query, clean, transform, and optimize large-scale datasets.',
      color: 'from-purple-500 to-pink-500',
      link: '/sql_guide.html',
    },
    {
      icon: Workflow,
      title: 'Apache Airflow',
      subtitle: 'Orchestration',
      description: 'Automate and monitor production-grade data pipelines.',
      color: 'from-green-500 to-emerald-500',
      link: '/Apache AirFlow.html',
    },
    {
      icon: Settings,
      title: 'Jenkins & CI/CD',
      subtitle: 'Automation',
      description: 'Automate build, test, and deployment pipelines.',
      color: 'from-orange-500 to-red-500',
      link: '/Jenkins.html',
    },
    {
      icon: Cloud,
      title: 'AWS',
      subtitle: 'Cloud',
      description: 'Deploy scalable data systems on cloud platforms.',
      color: 'from-yellow-500 to-orange-500',
      link: '/AWS.html',
    },
    {
      icon: GitBranch,
      title: 'GCP',
      subtitle: 'Cloud & Big Data',
      description: 'Build and manage scalable data pipelines using BigQuery, Cloud Storage, Dataflow, and Pub/Sub on Google Cloud.',
      color: 'from-indigo-500 to-blue-500',
      link: '/Git_Gitlab.html',
    },
    {
      icon: Shield,
      title: 'JIRA & Project Mgmt',
      subtitle: 'Collaboration',
      description: 'Master project management and team collaboration tools.',
      color: 'from-pink-500 to-rose-500',
      link: '/JIRA.html',
    },
    {
      icon: TrendingUp,
      title: 'Placement Support',
      subtitle: "Until You're Hired",
      description: 'Comprehensive support with resume building, interview prep, and job placement.',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
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
            Comprehensive Curriculum
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Complete Data Engineering Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to become a job-ready data engineer
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card onClick={() => feature.link && (window.location.href = feature.link)} className="h-full group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-shadow`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm font-medium text-primary/80">
                      {feature.subtitle}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Badge = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${className}`}>
      {children}
    </span>
  );
};

export default Features;