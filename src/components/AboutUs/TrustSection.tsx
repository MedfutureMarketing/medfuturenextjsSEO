import Image from "next/image";
import Healthcareprover from "@/assets/homeico/healthcareproviders.png"
import healthcareprofessionals from "@/assets/homeico/healthcareprofessionals.png"

export default function TrustSection() {
    return (
        <section className="bg-white py-[140px]">
            <div className="mx-auto max-w-7xl space-y-24 px-6">
                {/* Section 1 */}
                <div className="grid items-center gap-12 md:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-[477px] w-[548px] overflow-hidden rounded-lg">
                        <Image
                            src={Healthcareprover}
                            alt="Healthcare consultation"
                            fill
                            className="object-cover grayscale"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h3 className="text-[36px] font-bold text-[#074CA4] ">
                            Why
                        </h3>
                        <h2 className="mt-0 text-[36px] font-[500]   leading-tight text-gray-900 w-md ">
                            Healthcare Providers{" "}
                            <span className="text-[#074CA4] text-[48px]  font-[700]">Trust </span> <span className="font-bold">Medfuture</span>
                        </h2>

                        <p className="mt-4 text-gray-600">
                            Healthcare organisations choose Medfuture because we understand
                            the real challenges of workforce shortages, patient demand, and
                            operational pressure. Our division-based recruitment model
                            ensures that each employer works with specialists who know their
                            field inside out.
                        </p>

                        <ul className="mt-6 space-y-3 text-gray-700">
                            <li>• Deep understanding of the medical workforce</li>
                            <li>• Fast and compliant locum coverage</li>
                            <li>• Nationwide and international talent networks</li>
                            <li>• Dedicated recruitment consultants for each profession</li>
                            <li>• Consistent communication and support</li>
                            <li>• End-to-end credentialing and compliance handling</li>
                        </ul>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="grid items-center gap-12 md:grid-cols-2">
                    {/* Content */}
                    <div>
                      <h3 className="text-[36px] font-bold text-[#074CA4] ">
                            Why
                        </h3>
                        <h2 className="mt-0 text-[36px] font-[500]   leading-tight text-gray-900 w-md ">
                           Healthcare Professionals{" "}
                            <span className="text-[#074CA4] text-[48px]  font-[700]">Prefer Working </span> <span className="font-bold text-[36px]">With Medfuture</span>
                        </h2>

                        <p className="mt-4 text-gray-600">
                            We support healthcare professionals at every step—whether
                            you’re exploring locum flexibility, seeking a stable permanent
                            position, or planning a major career move across states or
                            countries. Our consultants work closely with you to understand
                            your goals, availability, and lifestyle preferences.
                        </p>

                        <ul className="mt-6 space-y-3 text-gray-700">
                            <li>• Access to nationwide locum & permanent roles</li>
                            <li>• Guidance on career development and contracts</li>
                            <li>• Immigration and relocation support</li>
                            <li>• Weekly job alerts and tailored opportunities</li>
                            <li>• Assistance with AHPRA, college, and compliance requirements</li>
                            <li>• Friendly, responsive consultants who genuinely care</li>
                        </ul>
                    </div>

                    {/* Image */}
                    <div className="relative h-[477px] w-[548px] overflow-hidden rounded-lg">
                        <Image
                            src={healthcareprofessionals}
                            alt="Professional handshake"
                            fill
                            className="object-cover grayscale"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
