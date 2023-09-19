import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div className="flex flex-col">
            <div className="w-full aspect-square">
              <div className="aspect-square relative w-full h-full overflow-hidden sm:rounded-lg">
                <Skeleton className="w-full h-full" />
              </div>
            </div>

            <div className="mx-auto w-full hidden mt-6 max-w-2xl sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-6">
                <div className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
                  <div className="rounded-md absolute w-full h-full inset-0 overflow-hidden aspect-square">
                    <Skeleton className="w-full h-full" />
                  </div>
                </div>

                <div className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
                  <div className="rounded-md absolute w-full h-full inset-0 overflow-hidden aspect-square">
                    <Skeleton className="w-full h-full" />
                  </div>
                </div>

                <div className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
                  <div className="rounded-md absolute w-full h-full inset-0 overflow-hidden aspect-square">
                    <Skeleton className="w-full h-full" />
                  </div>
                </div>

                <div className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
                  <div className="rounded-md absolute w-full h-full inset-0 overflow-hidden aspect-square">
                    <Skeleton className="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Skeleton className="w-1/2 h-8" />
            <div className="mt-3 flex items-end justify-between">
              <Skeleton className="w-1/2 h-8" />
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
              <div className="flex items-center gap-x-4">
                <Skeleton className="w-full h-6" />
              </div>
              <div className="flex items-center gap-x-4">
                <Skeleton className="w-1/2 h-6" />
              </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
              <Skeleton className="w-1/4 h-10" />
            </div>
          </div>
        </div>
        <hr className="my-10" />
      </div>
    </Container>
  );
};

export default Loading;
