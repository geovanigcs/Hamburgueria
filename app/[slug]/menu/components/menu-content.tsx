"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { AnimatedBackground } from "@/components/animated-background";
import { CategoryTabs } from "@/components/category-tabs";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES } from "@/constants/products";
import { useCart } from "@/contexts/cart-context";

import { CartButton } from "./cart-button";

interface MenuContentProps {
  slug: string;
  consumptionMethod?: string;
  restaurant: {
    name: string;
    coverImageUrl: string;
    avatarImageUrl: string;
  };
}

export function MenuContent({ slug, consumptionMethod, restaurant }: MenuContentProps) {
  const [activeCategory, setActiveCategory] = useState("combos");
  const { cartItems, total } = useCart();

  const currentCategory = CATEGORIES.find((cat) => cat.id === activeCategory);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <AnimatedBackground />
      {/* Header with image */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-[200px] md:h-[300px] lg:h-[400px] w-full"
      >
        <Image
          src={restaurant.coverImageUrl}
          alt={restaurant.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-shadow hover:shadow-xl"
        >
          <Link href={`/${slug}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M15 18l-6-6 6-6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-shadow hover:shadow-xl"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <rect
              x="9"
              y="9"
              width="13"
              height="13"
              rx="2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </motion.div>

      {/* Restaurant info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="space-y-4 p-4 pb-2 md:px-8 lg:px-12"
      >
        <div className="flex items-start gap-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative h-12 w-12 md:h-16 md:w-16 flex-shrink-0"
          >
            <Image
              src={restaurant.avatarImageUrl}
              alt={restaurant.name}
              fill
              className="rounded-lg object-cover shadow-md"
            />
          </motion.div>
          <div className="flex-1">
            <h1 className="text-lg md:text-2xl font-semibold">
              {restaurant.name.toUpperCase()}
            </h1>
            <p className="text-sm text-gray-500">Fast Food</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-1 rounded-md bg-yellow-400 px-2 py-1 md:px-3 md:py-2"
          >
            <span className="text-sm md:text-base">⭐</span>
            <span className="text-sm md:text-base font-semibold">5.0</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 text-sm text-green-600"
        >
          <Clock className="h-4 w-4" />
          <span>Aberto</span>
        </motion.div>
      </motion.div>

      {/* Category tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <CategoryTabs
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </motion.div>

      {/* Products section */}
      <div className="flex-1 space-y-4 p-4 md:px-8 lg:px-12 pb-24">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-2xl font-semibold"
        >
          {currentCategory?.name}
        </motion.h2>

        {/* Grid responsivo: 1 coluna mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentCategory?.products.map((product, index) => (
            <ProductCard
              key={`${product.name}-${index}`}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              href={`/${slug}/menu/product-${activeCategory}-${index}?consumptionMethod=${consumptionMethod}`}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom cart bar */}
      {itemCount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="sticky bottom-0 border-t bg-white p-4 shadow-lg md:px-8 lg:px-12"
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div>
              <p className="text-sm text-gray-500">Total dos pedidos</p>
              <p className="text-lg font-semibold">
                R$ {total.toFixed(2).replace(".", ",")} <span className="text-sm text-gray-500">/ {itemCount} {itemCount === 1 ? 'item' : 'itens'}</span>
              </p>
            </div>
            <CartButton />
          </div>
        </motion.div>
      )}
    </div>
  );
}
