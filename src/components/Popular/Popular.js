"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Card from "./Card";
import Swiper from "./Swiper";
import { motion, AnimatePresence } from "framer-motion";

function Popular() {
  const foodItems = [
    {
      id: 1,
      image: "/burger.png",
      title: "Vegetables Burger",
      subtitle: "Barbecue Italian cuisine pizza",
    },
    {
      id: 2,
      image: "/french-fries.png",
      title: "Special French Fries",
      subtitle: "Barbecue Italian cuisine",
    },
    {
      id: 3,
      image: "/pizza.png",
      title: "Special Pizza",
      subtitle: "Barbecue Italian cuisine pizza",
    },
    {
      id: 4,
      image: "/fried-shrimp.png",
      title: "Cuisine Chicken",
      subtitle: "Japanese Cuisine Chicken",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef(null);
  const itemsPerView = 4;
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  // Handle autoplay
  useEffect(() => {
    if (isAutoPlay && !isAnimating) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlay, currentIndex, isAnimating]);

  // Reset timer when user interacts
  const resetTimer = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      if (isAutoPlay) {
        autoPlayRef.current = setInterval(() => {
          handleNext();
        }, 5000);
      }
    }
  };

  const handlePrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? foodItems.length - 1 : prevIndex - 1;
      return newIndex;
    });
    resetTimer();

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % foodItems.length;
      return newIndex;
    });
    resetTimer();

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Function to get visible items for carousel
  const getVisibleItems = () => {
    const items = [];
    // For mobile, show only one item
    if (isMobile) {
      return [foodItems[currentIndex]];
    }

    // For desktop, show multiple items
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % foodItems.length;
      items.push(foodItems[index]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  // Single carousel container animation
  const carouselVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    if (newDirection > 0) {
      handleNext();
    } else {
      handlePrev();
    }
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative overflow-x-hidden bg-[#FBF7F2] px-7 py-7 lg:px-56 lg:py-28">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <motion.div
            className="flex items-center font-bold text-red-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mr-2 inline-block h-2 w-2 bg-red-800" />
            Crispy, Every Bite Taste
          </motion.div>
          <motion.h2
            className="text-3xl font-bold tracking-tight uppercase antialiased lg:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            POPULAR FOOD ITEMS
          </motion.h2>
        </div>
        <Swiper
          className="hidden lg:flex"
          onPrev={() => paginate(-1)}
          onNext={() => paginate(1)}
        />
      </div>

      {/* Cards - Desktop */}
      <div className="relative mt-16 hidden h-72 lg:block">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            className="absolute inset-0 grid grid-cols-4 gap-8"
            custom={direction}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            {visibleItems.map((item, index) => (
              <div key={`desktop-${item.id}-${index}`}>
                <Card
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  className="w-full"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Cards - Mobile */}
      <div className="relative mt-16 h-72 lg:hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            className="absolute inset-0"
            custom={direction}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <Card
              image={visibleItems[0].image}
              title={visibleItems[0].title}
              subtitle={visibleItems[0].subtitle}
              className="w-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="my-7 flex w-full justify-center lg:hidden">
        <Swiper onPrev={() => paginate(-1)} onNext={() => paginate(1)} />
      </div>

      {/* Sliding dots indicator */}
      <div className="mt-6 flex justify-center gap-2">
        {foodItems.map((_, index) => (
          <motion.div
            key={`dot-${index}`}
            className={`h-2 cursor-pointer rounded-full ${
              index === currentIndex % foodItems.length
                ? "w-6 bg-red-800"
                : "w-2 bg-gray-300"
            }`}
            onClick={() => {
              setCurrentIndex(index);
              setPage([page + 1, index > currentIndex ? 1 : -1]);
              resetTimer();
            }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>

      <div className="hidden lg:block">
        <Image
          src="/side-2.png"
          alt="Offer"
          width={500}
          height={500}
          className="absolute bottom-36 left-0 h-64 w-40"
        />
      </div>
    </div>
  );
}

export default Popular;
