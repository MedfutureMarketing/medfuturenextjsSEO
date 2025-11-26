// app/page.tsx
import LocumJobCard from '@/components/JobBoard/JobCards/LocumCard';
import LocumJobDescription from '@/components/JobBoard/JobDescription/LocumJobDescription';


export default function JobBoardLayout() {
    return (
        <div className="min-h-screen mt-12 ">
            <div className=" mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] xl:grid-cols-[520px_1fr] gap-4">
                   
                    <div className=' overflow-y-scroll custom-scrollbar px-2'>
                        <div className="rounded-lg">
                            <div className="space-y-4">
                                <LocumJobCard />
                                <LocumJobCard />
                                <LocumJobCard />
                                <LocumJobCard />
                                <LocumJobCard />
                                 <LocumJobCard />
                                <LocumJobCard />
                                <LocumJobCard />
                                <LocumJobCard />
                                <LocumJobCard />
                                
                                
                                {/* show only 20 - 30 cards  */}
                            </div>
                        </div>
                    </div>

                 
                    <div>
                        <div className="bg-white rounded-lg shadow-sm p-0 sticky top-6">
                            <LocumJobDescription />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}