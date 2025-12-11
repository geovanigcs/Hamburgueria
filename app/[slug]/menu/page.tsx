import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";

import { db } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CartButton } from "./components/cart-button";

interface RestaurantMenuPageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ consumptionMethod?: string }>;
}

const RestaurantMenuPage = async ({ params, searchParams }: RestaurantMenuPageProps) => {
    const { slug } = await params;
    const { consumptionMethod } = await searchParams;

    const restaurant = await db.restaurant.findUnique({
        where: { slug },
        include: {
            menuCategories: {
                include: {
                    products: true,
                },
            },
        },
    });

    if (!restaurant) {
        return notFound();
    }

    return (
        <div className="flex min-h-screen flex-col">
            {/* Header with image */}
            <div className="relative h-[200px] w-full">
                <Image
                    src={restaurant.coverImageUrl}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                />
                <button className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <Link href={`/${slug}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </button>
                <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="9" y="9" width="13" height="13" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Restaurant info */}
            <div className="space-y-4 p-4 pb-2">
                <div className="flex items-start gap-3">
                    <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                            src={restaurant.avatarImageUrl}
                            alt={restaurant.name}
                            fill
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-lg font-semibold">{restaurant.name.toUpperCase()}</h1>
                        <p className="text-sm text-gray-500">Fast Food</p>
                    </div>
                    <div className="flex items-center gap-1 rounded-md bg-yellow-400 px-2 py-1">
                        <span className="text-sm">⭐</span>
                        <span className="text-sm font-semibold">5.0</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-green-600">
                    <Clock className="h-4 w-4" />
                    <span>Aberto</span>
                </div>
            </div>

            {/* Category tabs */}
            <ScrollArea className="w-full border-b">
                <div className="flex gap-2 px-4 pb-2">
                    {restaurant.menuCategories.map((category) => (
                        <Button
                            key={category.id}
                            variant={category.name === "Lançamentos" ? "default" : "ghost"}
                            className="flex-shrink-0 rounded-full"
                        >
                            {category.name}
                        </Button>
                    ))}
                </div>
            </ScrollArea>

            {/* Products section */}
            <div className="flex-1 space-y-4 p-4">
                <h2 className="text-lg font-semibold">Lançamentos</h2>
                {restaurant.menuCategories.map((category) =>
                    category.products.map((product) => (
                        <Link key={product.id} href={`/${slug}/menu/${product.id}?consumptionMethod=${consumptionMethod}`}>
                            <Card className="overflow-hidden">
                                <CardContent className="flex gap-4 p-0">
                                    <div className="flex flex-1 flex-col justify-between p-4">
                                        <div className="space-y-1">
                                            <h3 className="font-semibold leading-tight">{product.name}</h3>
                                            <p className="line-clamp-2 text-xs text-gray-500">
                                                {product.description}
                                            </p>
                                        </div>
                                        <p className="mt-2 font-semibold">
                                            R$ {product.price.toFixed(2).replace(".", ",")}
                                        </p>
                                    </div>
                                    <div className="relative h-[120px] w-[120px] flex-shrink-0">
                                        <Image
                                            src={product.imageUrl}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))
                )}
            </div>

            {/* Bottom cart bar */}
            <div className="sticky bottom-0 border-t bg-white p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Total dos pedidos</p>
                        <p className="text-lg font-semibold">R$ 39,90 <span className="text-sm text-gray-500">/ 1 item</span></p>
                    </div>
                    <CartButton />
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenuPage;