import ContainComponent from "../components/contain";
import {
  BuildingsIcon,
  IdentificationCardIcon,
  MapPinIcon,
} from "@phosphor-icons/react";

const CONTACT_DETAILS = [
  {
    icon: <BuildingsIcon size={28} className="shrink-0" />,
    label: "Company",
    value: "Companyname Ltd",
  },
  // {
  //   icon: <IdentificationCardIcon size={28} className="shrink-0" />,
  //   label: "Corporate Number",
  //   value: "0000000000000",
  // },
  {
    icon: <MapPinIcon size={28} className="shrink-0" />,
    label: "Head Office Location",
    value: "2-3-5-602 Toyo, Koto-Ku, Tokyo Japan",
    isAddress: true,
  },
];

export default function Contact() {
  const HERO_DATA = {
    subtitle: "Contact us",
    title:
      "Every great partnership begins with a conversation. We're ready to listen.",
    bgImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
  };
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-primary">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_DATA.bgImage}
            alt="Modern architecture"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-secondary/4" />
        </div>

        <div className="relative z-10 w-full">
          <ContainComponent>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-18">
              {/* Left Side: Title */}
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-6 h-[1px] bg-gray-400" />
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-300 font-medium">
                    {HERO_DATA.subtitle}
                  </span>
                </div>
                <h1 className="text-neutral title">{HERO_DATA.title}</h1>
                <div className="space-y-8 mt-8">
                  {CONTACT_DETAILS.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-secondary/60 text-neutral p-4 rounded-full">
                        {detail.icon}
                      </div>
                      <div>
                        <p className="font-medium text-neutral">
                          {detail.label}
                        </p>
                        {detail.isAddress ? (
                          <address className="not-italic text-slate-300">
                            {detail.value}
                          </address>
                        ) : (
                          <p className="text-slate-300">{detail.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Description & Buttons */}
              <div className="lg:col-span-6 flex flex-col gap-8 bg-neutral p-8 rounded-lg">
                <div className="">
                  <div className="titletwo text-primary">Send us a message</div>
                  <p className="text-gray-400 text-sm mt-4">
                    Please use the form below to get in touch and we'll get back
                    to you to arrange an intro call as soon as we can.
                  </p>
                  <form className="mt-6 space-y-6 contact">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <input
                          id="name"
                          type="text"
                          placeholder="Full Name"
                          aria-label="Full Name"
                          className="w-full input"
                          required
                        />
                      </div>
                      <div className="flex-1">
                        <input
                          id="Phone"
                          type="text"
                          placeholder="Phone Number"
                          aria-label="Phone Number"
                          className="w-full input"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        aria-label="Email Address"
                        className="w-full input"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        id="message"
                        className="w-full textarea"
                        placeholder="How can we help you?"
                        aria-label="How can we help you?"
                        rows={3}
                        required
                      ></textarea>
                    </div>

                    <button className="btn btn-main">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </ContainComponent>
        </div>
      </section>
    </>
  );
}
