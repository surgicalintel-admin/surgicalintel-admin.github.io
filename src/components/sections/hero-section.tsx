import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const images = [
  "/si-slider3.jpg",
  "/si-slider2.jpg",
  "/si-slider1.jpg",
];

export default function HeroSection() {
  return (
    <Box sx={{ position: "relative", width: "100vw", minHeight: "100vh", overflow: "hidden", marginLeft: "50%", transform: "translateX(-50%)" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        style={{ width: "100%", height: "100vh" }}
      >
        {images.map((src, index) => (
          <SwiperSlide>
            <Box
              key={index}
              sx={{
                width: "100%",
                height: "100vh",
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.62)",
          zIndex: 1
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          textAlign: "center",
          zIndex: 2,
          maxWidth: "90vw"
        }}
      >
        <motion.div initial="hidden" animate="visible">
          <Typography
            component={motion.h1}
            variants={slideUp}
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
              fontWeight: "bold",
              color: "#fff",
              mb: 3
            }}
          >
            Elevate Surgical{" "}
            <Box component="span" className="text-sky-500">
              Performance
            </Box>{" "}
            With AI Technology
          </Typography>

          <motion.div variants={slideUp}>
            <Typography variant="h5" sx={{ mb: 4, color: "#ddd" }}>
              Our Surgical Intelligence Platform delivers real-time insights and
              analytics to enhance precision, reduce complications, and improve
              patient outcomes.
            </Typography>
          </motion.div>

          <motion.div variants={slideUp}>
            <Box
              display="flex"
              gap={2}
              flexDirection={{ xs: "column", sm: "row" }}
              justifyContent="center"
            >
              <Link to="/contact">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    fontWeight: 500,
                    boxShadow: (theme) => `0 4px 14px ${theme.palette.primary.main}20`
                  }}
                >
                  Request Demo
                </Button>
              </Link>
              <Link to="/contents">
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<ChevronRight />}
                  sx={{ fontWeight: 500, color: "#fff", borderColor: "#fff" }}
                >
                  Explore Platform
                </Button>
              </Link>
            </Box>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
}

