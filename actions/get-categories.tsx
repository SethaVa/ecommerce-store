import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const data = await fetch(URL, {
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

export default getCategories;
