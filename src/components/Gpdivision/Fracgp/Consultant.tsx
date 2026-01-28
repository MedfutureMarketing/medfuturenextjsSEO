

import Image, { StaticImageData } from "next/image";

// Consultant types
interface Consultant {
    id: string;
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
}

interface ConsultantGroup {
    consultants: Consultant[];
    centerImages: StaticImageData[];
}

// Import images directly from assets
import testimony1 from "@/assets/Divisionimages/testimony.png";
import testimony2 from "@/assets/Divisionimages/testimony2.png";
import testimony3 from "@/assets/Divisionimages/testimony3.png";

import testimony4 from "@/assets/Divisionimages/testimony4.png";




// Simulate SSR data fetching
async function getConsultantData(): Promise<ConsultantGroup> {
    return {
        consultants: [
            {
                id: "1",
                name: "Sree Ranju",
                title: "Chief Manager - GP Metro and PLGP Unit",
                email: "sree@medifuture.com.au",
                phone: "+61 489 071 766",
                location: "New South Wales",
            },
            {
                id: "2",
                name: "Christopher Chris",
                title: "Recruitment Business Consultant",
                email: "christopher@themedifuture.com.au",
                phone: "+61 482 090 315",
                location: "Victoria",
            },
            {
                id: "3",
                name: "Ridma Gomez",
                title: "Division Manager - AHP",
                email: "tamy@themedifuture.com.au",
                phone: "+61 123 456 789",
                location: "Queensland",
            },
        ],
        centerImages: [testimony1, testimony2, testimony3, testimony4],
    };
}

// SSR Page Component
export default async function ConsultantsPage() {
    const data = await getConsultantData();

    return (
        <div className="full-width-section bg-white lg:mt-[214px] mt-5">
            {/* Header */}
            <div className="px-6 inner-width-section lg:px-12 mb-10 lg:mb-[52px] ">
                <p className="text-xs lg:text-[14px] text-[#074CA4] font-medium mb-2">
                    Meet Our Consultants
                </p>
                <h1 className="text-2xl lg:text-[30px] font-bold text-[#0F172A] mb-[52px]">
                    Your Dedicated Specialist GP Recruitment Experts
                </h1>
            </div>

            {/* Main Content */}
            <div className="px-6 inner-width-section   py-0 ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-18">
                    {/* Left Column - Consultants */}
                    <div className="space-y-8">
                        {data.consultants.map((consultant) => (
                            <div key={consultant.id}>
                                <h3 className="text-[16px] font-bold text-gray-900 mb-0">
                                    {consultant.name}
                                </h3>
                                <p className="text-[14px] text-[#040D48] mb-2">
                                    {consultant.title}
                                </p>

                                {/* Contact Info */}
                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-3">


                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.849 16.042H3.98437C3.16302 16.042 2.5 15.379 2.5 14.5576V5.65137C2.5 4.83001 3.16302 4.16699 3.98437 4.16699H16.849C17.6703 4.16699 18.3333 4.83001 18.3333 5.65137V14.5576C18.3333 15.379 17.6703 16.042 16.849 16.042ZM3.98437 5.15658C3.70729 5.15658 3.48958 5.37428 3.48958 5.65137V14.5576C3.48958 14.8347 3.70729 15.0524 3.98437 15.0524H16.849C17.126 15.0524 17.3437 14.8347 17.3437 14.5576V5.65137C17.3437 5.37428 17.126 5.15658 16.849 5.15658H3.98437Z" fill="#074CA4" />
                                            <path d="M10.4166 12.0436C9.72385 12.0436 9.09051 11.7666 8.61551 11.2619L3.4202 5.73999C3.23218 5.54208 3.24208 5.22541 3.43999 5.03739C3.63791 4.84937 3.95458 4.85926 4.1426 5.05718L9.33791 10.5791C9.90197 11.1827 10.9311 11.1827 11.4952 10.5791L16.6905 5.06708C16.8785 4.86916 17.1952 4.85926 17.3931 5.04728C17.591 5.23531 17.6009 5.55197 17.4129 5.74989L12.2176 11.2718C11.7426 11.7765 11.1093 12.0535 10.4166 12.0535V12.0436Z" fill="#074CA4" />
                                        </svg>

                                        <a
                                            href={`mailto:${consultant.email}`}
                                            className="text-[14px] text-[#4A5565] hover:text-blue-600"
                                        >
                                            {consultant.email}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">

                                        <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.28424 4.8053C1.04549 3.2328 2.15424 1.8203 3.84799 1.3028C4.14857 1.21152 4.47261 1.23797 4.7544 1.37678C5.0362 1.51559 5.25466 1.75637 5.36549 2.0503L5.90924 3.5003C5.99678 3.73356 6.0126 3.98767 5.95469 4.22999C5.89679 4.47232 5.76778 4.69181 5.58424 4.8603L3.96674 6.34155C3.88691 6.41464 3.82743 6.50721 3.79413 6.6102C3.76082 6.71318 3.75483 6.82305 3.77674 6.92905L3.79174 6.99405L3.83049 7.15655C4.03215 7.94594 4.33863 8.70477 4.74174 9.4128C5.18189 10.1646 5.72743 10.8494 6.36174 11.4465L6.41174 11.4915C6.49249 11.5632 6.59044 11.6128 6.69603 11.6353C6.80161 11.6579 6.91125 11.6527 7.01424 11.6203L9.10549 10.9615C9.34316 10.8869 9.5977 10.885 9.83645 10.9561C10.0752 11.0271 10.2873 11.1679 10.4455 11.3603L11.4355 12.5615C11.848 13.0615 11.798 13.7965 11.3242 14.2378C10.028 15.4465 8.24549 15.694 7.00549 14.6978C5.48489 13.4724 4.20344 11.9769 3.22549 10.2865C2.23798 8.59838 1.58013 6.73857 1.28424 4.8053ZM5.08674 7.01155L6.42674 5.78155C6.79404 5.44472 7.05228 5.0058 7.16833 4.52114C7.28437 4.03648 7.25291 3.5282 7.07799 3.06155L6.53549 1.61155C6.31293 1.02001 5.87355 0.535374 5.30659 0.256075C4.73964 -0.0232246 4.08762 -0.07624 3.48299 0.107797C1.37924 0.751547 -0.309507 2.6378 0.0479926 4.99405C0.297993 6.63905 0.874243 8.73155 2.14549 10.9165C3.20063 12.7392 4.58293 14.3516 6.22299 15.6728C8.08299 17.1665 10.5655 16.6565 12.178 15.154C12.6394 14.7244 12.9194 14.135 12.961 13.5059C13.0026 12.8769 12.8026 12.2556 12.4017 11.769L11.4117 10.5665C11.095 10.1821 10.6707 9.90111 10.1932 9.75946C9.71575 9.61782 9.20683 9.62203 8.73174 9.77155L6.99549 10.3178C6.54717 9.85562 6.1545 9.34254 5.82549 8.78905C5.50801 8.22932 5.26033 7.63279 5.08799 7.0128" fill="#074CA4" />
                                        </svg>
                                        <a
                                            href={`tel:${consultant.phone}`}
                                            className="text-[14px] text-[#4A5565] hover:text-blue-600"
                                        >
                                            {consultant.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">

                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2055 17.4745C11.1639 16.6048 12.051 15.6596 12.858 14.6478C14.558 12.512 15.5922 10.4062 15.6622 8.53366C15.6899 7.77265 15.5639 7.01387 15.2918 6.30264C15.0197 5.59141 14.607 4.94232 14.0784 4.39415C13.5498 3.84598 12.9162 3.40996 12.2153 3.11216C11.5145 2.81436 10.7608 2.66087 9.99926 2.66087C9.23775 2.66087 8.48405 2.81436 7.78319 3.11216C7.08233 3.40996 6.44868 3.84598 5.9201 4.39415C5.39151 4.94232 4.97884 5.59141 4.70672 6.30264C4.43461 7.01387 4.30864 7.77265 4.33634 8.53366C4.40717 10.4062 5.44217 12.512 7.14134 14.6478C7.94839 15.6596 8.83541 16.6048 9.79384 17.4745C9.88606 17.5578 9.95467 17.6184 9.99967 17.6562L10.2055 17.4745ZM9.38467 18.4453C9.38467 18.4453 3.33301 13.3487 3.33301 8.33366C3.33301 6.56555 4.03539 4.86986 5.28563 3.61961C6.53587 2.36937 8.23156 1.66699 9.99967 1.66699C11.7678 1.66699 13.4635 2.36937 14.7137 3.61961C15.964 4.86986 16.6663 6.56555 16.6663 8.33366C16.6663 13.3487 10.6147 18.4453 10.6147 18.4453C10.278 18.7553 9.72384 18.752 9.38467 18.4453ZM9.99967 10.667C10.6185 10.667 11.212 10.4212 11.6496 9.98358C12.0872 9.54599 12.333 8.9525 12.333 8.33366C12.333 7.71482 12.0872 7.12133 11.6496 6.68374C11.212 6.24616 10.6185 6.00033 9.99967 6.00033C9.38084 6.00033 8.78734 6.24616 8.34976 6.68374C7.91217 7.12133 7.66634 7.71482 7.66634 8.33366C7.66634 8.9525 7.91217 9.54599 8.34976 9.98358C8.78734 10.4212 9.38084 10.667 9.99967 10.667ZM9.99967 11.667C9.11562 11.667 8.26777 11.3158 7.64265 10.6907C7.01753 10.0656 6.66634 9.21771 6.66634 8.33366C6.66634 7.4496 7.01753 6.60176 7.64265 5.97664C8.26777 5.35152 9.11562 5.00033 9.99967 5.00033C10.8837 5.00033 11.7316 5.35152 12.3567 5.97664C12.9818 6.60176 13.333 7.4496 13.333 8.33366C13.333 9.21771 12.9818 10.0656 12.3567 10.6907C11.7316 11.3158 10.8837 11.667 9.99967 11.667Z" fill="#074CA4" />
                                        </svg>
                                        <span className="text-[14px] text-[#4A5565]">
                                            {consultant.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="border-b border-gray-300 mb-8 border-dashed"></div>
                            </div>
                        ))}
                    </div>

                    {/* Center Column - Custom Images */}
                    <div className="flex items-center justify-center h-full lg:block hidden">
                        <div className="grid grid-cols-2 gap-4 py-6 w-full h-full">
                            {data.centerImages.map((image, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-lg overflow-hidden shadow-md h-full"
                                >
                                    <Image
                                        src={image}
                                        alt={`Professional image ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                        placeholder="blur"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Right Column - Consultants */}
                    <div className="space-y-8 lg:ml-24">
                        {data.consultants.map((consultant) => (
                            <div key={consultant.id}>
                                <h3 className="text-[16px] font-bold text-gray-900 mb-0">
                                    {consultant.name}
                                </h3>
                                <p className="text-[14px] text-[#040D48] mb-2">
                                    {consultant.title}
                                </p>

                                {/* Contact Info */}
                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-3">
                                        <a
                                            href={`mailto:${consultant.email}`}
                                            className="text-[14px] text-[#4A5565] hover:text-blue-600"
                                        >
                                            {consultant.email}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <a
                                            href={`tel:${consultant.phone}`}
                                            className="text-[14px] text-[#4A5565] hover:text-blue-600"
                                        >
                                            {consultant.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[14px] text-[#4A5565]">
                                            {consultant.location}
                                        </span>
                                    </div>
                                </div>

                                <div className="border-b border-gray-300 mb-8 border-dashed"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
