"use client";

import { CartSheet } from "@/components/cart-sheet";
import { Button } from "@/components/ui/button";

export function CartButton() {
    return (
        <CartSheet
            trigger={
                <Button className="rounded-full bg-red-600 hover:bg-red-700">
                    Ver Sacola
                </Button>
            }
        />
    );
}
