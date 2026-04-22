"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/constants/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="bg-soft py-20">
      <div className="container-padded mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">What Clients Say</h2>
        </motion.div>

        <div className="mx-auto max-w-3xl rounded-3xl bg-light p-8 shadow-luxury md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[current].name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="font-heading text-3xl text-primary">&ldquo;</p>
              <p className="mt-2 text-lg leading-8 text-dark/80">{testimonials[current].quote}</p>
              <p className="mt-7 font-heading text-2xl text-dark">{testimonials[current].name}</p>
              <p className="text-sm text-dark/55">{testimonials[current].title}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
