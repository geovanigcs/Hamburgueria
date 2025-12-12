"use client";

import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import ConsumptionMethodOption from "./consumption-method-option";

interface WelcomeScreenProps {
  slug: string;
  restaurantName: string;
}

export function WelcomeScreen({ slug, restaurantName }: WelcomeScreenProps) {
  const [showContent, setShowContent] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 1000 });
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const emojiContainerRef = useRef(null);

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setShowContent(true),
    });

    // Animação inicial: Logo explode na tela
    tl.from(logoRef.current, {
      scale: 0,
      rotation: -360,
      duration: 1,
      ease: "back.out(1.7)",
    })
      .from(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(
        subtitleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );

    // Animação contínua de flutuação do logo
    gsap.to(logoRef.current, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  // Emojis flutuantes aleatórios
  const floatingEmojis = ["🍔", "🍟", "🥤", "🍕", "🌮", "🍗", "🥓", "🧀"];

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 px-6">
      {/* Emojis flutuantes de fundo */}
      <div className="absolute inset-0 overflow-hidden" ref={emojiContainerRef}>
        {floatingEmojis.map((emoji, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl opacity-20"
            initial={{
              x: Math.random() * windowSize.width,
              y: -100,
            }}
            animate={{
              y: windowSize.height + 100,
              x: [
                Math.random() * windowSize.width,
                Math.random() * windowSize.width,
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Círculos decorativos animados */}
      <motion.div
        className="absolute left-10 top-20 h-32 w-32 rounded-full bg-yellow-400/20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-red-400/20"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo com animação */}
        <motion.div
          ref={logoRef}
          className="relative"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-30 blur-xl"></div>
          <Image
            src="/logo.png"
            alt={restaurantName}
            width={120}
            height={120}
            className="relative"
          />
        </motion.div>

        {/* Título animado */}
        <motion.div
          ref={titleRef}
          className="text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-3xl font-bold text-transparent">
            Gigio&apos;s Burguer
          </h2>
          <motion.div
            className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-400 to-red-500"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </motion.div>

        {/* Mensagem de boas-vindas */}
        <motion.div
          ref={subtitleRef}
          className="space-y-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.h3
            className="flex items-center justify-center gap-3 text-3xl font-bold text-gray-800"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-4xl">👋</span>
            Seja bem-vindo!
            <span className="text-4xl">✨</span>
          </motion.h3>
          <motion.p
            className="mx-auto max-w-md text-gray-600"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2 }}
          >
            🍽️ Escolha como prefere aproveitar sua refeição. Estamos oferecendo
            praticidade e sabor em cada detalhe! 😋
          </motion.p>
        </motion.div>

        {/* Opções de consumo com animação */}
        <motion.div
          className="grid w-full max-w-2xl gap-4 pt-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -50 }}
            animate={showContent ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <ConsumptionMethodOption
              slug={slug}
              option="DINE_IN"
              buttonText="Para comer aqui 🍽️"
              imageAlt="Comer aqui"
              imageUrl="/dine_in.png"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 50 }}
            animate={showContent ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            <ConsumptionMethodOption
              slug={slug}
              option="TAKEAWAY"
              buttonText="Para levar 🥡"
              imageAlt="Para levar"
              imageUrl="/take_away.png"
            />
          </motion.div>
        </motion.div>

        {/* Indicador de scroll animado */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-gray-400"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-sm">Escolha uma opção</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Partículas de brilho */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute h-1 w-1 rounded-full bg-yellow-400"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
