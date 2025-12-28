import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';

const Curriculum = () => {
  return (
    <section id="curriculum" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Data Engineering Bootcamp
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A hands-on, industry-oriented program to master data pipelines, cloud platforms, and
            real-world ETL workflows.
          </p>
        </motion.div>

        {/* Tech Stack Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 shadow-xl">
            <CardContent className="p-8">
              <div className="flex justify-center items-center">
                <img
                  src="/images/tech-stack.webp"
                  alt="Technology Stack"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Curriculum;