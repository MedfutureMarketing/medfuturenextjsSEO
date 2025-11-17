// app/page.tsx
import PermanentCard from '@/components/JobBoard/JobCards/PermanentCard';
import JobDescription from '@/components/JobBoard/JobDescription/JobDescription';


export default function JobBoardLayout() {
    return (
        <div className="min-h-screen mt-12 ">
            <div className=" mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] xl:grid-cols-[520px_1fr] gap-4">
                    {/* Left Side - Different widths at different breakpoints */}
                    <div className=' overflow-y-scroll custom-scrollbar px-2'>
                        <div className="rounded-lg">
                            <div className="space-y-4">
                                <PermanentCard />
                                <PermanentCard />
                                <PermanentCard />
                                <PermanentCard />
                                <PermanentCard />
                                 <PermanentCard />
                                <PermanentCard />
                                <PermanentCard />
                                <PermanentCard />
                                <PermanentCard />
                                <PermanentCard />
                                <PermanentCard />
                                 <PermanentCard />
                                <PermanentCard />
                                <PermanentCard />
                                <PermanentCard />
                                <PermanentCard />
                                
                                
                                
                                {/* show only 10 cards  */}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Always takes remaining space */}
                    <div>
                        <div className="bg-white rounded-lg shadow-sm p-0 sticky top-6">
                            <JobDescription />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}