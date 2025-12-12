import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import { MenuContent } from "./components/menu-content";

interface RestaurantMenuPageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ consumptionMethod?: string }>;
}

const RestaurantMenuPage = async ({ params, searchParams }: RestaurantMenuPageProps) => {
    const { slug } = await params;
    const { consumptionMethod } = await searchParams;

    const restaurant = await db.restaurant.findUnique({
        where: { slug },
    });

    if (!restaurant) {
        return notFound();
    }

    return (
        <MenuContent
            slug={slug}
            consumptionMethod={consumptionMethod}
            restaurant={restaurant}
        />
    );
};

export default RestaurantMenuPage;
