
import React from 'react';
import { Phone, Email, LocationOn, Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "../../lib/animations";
import { TextField, Button, Checkbox, FormControlLabel, Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      title: "Phone",
      content: "+1 (800) 555-0123",
    },
    {
      icon: <Email className="w-5 h-5 text-primary" />,
      title: "Email",
      content: "info@surgicalintel.ai",
    },
    {
      icon: <LocationOn className="w-5 h-5 text-primary" />,
      title: "Office",
      content: (
        <>
          123 Innovation Drive, Guindy
          <br />
          Chennai, TN 600008
        </>
      ),
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <LinkedIn className="w-5 h-5" />, href: "#" },
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section id="contact" className="py-4 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            <motion.div 
              className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
            >
              <Typography variant="h2" className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
                Get in Touch
              </Typography>
              <Typography variant="body1" className="text-lg text-neutral-600 mb-8">
                Have questions about how our platform can benefit your institution? Reach out to our team of experts.
              </Typography>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {info.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <Typography variant="h6" className="text-lg font-medium text-neutral-800">
                        {info.title}
                      </Typography>
                      <Typography variant="body1" className="mt-1 text-neutral-600">
                        {info.content}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Typography variant="h6" className="text-lg font-semibold text-neutral-800 mb-4">
                  Follow Us
                </Typography>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-colors duration-200"
                      aria-label={`Social media link ${index + 1}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
            >
              <Box className="bg-white rounded-xl shadow-md shadow-gray-400 shadow-t-md drop-shadow-[0_-4px_6px_rgba(0,0,0,0.1)] p-8">
                <Typography variant="h3" className="text-2xl font-bold text-neutral-800 mb-6">
                  Send Us a Message
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <TextField
                    fullWidth
                    label="Name"
                    {...register("name", { required: true })}
                    error={!!errors.name}
                    helperText={errors.name ? "Name is required" : ""}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    error={!!errors.email}
                    helperText={errors.email ? "Valid email is required" : ""}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    {...register("message", { required: true })}
                    error={!!errors.message}
                    helperText={errors.message ? "Message is required" : ""}
                  />
                  <FormControlLabel
                    control={<Checkbox {...register("subscribe")} />}
                    label="Subscribe to our newsletter for updates on new features and industry insights"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </Box>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

