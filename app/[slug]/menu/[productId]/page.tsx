import { ChefHat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";

interface ProductPageProps {
    params: Promise<{ slug: string; productId: string }>;
    searchParams: Promise<{ consumptionMethod?: string }>;
}

const ProductPage = async ({ params, searchParams }: ProductPageProps) => {
    const { slug, productId } = await params;
    const { consumptionMethod } = await searchParams;

    const product = await db.product.findUnique({
        where: { id: productId },
        include: {
            restaurant: true,
        },
    });

    if (!product) {
        return notFound();
    }

    return (
        <div className="flex min-h-screen flex-col">
            {/* Product image */}
            <div className="relative h-[300px] w-full">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                />
                <button className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <Link href={`/${slug}/menu?consumptionMethod=${consumptionMethod}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </button>
            </div>

            {/* Product details */}
            <div className="flex-1 space-y-6 rounded-t-3xl bg-white p-6 -mt-6 relative">
                <div className="flex items-start gap-3">
                    <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                            src={product.restaurant.avatarImageUrl}
                            alt={product.restaurant.name}
                            fill
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-500">{product.restaurant.name}</p>
                        <h1 className="text-xl font-semibold">{product.name}</h1>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <p className="text-2xl font-semibold">
                        R$ {product.price.toFixed(2).replace(".", ",")}
                    </p>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Button>
                        <span className="w-8 text-center">1</span>
                        <Button size="icon" className="h-8 w-8 rounded-full bg-red-600 hover:bg-red-700">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Button>
                    </div>
                </div>

                {/* About section */}
                <div className="space-y-2">
                    <h2 className="font-semibold">Sobre</h2>
                    <p className="text-sm text-gray-600">{product.description}</p>
                </div>

                {/* Ingredients section */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <ChefHat className="h-5 w-5" />
                        <h2 className="font-semibold">Ingredientes</h2>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600">
                        {product.ingredients.map((ingredient, index) => (
                            <li key={index}>• {ingredient}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom add to cart button */}
            <div className="sticky bottom-0 border-t bg-white p-4">
                <Button className="w-full rounded-full bg-yellow-400 text-black hover:bg-yellow-500">
                    Adicionar à Sacola
                </Button>
            </div>
        </div>
    );
};

export default ProductPage;
