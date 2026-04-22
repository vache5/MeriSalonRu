"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { stylists } from "@/constants/data";

export default function Stylists() {
  return (
    <section id="stylists" className="bg-light py-20">
      <div className="container-padded mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="section-label">Meet Stylist</p>
          <h2 className="section-title">Our Expert Team</h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {stylists.map((stylist, index) => (
            <motion.article
              key={stylist.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group rounded-2xl border border-dark/10 p-5"
            >
              <div className="relative mb-6 h-80 overflow-hidden rounded-b-[100px]">
                <Image
                  src={stylist.image}
                  alt={stylist.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-heading text-2xl text-dark">{stylist.name}</h3>
              <p className="mt-1 text-sm text-dark/60">{stylist.role}</p>
              <button className="mt-5 text-xs uppercase tracking-[0.15em] text-primary transition hover:scale-105">
                Book Stylist
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
