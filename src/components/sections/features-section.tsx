import React from 'react';
import { Group, Psychology, Science, BarChart, ContentPaste,  GppGood } from "@mui/icons-material";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../lib/animations";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Link } from "wouter";

const FeatureCard = ({ icon, title, description, href, iconClassName }) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardContent>
        <Box className={`w-12 h-12 rounded-lg ${iconClassName} flex items-center justify-center mb-4`}>
          {icon}
        </Box>
        <Typography variant="h5" className="font-semibold mb-2">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" className="mb-4">
          {description}
        </Typography>
        <Link href={href}>
          <Typography
            className="text-primary hover:text-primary/80 font-medium cursor-pointer"
          >
            Learn more →
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Group className="w-6 h-6 text-white" />,
      title: "Team Collaboration",
      description: "Enable seamless communication and coordination between surgical team members.",
      href: "/features/collaboration",
      iconClassName: "bg-blue-500"
    },
    {
      icon: <Psychology className="w-6 h-6 text-white" />,
      title: "AI-Powered Insights",
      description: "Leverage machine learning for real-time surgical procedure analysis.",
      href: "/features/ai-insights",
      iconClassName: "bg-purple-500"
    },
    {
      icon: <Science className="w-6 h-6 text-white" />,
      title: "Clinical Research",
      description: "Advanced tools for conducting and analyzing clinical research.",
      href: "/features/research",
      iconClassName: "bg-green-500"
    },
    {
      icon: <BarChart className="w-6 h-6 text-white" />,
      title: "Performance Analytics",
      description: "Comprehensive metrics and KPIs for surgical performance tracking.",
      href: "/features/analytics",
      iconClassName: "bg-orange-500"
    },
    {
      icon: <ContentPaste className="w-6 h-6 text-white" />,
      title: "Documentation",
      description: "Automated surgical documentation and reporting system.",
      href: "/features/documentation",
      iconClassName: "bg-red-500"
    },
    {
      icon: <GppGood className="w-6 h-6 text-white" />,
      title: "Safety Protocols",
      description: "Built-in safety checks and protocol enforcement.",
      href: "/features/safety",
      iconClassName: "bg-teal-500"
    }
  ];

  return (
    <section className="py-4 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <Typography variant="h3" className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Transforming Surgical Practice
          </Typography>
          <Typography variant="body1" className="text-lg text-neutral-600">
            Our AI-powered platform delivers real-time insights for improved surgical outcomes and enhanced patient safety.
          </Typography>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeIn}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                href={feature.href}
                iconClassName={feature.iconClassName}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

