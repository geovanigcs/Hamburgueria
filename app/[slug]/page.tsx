import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import { WelcomeScreen } from "./components/welcome-screen";

interface RestaurantPageProps {
    params: Promise<{ slug: string }>
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
    const { slug } = await params

    const restaurant = await db.restaurant.findUnique({ where: { slug } });
    if (!restaurant) {
        return notFound()
    }
    
    return <WelcomeScreen slug={slug} restaurantName={restaurant.name} />;
}

export default RestaurantPage;