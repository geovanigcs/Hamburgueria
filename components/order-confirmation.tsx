"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, ShoppingBag, Truck } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { AnimatedBackground } from "@/components/animated-background";
import { Button } from "@/components/ui/button";

interface OrderConfirmationProps {
  orderNumber: string;
  customerName: string;
  total: number;
  consumptionMethod: "DINE_IN" | "TAKEAWAY";
}

export function OrderConfirmation({
  orderNumber,
  customerName,
  total,
  consumptionMethod,
}: OrderConfirmationProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") || "gigios";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentStep]);

  const isDineIn = consumptionMethod === "DINE_IN";

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-6">
      <AnimatedBackground />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-500"
        >
          <CheckCircle className="h-16 w-16 text-white" />
        </motion.div>

        {/* Card Principal */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="rounded-3xl bg-white p-8 shadow-2xl"
        >
          <h1 className="mb-2 text-center text-2xl font-bold text-gray-800">
            🎉 Pedido Confirmado!
          </h1>
          <p className="mb-6 text-center text-gray-600">
            Obrigado, <span className="font-semibold">{customerName}</span>!
          </p>

          {/* Número do Pedido */}
          <div className="mb-6 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 p-6 text-center">
            <p className="text-sm text-white/90">Número do Pedido</p>
            <p className="mt-1 text-4xl font-bold text-white">{orderNumber}</p>
          </div>

          {/* Valor Total */}
          <div className="mb-6 flex items-center justify-between rounded-xl bg-gray-50 p-4">
            <span className="text-gray-600">Valor Total</span>
            <span className="text-2xl font-bold text-green-600">
              R$ {total.toFixed(2).replace(".", ",")}
            </span>
          </div>

          {/* Status do Pedido */}
          <div className="mb-6">
            <h3 className="mb-4 font-semibold text-gray-800">
              {isDineIn ? "🏪 Retirar na Loja" : "🚚 Delivery"}
            </h3>

            <div className="space-y-4">
              {/* Step 1 */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-3"
              >
                <div
                  className={`mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                    currentStep >= 1
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">Pedido Recebido</p>
                  <p className="text-sm text-gray-500">
                    Seu pedido foi confirmado com sucesso
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-start gap-3"
              >
                <div
                  className={`mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                    currentStep >= 2
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {currentStep >= 2 ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <Clock className="h-5 w-5" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">Em Preparação</p>
                  <p className="text-sm text-gray-500">
                    Estamos preparando seu pedido com carinho
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-start gap-3"
              >
                <div
                  className={`mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                    currentStep >= 3
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {currentStep >= 3 ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : isDineIn ? (
                    <ShoppingBag className="h-5 w-5" />
                  ) : (
                    <Truck className="h-5 w-5" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">
                    {isDineIn ? "Pronto para Retirada" : "Saiu para Entrega"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {isDineIn
                      ? "Aguarde a senha e retire no balcão"
                      : "O entregador está a caminho"}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mensagem Especial */}
          {currentStep >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 rounded-xl bg-yellow-50 p-4 text-center"
            >
              <p className="text-sm font-medium text-yellow-800">
                {isDineIn ? (
                  <>
                    🎫 <strong>Senha: #{orderNumber.slice(-3)}</strong>
                    <br />
                    Fique atento ao painel e retire seu pedido no balcão!
                  </>
                ) : (
                  <>
                    🚗 Tempo estimado de entrega: <strong>25-35 min</strong>
                    <br />
                    Você pode acompanhar o entregador em tempo real!
                  </>
                )}
              </p>
            </motion.div>
          )}

          {/* Botões */}
          <div className="space-y-3">
            <Button
              onClick={() => router.push(`/${slug}/orders`)}
              className="w-full rounded-full bg-red-600 py-6 text-base font-semibold hover:bg-red-700"
            >
              Ver Meus Pedidos 📋
            </Button>
            <Button
              onClick={() => router.push(`/${slug}/menu?consumptionMethod=${consumptionMethod}`)}
              variant="outline"
              className="w-full rounded-full py-6 text-base font-semibold"
            >
              Fazer Novo Pedido 🍔
            </Button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-center text-sm text-gray-600"
        >
          Dúvidas? Entre em contato conosco! 📞
        </motion.p>
      </motion.div>
    </div>
  );
}
