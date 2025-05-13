import React from 'react';
import { Star, ArrowForward, ArrowBack } from "@mui/icons-material";
import { Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Emily Carter",
    title: "Cardiologist, HeartCare Hospital",
    feedback: "An outstanding platform that enhances patient care efficiency...",
  },
  {
    name: "Dr. James Anderson",
    title: "Orthopedic Surgeon, City Health Clinic",
    feedback: "A game-changer for managing surgeries and patient workflows...",
  },
  {
    name: "Dr. Olivia Martinez",
    title: "Neurosurgeon, Advanced Brain Institute",
    feedback: "Incredibly useful for surgical planning and team coordination...",
  },
];

const TestimonialsSection = () => {
  // Component implementation with Material UI icons
  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <Typography variant="h2" className="text-3xl font-bold">
            Testimonials
          </Typography>
          <div className="flex gap-2">
            <IconButton className="bg-gray-100">
              <ArrowBack />
            </IconButton>
            <IconButton className="bg-gray-100">
              <ArrowForward />
            </IconButton>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400" />
                ))}
              </div>
              <Typography variant="body1" className="mb-4">
                "{testimonial.feedback}"
              </Typography>
              <Typography variant="subtitle1" className="font-bold">
                {testimonial.name}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                {testimonial.title}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
