import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, Calendar, Users, AlertCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Call or WhatsApp',
      value: '+91 8446920420',
      href: 'tel:+918446920420',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Mail,
      label: 'Email us anytime',
      value: 'switchtech55@gmail.com',
      href: 'mailto:switchtech55@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      label: 'Maharashtra, India',
      value: 'Hinjewadi, Pune',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const cohortDetails = [
    { icon: Calendar, label: 'Start Date', value: '15 Jan' },
    { icon: Clock, label: 'Duration', value: '4 Months' },
    { icon: Users, label: 'Max Students', value: '15' },
    { icon: AlertCircle, label: 'Seats Left', value: '8' },
  ];

  const officeHours = [
    { days: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { days: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"
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
            🚀 Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Next cohort starts <span className="font-bold text-primary">15 Jan 2026, 09:00</span> · Enroll before seats fill.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            <Card className="glass-card border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all group cursor-pointer"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-sm mb-1">{info.value}</div>
                        <div className="text-xs text-muted-foreground">{info.label}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cohort Details */}
            <Card className="border-2 border-primary/50 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Next Cohort Details</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {cohortDetails.map((detail, index) => (
                    <motion.div
                      key={detail.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-4 bg-background rounded-lg"
                    >
                      <detail.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-bold text-gradient mb-1">
                        {detail.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{detail.label}</div>
                    </motion.div>
                  ))}
                </div>
                <Badge className="w-full justify-center bg-gradient-to-r from-primary to-secondary text-white py-2">
                  🔥 Early Bird Discount Available
                </Badge>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="glass-card border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Office Hours</h3>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <motion.div
                      key={schedule.days}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex justify-between items-center p-3 rounded-lg bg-background/50"
                    >
                      <span className="font-medium text-sm">{schedule.days}</span>
                      <span className="text-sm text-muted-foreground font-bold">
                        {schedule.hours}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="border-2 hover:border-primary/50 transition-all shadow-xl bg-card/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium mb-2">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="h-12"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium mb-2">
                      Email <span className="text-muted-foreground">(Optional)</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="h-12"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="h-12"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals and what you'd like to learn..."
                      rows={5}
                      className="resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/50 group"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;