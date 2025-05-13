import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Assessment, Science } from "@mui/icons-material";
import { Link } from "wouter";
import { Button } from "@mui/material";

const PlatformSection = () => {
  const analyticsFeatures = [
    "Real-time surgical phase recognition and procedure tracking",
    "Customizable performance metrics and KPI tracking",
    "Comprehensive safety protocol monitoring and alerts",
    "Historical data analysis with AI-powered insights",
  ];

  const aiFeatures = [
    "Computer vision technology for real-time procedure analysis",
    "Automated surgical workflow optimization",
    "Predictive analytics for complication prevention",
    "Continuous learning system that improves with each procedure",
  ];

  return (
    <section className="py-4 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Typography
            variant="h3"
            className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4"
          >
            Our Surgical Intelligence Platform
          </Typography>
          <Typography variant="body1" className="text-lg text-neutral-600">
            A comprehensive solution designed to elevate surgical performance
            and patient outcomes
          </Typography>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Typography
              variant="h4"
              className="text-2xl font-bold text-neutral-800 mb-4"
            >
              Advanced Analytics Dashboard
            </Typography>
            <Typography
              variant="body1"
              className="text-lg text-neutral-600 mb-6"
            >
              Our intuitive dashboard provides comprehensive insights into
              surgical procedures, helping teams identify patterns and
              opportunities for improvement.
            </Typography>
            <ul className="space-y-4">
              {analyticsFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Box className="flex-shrink-0">
                    <Assessment className="w-5 h-5 text-sky-500" />
                  </Box>
                  <Box className="ml-3">
                    <Typography variant="body1" className="text-neutral-700">
                      {feature}
                    </Typography>
                  </Box>
                </li>
              ))}
            </ul>
            <Box className="mt-8">
              <Link href="/platform#dashboard">
                <Button
                  variant="contained"
                  size="large"
                  className="bg-primary hover:bg-primary/75 text-white"
                >
                  Explore Dashboard
                </Button>
              </Link>
            </Box>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Typography
              variant="h4"
              className="text-2xl font-bold text-neutral-800 mb-4"
            >
              AI-Powered Insights
            </Typography>
            <Typography
              variant="body1"
              className="text-lg text-neutral-600 mb-6"
            >
              Our advanced AI algorithms analyze surgical procedures in
              real-time, providing actionable insights and decision support to
              surgical teams.
            </Typography>
            <ul className="space-y-4">
              {aiFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Box className="flex-shrink-0">
                    <Science className="w-5 h-5 text-[#00A3B4]" />
                  </Box>
                  <Box className="ml-3">
                    <Typography variant="body1" className="text-neutral-700">
                      {feature}
                    </Typography>
                  </Box>
                </li>
              ))}
            </ul>
            <Box className="mt-8">
              <Link href="/platform#ai">
                <Button
                  variant="contained"
                  size="large"
                  className="bg-primary hover:bg-primary/75 text-white"
                >
                  Learn More
                </Button>
              </Link>
            </Box>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
