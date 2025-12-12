"use client";

import { CartSheet } from "@/components/cart-sheet";
import { Button } from "@/components/ui/button";

interface CartButtonProps {
    consumptionMethod?: "DINE_IN" | "TAKEAWAY";
}

export function CartButton({ consumptionMethod = "DINE_IN" }: CartButtonProps) {
    return (
        <CartSheet
            consumptionMethod={consumptionMethod}
            trigger={
                <Button className="rounded-full bg-red-600 hover:bg-red-700">
                    Ver Sacola
                </Button>
            }
        />
    );
}
