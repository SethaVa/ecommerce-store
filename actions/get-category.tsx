import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`, {
    next: {
      revalidate: process.env.NEXT_REVALIDATE
        ? Number(process.env.NEXT_REVALIDATE)
        : 3600,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default getCategory;
