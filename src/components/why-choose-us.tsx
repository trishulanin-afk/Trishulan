import {
  Sprout,
  Handshake,
  PackageCheck,
  Globe2,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Sprout,
    title: "Quality-Driven Sourcing",
    description:
      "We focus on sourcing agricultural and natural products from reliable suppliers, with attention to quality and consistency.",
  },
  {
    icon: Handshake,
    title: "Trusted Supplier Network",
    description:
      "We build strong supplier relationships to support efficient sourcing and dependable business coordination.",
  },
  {
    icon: PackageCheck,
    title: "Reliable Supply",
    description:
      "We coordinate product requirements with a focus on dependable supply and customer expectations.",
  },
  {
    icon: Globe2,
    title: "Global Trade Focus",
    description:
      "We support import and export requirements across agricultural produce, food products, and natural materials.",
  },
  {
    icon: Star,
    title: "Customer First",
    description:
      "We value transparent communication, responsive service, and long-term customer relationships.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F7F8FA] px-4 py-16 text-[#0B1F3A] sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section heading
        <div className="mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9A7620] sm:text-sm">
            <span className="h-px w-8 bg-[#ffd13b]" />
            THE TRISHULAN ADVANTAGE
            <span className="h-px w-8 bg-[#ffd13b]" />
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Professional sourcing.
            <span className="mt-1 block text-[#B38A24]">
              Partnerships that last.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            We focus on the essentials of agricultural and natural product
            trade: trusted connections, consistent coordination, and
            customer-focused service.
          </p>
        </div> */}

        {/* Section heading */}
        <div className="w-full text-left">
          <p className="inline-flex items-center gap-2 whitespace-nowrap text-xs font-bold uppercase tracking-[0.12em] text-[#9A7620] sm:text-sm sm:tracking-[0.18em]">
            WHY CHOOSE TRISHULAN
          </p>

          <h2 className="mt-5 whitespace-nowrap text-[clamp(1.25rem,3.2vw,3rem)] font-bold leading-tight tracking-tight">
            Professional sourcing. <span className="text-[#B38A24]">Partnerships that last.</span>
          </h2>

          <p className="mt-5 whitespace-nowrap text-[clamp(0.75rem,1.3vw,1.125rem)] leading-7 text-slate-600">
            We focus on the essentials of agricultural and natural product trade: trusted connections, consistent coordination, and customer-focused service.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group flex h-full flex-col rounded-3xl border border-[#E4E8EF] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#ffd13b]/70 hover:shadow-lg sm:p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F3E3] transition-colors duration-300 group-hover:bg-[#F1E4B9]">
                  <Icon
                    size={28}
                    strokeWidth={1.8}
                    className="text-[#9A7620]"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-7 text-lg font-semibold leading-7 text-[#0B1F3A]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>

                <div className="mt-auto pt-6">
                  <div className="h-1 w-10 rounded-full bg-[#ffd13b] transition-all duration-300 group-hover:w-16" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
