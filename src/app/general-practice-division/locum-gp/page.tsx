

import Locumhero from '@/components/Gpdivision/Locumgp/Locumhero';
import Locumcounter from '@/components/Gpdivision/Locumgp/LocumCounter';
import WhyLocumMedfuture from '@/components/Gpdivision/Locumgp/Whymedfuturelocum';
import ConsultantsPage from '@/components/Gpdivision/Fracgp/Consultant';
import FAQ from '@/components/FAQ/Faq';
import CTA from '@/components/Home/CtaHome';
export default function LocumGPPage() {
    return (
        <main className="">
            <Locumhero />
            <Locumcounter />
            <WhyLocumMedfuture/>

            {/* here comes locum card */}

            <ConsultantsPage />
            <FAQ />
            <CTA />
        </main>
    );
}