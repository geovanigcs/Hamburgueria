"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/cart-context";

interface CartSheetProps {
    trigger?: React.ReactNode;
    consumptionMethod?: "DINE_IN" | "TAKEAWAY";
}

export function CartSheet({ trigger, consumptionMethod = "DINE_IN" }: CartSheetProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { cartItems, updateQuantity, removeItem, clearCart, subtotal, total } = useCart();
    const [isOpen, setIsOpen] = useState(false);
    const [showCheckoutDialog, setShowCheckoutDialog] = useState(false);
    const [customerName, setCustomerName] = useState("");
    const [customerCPF, setCustomerCPF] = useState("");

    const discount = 0;
    const slug = searchParams.get("slug") || window.location.pathname.split("/")[1] || "gigios";

    const handleCheckout = () => {
        setShowCheckoutDialog(true);
    };

    const handleFinalize = () => {
        if (customerName && customerCPF) {
            // Gerar número do pedido
            const orderNumber = `GG${Date.now().toString().slice(-6)}`;

            // Limpar carrinho
            clearCart();
            setShowCheckoutDialog(false);
            setIsOpen(false);

            // Redirecionar para página de confirmação
            const params = new URLSearchParams({
                orderNumber,
                customerName,
                total: total.toFixed(2),
                consumptionMethod,
                slug,
            });

            router.push(`/${slug}/order-confirmation?${params.toString()}`);
            
            setCustomerName("");
            setCustomerCPF("");
        }
    };

    return (
        <>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    {trigger || <Button>Ver Sacola</Button>}
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-md">
                    <SheetHeader>
                        <div className="flex items-center justify-between">
                            <SheetTitle>Sacola</SheetTitle>
                            {cartItems.length > 0 && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={clearCart}
                                    className="text-sm text-red-600 hover:text-red-700 hover:bg-red-50"
                                >
                                    Limpar tudo
                                </Button>
                            )}
                        </div>
                    </SheetHeader>

                    {cartItems.length === 0 ? (
                        <div className="flex h-full items-center justify-center">
                            <p className="text-gray-500">Sua sacola está vazia</p>
                        </div>
                    ) : (
                        <div className="flex h-full flex-col">
                            {/* Cart items */}
                            <div className="flex-1 space-y-4 overflow-y-auto py-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-3">
                                        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                                            <Image
                                                src={item.imageUrl}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <h3 className="text-sm font-semibold leading-tight">
                                                        {item.name}
                                                    </h3>
                                                    <p className="mt-1 text-sm font-semibold">
                                                        R$ {item.price.toFixed(2).replace(".", ",")}
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-gray-400 hover:text-gray-600"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-7 w-7 rounded-full"
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                >
                                                    <svg
                                                        width="16"
                                                        height="16"
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
                                                </Button>
                                                <span className="w-6 text-center text-sm">{item.quantity}</span>
                                                <Button
                                                    size="icon"
                                                    className="h-7 w-7 rounded-full bg-red-600 hover:bg-red-700"
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                >
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            d="M9 18l6-6-6-6"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Summary */}
                            <div className="space-y-4 border-t pt-4">
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Subtotal</span>
                                        <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Descontos</span>
                                        <span>R$ {discount.toFixed(2).replace(".", ",")}</span>
                                    </div>
                                    <div className="flex justify-between text-base font-semibold">
                                        <span>Total</span>
                                        <span>R$ {total.toFixed(2).replace(".", ",")}</span>
                                    </div>
                                </div>

                                <Button
                                    className="w-full rounded-full bg-yellow-400 text-black hover:bg-yellow-500"
                                    onClick={handleCheckout}
                                >
                                    Finalizar Pedido
                                </Button>
                            </div>
                        </div>
                    )}
                </SheetContent>
            </Sheet>

            {/* Checkout Dialog */}
            {showCheckoutDialog && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg">
                        <h2 className="mb-2 text-center text-xl font-semibold">Quase lá!</h2>
                        <p className="mb-6 text-center text-sm text-gray-600">
                            Para finalizar o seu pedido, insira os seus dados abaixo.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <label className="mb-2 block text-sm font-medium">Seu nome</label>
                                <Input
                                    placeholder="Digite seu nome"
                                    value={customerName}
                                    onChange={(e) => setCustomerName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium">Seu CPF</label>
                                <Input
                                    placeholder="Digite seu CPF"
                                    value={customerCPF}
                                    onChange={(e) => setCustomerCPF(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex gap-2">
                            <Button
                                variant="ghost"
                                className="flex-1"
                                onClick={() => setShowCheckoutDialog(false)}
                            >
                                Cancelar
                            </Button>
                            <Button
                                className="flex-1 bg-red-600 hover:bg-red-700"
                                onClick={handleFinalize}
                            >
                                Finalizar
                            </Button>
                        </div>
                    </div>
                </div>
            )}


        </>
    );
}
