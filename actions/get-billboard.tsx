import { Billboard, Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (billboardId: string): Promise<Billboard> => {
  const data = await fetch(`${URL}/${billboardId}`, {
    next: {
      revalidate: process.env.NEXT_REVALIDATE
        ? Number(process.env.NEXT_REVALIDATE)
        : 3600,
    },
  });

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};

export default getBillboard;
