import Image from "next/image";
import Callico from "@/assets/homeico/Callico.png"
import EmailIco from "@/assets/homeico/Emailico.png"

type Contact = {
    title: string;
    phone: string;
    email: string;
};

const contacts: Contact[] = [
    { title: "GP Metro", email: "gprecruitment@medfuture.com.au", phone: "+61 489 071 766" },
    { title: "Rural Unit", email: "simg@medfuture.com.au", phone: "+61 483 980 588" },
    { title: "Locum Unit (PLGP)", email: "ahp@medfuture.com.au", phone: "+61 483 965 759" },
    { title: "Allied Health Unit", email: "ahp@medfuture.com.au", phone: "+61 483 965 759" },
    { title: "Mental and Oral Health Unit", email: "nursing@medfuture.com.au", phone: "+61 483 957 757" },
    { title: "SIMG Unit", email: "helpdesk@medfuture.com.au", phone: "1300 633 388" },
    { title: "Visa Unit", email: "ahp@medfuture.com.au", phone: "+61 483 965 759" },
    { title: "New Zealand Unit", email: "nursing@medfuture.com.au", phone: "+61 483 957 757" },
];

export default function ContactSection() {
    const columns = 3;
    const rows = Math.ceil(contacts.length / columns);

    return (
        <section className="max-w-6xl mx-auto lg:px-6 py-16">
         
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {contacts.map((contact, index) => {
                    const col = index % columns;
                    const row = Math.floor(index / columns);

                    return (
                        <div
                            key={index}
                            className={[
                                "p-6",
                                "border-dotted border-slate-400",
                                col !== columns - 1 ? "md:border-r" : "",
                                row !== rows - 1 ? "border-b" : "",
                            ].join(" ")}
                        >
                            <h3 className="lg:text-[20px] text-lg  text-[#040D48] font-semibold mb-2">
                                {contact.title}
                            </h3>

                            <p className="text-[#4A5565] lg:text-[14px] text-sm gap-2 font-medium flex flex-wrap">
                               <Image src={EmailIco} alt=""></Image>  {contact.email}
                            </p>
                            <p className="text-[#4A5565] lg:text-[14px] text-sm gap-2 mt-2 font-medium flex flex-wrap">
                              <Image src={Callico} alt=""></Image>   {contact.phone}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="mt-16 bg-gray-50 full-width-section">
                <div className="inner-width-section flex justify-center py-16">
                    <div className="w-full max-w-lg text-[#0F172A] bg-white mx-auto p-8 rounded-xl shadow-sm">
                        <h2 className="text-[36px] text-[#040D48] font-semibold mb-6 text-center">
                            Enquiry Now
                        </h2>

                        <form className="grid grid-cols-1 gap-6">
                     
                            <div>
                                <label className="block lg:text-[14px] text-sm font-medium mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full rounded-md border border-[#E2E8F0] bg-[#FCFCFC] px-4 lg:py-[20px] py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                                />
                            </div>

                  
                            <div>
                                <label className="block lg:text-[14px] text-sm font-medium mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full rounded-md border  border-[#E2E8F0] bg-[#FCFCFC] px-4 lg:py-[20px] py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                                />
                            </div>

                       
                            <div>
                                <label className="block lg:text-[14px] text-sm font-medium mb-1">
                                  Phone
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+61"
                                    className="w-full rounded-md border border-[#E2E8F0] bg-[#FCFCFC] px-4 lg:py-[20px] py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                                />
                            </div>

                          
                            <div>
                                <label className="block lg:text-[14px] text-sm font-medium mb-1">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Write your message..."
                                    className="w-full rounded-md border border-[#E2E8F0] bg-[#FCFCFC] px-4 lg:py-[20px] focus:outline-none focus:ring-2 focus:ring-slate-400"
                                />
                            </div>

                         
                            <button
                                type="submit"
                                className="w-full rounded-md bg-slate-800 px-6 py-3 text-white hover:bg-slate-700 transition"
                            >
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </section>
    );
}

