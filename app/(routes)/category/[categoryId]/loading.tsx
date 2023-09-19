import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full p-8">
        <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 mt-8 h-full">
          <div className="hidden lg:block">
            <div>
              <Skeleton className="w-full h-8" />
              <hr className="my-4" />
              <Skeleton className="w-1/2 h-8" />
            </div>

            <div className="mt-6">
              <Skeleton className="w-full h-8" />
              <hr className="my-4" />
              <Skeleton className="w-1/2 h-8" />
            </div>
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
              <Skeleton className="aspect-square rounded-xl" />
          </div>
        </div>
      </div>
    </Container>
  );
}
 
export default Loading;