import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/lib/prisma";

interface OrdersPageProps {
    params: Promise<{ slug: string }>;
}

const OrdersPage = async ({ params }: OrdersPageProps) => {
    const { slug } = await params;

    const restaurant = await db.restaurant.findUnique({
        where: { slug },
        include: {
            orders: {
                include: {
                    orderProducts: {
                        include: {
                            product: true,
                        },
                    },
                },
                orderBy: {
                    createdAt: "desc",
                },
            },
        },
    });

    if (!restaurant) {
        return notFound();
    }

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            {/* Header */}
            <div className="flex items-center gap-3 border-b bg-white p-4">
                <button className="flex h-10 w-10 items-center justify-center">
                    <Link href={`/${slug}/menu`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </button>
                <div className="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="9" y="9" width="13" height="13" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h1 className="text-lg font-semibold">Meus Pedidos</h1>
                </div>
            </div>

            {/* Orders list */}
            <div className="flex-1 space-y-4 p-4">
                {restaurant.orders.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <p className="text-gray-500">Você ainda não fez nenhum pedido</p>
                    </div>
                ) : (
                    restaurant.orders.map((order) => (
                        <Card key={order.id}>
                            <CardContent className="p-4">
                                <div className="space-y-3">
                                    {/* Order status badge */}
                                    <div className="flex items-center justify-between">
                                        <span
                                            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                                                order.status === "IN_PREPARATION"
                                                    ? "bg-yellow-100 text-yellow-800"
                                                    : order.status === "FINISHED"
                                                      ? "bg-green-100 text-green-800"
                                                      : "bg-gray-100 text-gray-800"
                                            }`}
                                        >
                                            {order.status === "IN_PREPARATION"
                                                ? "Em preparo"
                                                : order.status === "FINISHED"
                                                  ? "Finalizado"
                                                  : "Pendente"}
                                        </span>
                                    </div>

                                    {/* Restaurant info */}
                                    <div className="flex items-center gap-2">
                                        <div className="relative h-8 w-8">
                                            <Image
                                                src={restaurant.avatarImageUrl}
                                                alt={restaurant.name}
                                                fill
                                                className="rounded-lg object-cover"
                                            />
                                        </div>
                                        <span className="font-semibold">{restaurant.name}</span>
                                    </div>

                                    {/* Order items */}
                                    <div className="space-y-1">
                                        {order.orderProducts.map((orderProduct) => (
                                            <div key={orderProduct.id} className="flex items-center gap-2 text-sm text-gray-600">
                                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-xs">
                                                    {orderProduct.quantity}
                                                </span>
                                                <span>{orderProduct.product.name}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Order total and actions */}
                                    <div className="flex items-center justify-between border-t pt-3">
                                        <span className="font-semibold">R$ {order.total.toFixed(2).replace(".", ",")}</span>
                                        <Button variant="ghost" className="text-red-600 hover:text-red-700">
                                            Adicionar à Sacola
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
};

export default OrdersPage;
