"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/cart-context";

interface ProductCardProps {
  id?: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  href: string;
  index: number;
}

export function ProductCard({
  id,
  name,
  description,
  price,
  imageUrl,
  index,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart({
      id: id || name,
      name,
      price,
      imageUrl,
    });
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={handleAddToCart}
      className="cursor-pointer"
    >
      <Card className="group relative overflow-hidden transition-shadow hover:shadow-xl">
        <CardContent className="flex gap-4 p-0">
          <div className="flex flex-1 flex-col justify-between p-4">
            <div className="space-y-1">
              <h3 className="font-semibold leading-tight transition-colors group-hover:text-primary">
                {name}
              </h3>
              <p className="line-clamp-2 text-xs text-gray-500">
                {description}
              </p>
            </div>
            <div className="mt-2">
              <p className="font-semibold text-primary">
                R$ {price.toFixed(2).replace(".", ",")}
              </p>
            </div>
          </div>
          <motion.div
            className="relative h-[120px] w-[120px] flex-shrink-0 overflow-hidden"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover transition-transform duration-300"
            />
          </motion.div>
        </CardContent>
        {isAdding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center bg-black/20"
          >
            <span className="text-sm font-bold text-white">Adicionado!</span>
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
}
