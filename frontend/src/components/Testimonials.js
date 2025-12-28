import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Data Engineer, TCS',
      content: 'Hands-on projects helped me crack my first Data Engineer role.',
      rating: 5,
      avatar: 'PS',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Rahul Patel',
      role: 'Data Engineer, Infosys',
      content: 'Best investment for my career. Clear explanations & support.',
      rating: 5,
      avatar: 'RP',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Sneha Reddy',
      role: 'Cloud Data Engineer',
      content: 'Placement support till hired. Highly recommended.',
      rating: 5,
      avatar: 'SR',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%, transparent 75%, hsl(var(--primary)) 75%, hsl(var(--primary))), linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%, transparent 75%, hsl(var(--primary)) 75%, hsl(var(--primary)))',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px',
          }}
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our successful graduates who transformed their careers
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-card/80 backdrop-blur-sm relative overflow-hidden">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2, type: 'spring' }}
                  className="absolute top-4 right-4 opacity-10"
                >
                  <Quote className="w-16 h-16 text-primary" />
                </motion.div>

                <CardContent className="p-6 relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground mb-6 leading-relaxed text-base">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Avatar className={`h-12 w-12 bg-gradient-to-br ${testimonial.gradient} border-2 border-background shadow-lg`}>
                        <AvatarFallback className="text-white font-bold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;