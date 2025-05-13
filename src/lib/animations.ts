export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const cardHover = {
  rest: { 
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    } 
  },
  hover: { 
    scale: 1.02, 
    y: -5,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    } 
  }
};

export const staggeredFadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      delay,
      duration: 0.5
    }
  }
});

export const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

export const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};
