import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import { Suspense } from "react";
import Loading from "./loading";
import { Skeleton } from "@/components/ui/skeleton";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("e58e2169-b7ca-48a8-bc05-d86b8f0f18df");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Suspense fallback={<Loading />}>
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </Suspense>
      </div>
    </Container>
  );
};

export default HomePage;
