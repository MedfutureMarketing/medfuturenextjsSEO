// app/page.tsx
import PermanentCard from '@/components/JobBoard/JobCards/PermanentCard';
import JobDescription from '@/components/JobBoard/JobDescription/JobDescription';


export default function JobBoardLayout() {
    return (
        <div className="min-h-screen mt-12 mb-16 ">
            <div className=" mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[360px_1fr]  gap-4">
                    {/* xl:grid-cols-[520px_1fr] */}
                    {/* Left Side - Different widths at different breakpoints */}
                    <div className='  lg:px-1 px-2'>
                        {/* overflow-y-scroll custom-scrollbar */}
                        <div className="rounded-lg">
                            <div className="space-y-4">
                                <PermanentCard />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Always takes remaining space */}
                    <div>
                        <div className="bg-white rounded-lg  mt-[24px] shadow-sm p-0 sticky top-6">
                            <JobDescription />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}