"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CategoryTabsProps {
  categories: Array<{ id: string; name: string }>;
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeButton = containerRef.current?.querySelector(
      `[data-category="${activeCategory}"]`
    );
    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeCategory]);

  return (
    <ScrollArea className="w-full border-b">
      <div ref={containerRef} className="flex gap-2 px-4 pb-2">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              data-category={category.id}
              variant={activeCategory === category.id ? "default" : "ghost"}
              className="flex-shrink-0 rounded-full"
              onClick={() => onCategoryChange(category.id)}
            >
              {category.name}
            </Button>
          </motion.div>
        ))}
      </div>
    </ScrollArea>
  );
}
