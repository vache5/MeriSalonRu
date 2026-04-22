"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/constants/data";

const aspectMap = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
};

export default function Products() {
  return (
    <section id="products" className="bg-soft py-20">
      <div className="container-padded mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="section-label">Product Showcase</p>
          <h2 className="section-title">Skincare Essentials By Meri</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="group rounded-2xl bg-light p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury"
            >
              <div className={`relative overflow-hidden rounded-2xl ${aspectMap[product.aspect]}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="pt-4">
                <p className="font-heading text-xl text-dark">{product.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary">Meri</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
