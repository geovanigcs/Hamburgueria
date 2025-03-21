import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ConsumptionMethodOption from "./components/consumption-method-option"

interface RestaurantPageProps {
    params: Promise<{ slug: string }>
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
    const { slug } = await params

    const restaurant = await db.restaurant.findUnique({ where: { slug } });
    if (!restaurant) {
        return notFound()
    }
    return (
        <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
            <div className="flex flex-col items-center gap-2">
                <Image src="/logo.png" alt={restaurant.name} width={82} height={82} />
                <h2 className="font-semibold">Gigio's Burguer</h2>
            </div>
            <div className="pt-24 text-center space-y-2">
                <h3 className="text-2xl font-semibold">
                    Seja bem-vindo!
                </h3>
                <p className="opacity-55">
                    Escolha como prefere aproveitar sua refeição. Estamos oferecendo praticidade e sabor em cada detalhe!
                </p>
                <div className="grid pt-14 gap-4 grid-cols-2">
                    <ConsumptionMethodOption
                    slug={slug}
                    option="DINE_IN"
                    buttonText="Para comer aqui"
                    imageAlt="Comer aqui"
                    imageUrl="/dine_in.png" />
                    <ConsumptionMethodOption
                    slug={slug}
                    option="TAKEAWAY"
                    buttonText="Para levar"
                    imageAlt="Para levar"
                    imageUrl="/take_away.png" />
                </div>
            </div>

        </div>
    )
}

export default RestaurantPage;