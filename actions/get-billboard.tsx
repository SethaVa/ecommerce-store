import { Billboard, Category } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (billboardId: string): Promise<Billboard> => {
    const data = await fetch(`${URL}/${billboardId}`)

    if (!data.ok) {
        throw new Error('Failed to fetch data')
      }

    return data.json();
};

export default getBillboard;