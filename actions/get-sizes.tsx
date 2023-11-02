import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL, {
    next: {
      revalidate: process.env.NEXT_REVALIDATE
        ? Number(process.env.NEXT_REVALIDATE)
        : 3600,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  console.log(res);

  return res.json();
};

export default getSizes;
