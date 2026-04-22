"use client";

import { motion } from "framer-motion";
import { pricePlans } from "@/constants/data";

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-light py-20">
      <div className="floral floral-bottom-right" aria-hidden />
      <div className="container-padded mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="section-label">Price Plans</p>
          <h2 className="section-title">Transparent Luxury Pricing</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {pricePlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="rounded-2xl border border-dark/10 bg-soft p-6"
            >
              <h3 className="font-heading text-2xl text-dark">{plan.title}</h3>
              <div className="mt-6 space-y-4">
                {plan.items.map((item) => (
                  <div
                    key={item.service}
                    className="flex items-end justify-between gap-4 border-b border-dotted border-dark/30 pb-3 text-sm"
                  >
                    <span>{item.service}</span>
                    <span className="font-semibold text-dark">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
