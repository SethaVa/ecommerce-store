import Container from "@/components/ui/container";
import {Skeleton} from "@/components/ui/skeleton";

const Loading = () => {
    const numberLoadingCard = [1,2,3,4,5,6]
  return (
    <Container>
      <div className="w-full h-full p-8">
        <div className="rounded-xl overflow-hidden pb-10">
            <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
        </div>
        <div className="space-y-4">
            <h3 className="font-bold text-3xl">Featured Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    numberLoadingCard.map((num: any) => (
                        <div key={num} className="group cursor-pointer border rounded-lg p-3 space-y-3">
                            <div className="rounded-lg relative bg-gray-100 aspect-square">
                                <Skeleton className="aspect-square rounded-xl" />
                            </div>
                         
                            <div className="space-y-2">
                                <Skeleton className="w-[250px] h-5" />
                                <Skeleton className="w-[200px] h-5" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

      </div>
    </Container>
  );
}
 
export default Loading;