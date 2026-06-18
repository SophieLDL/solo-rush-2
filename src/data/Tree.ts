export interface Tree {
    id: number;
    name: string;
    scientificName: string;
    flowerColor: string;
    level: number;
    xp: number;
    xpToNextLevel: number;
    growthStage: number;
    rarity: "Commun" | "Rare" | "Épique" | "Légendaire";
    image: string;
}