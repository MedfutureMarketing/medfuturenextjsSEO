// app/page.tsx
import InternationalCard from '@/components/JobBoard/JobCards/InterntionalCard';
import JobDescription from '@/components/JobBoard/JobDescription/IntJobDescription';


export default function JobBoardLayout() {
    return (
        <div className="min-h-screen mt-12 mb-36">
            <div className=" mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[360px_1fr]  gap-4">
                  
                    <div className='  px-2'>
                        <div className="rounded-lg">
                            <div className="space-y-4">
                                <InternationalCard />
                            </div>
                        </div>
                    </div>

                    
                    <div>
                        <div className="bg-white rounded-lg shadow-sm p-0 mt-[38px] sticky top-6">
                            <JobDescription />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}