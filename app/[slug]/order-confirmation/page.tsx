"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { OrderConfirmation } from "@/components/order-confirmation";

function OrderConfirmationContent() {
  const searchParams = useSearchParams();

  const orderNumber = searchParams.get("orderNumber") || "GG000000";
  const customerName = searchParams.get("customerName") || "Cliente";
  const total = parseFloat(searchParams.get("total") || "0");
  const consumptionMethod = (searchParams.get("consumptionMethod") ||
    "DINE_IN") as "DINE_IN" | "TAKEAWAY";

  return (
    <OrderConfirmation
      orderNumber={orderNumber}
      customerName={customerName}
      total={total}
      consumptionMethod={consumptionMethod}
    />
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-red-600 border-t-transparent" />
            <p className="mt-4 text-gray-600">Carregando...</p>
          </div>
        </div>
      }
    >
      <OrderConfirmationContent />
    </Suspense>
  );
}
