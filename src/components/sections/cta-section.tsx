import React from 'react';
import { ArrowForward } from "@mui/icons-material";
import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-4 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Surgical Practice?
          </Typography>
          <Typography variant="body1" className="text-white/90 mb-8 max-w-2xl mx-auto my-4">
            Join leading healthcare institutions in revolutionizing surgical procedures with our AI-powered platform.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<ArrowForward />}
            className="px-8 py-3"
          >
            Get Started Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
