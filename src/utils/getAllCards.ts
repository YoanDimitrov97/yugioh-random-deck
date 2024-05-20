export interface ICardProps {
    name: string;
    type: string;
    desc: string;
    race: string;
    archetype: string;
    frameType:string;
    card_image: string;
}

export const getAllCards = async (setAllCards) => {
    try {
        const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
        const data = await res.json();
        const dataFilter:ICardProps[] = data.data.filter(card => !["skill", "token"].includes(card.frameType))
        setAllCards(dataFilter);
    } catch (error) {
        console.log(error);
    }
};