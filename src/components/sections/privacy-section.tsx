import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../lib/animations";

const PrivacySection = () => {
  const features = [
    { image: "/HiTrust.webp" },
    { image: "/AICPA-SOC.webp" },
    { image: "/GDPR.webp" },
    { image: "/HIPAA-Compliant.webp" },
  ];

  return (
    <section className="py-4 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Privacy & Security FTW
          </h3>
          <p className="text-lg text-neutral-600">
            Theator is dedicated to maintaining the highest standards of
            security and compliance. Together with AWS, we ensure all patient,
            provider, and procedure data is properly managed and safeguarded at
            all times.
          </p>
        </motion.div>

        {/* Logos in a tight row */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-[10px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeIn}>
              <img
                src={feature.image}
                alt="Feature Logo"
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border border-gray-200 shadow-sm"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacySection;
