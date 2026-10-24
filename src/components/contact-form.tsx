"use client";

import emailjs from "@emailjs/browser";
import { useMemo, useState, useSyncExternalStore } from "react";
import { products } from "@/lib/products";

const initialForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
  product: "",
  message: "",
};

function subscribeToLocation(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getRequestedProduct() {
  const requestedProduct = new URLSearchParams(window.location.search).get("product");
  return products.some((product) => product.name === requestedProduct)
    ? requestedProduct ?? ""
    : "";
}

type ContactCard = {
  label: string;
  value: string;
  href: string;
  brand: string;
};

type ContactFormProps = {
  contactCards: ContactCard[];
  businessHighlights: string[];
};

export default function ContactForm({ contactCards, businessHighlights }: ContactFormProps) {
  const [form, setForm] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [emailStatus, setEmailStatus] = useState<"success" | "error" | null>(null);
  const requestedProduct = useSyncExternalStore(
    subscribeToLocation,
    getRequestedProduct,
    () => ""
  );
  const selectedProduct = form.product || requestedProduct;

  const whatsappHref = useMemo(() => {
    const body = [
      "Hello Trishulan,",
      "",
      `Name: ${form.name || "-"}`,
      `Company: ${form.company || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Email: ${form.email || "-"}`,
      `Product interest: ${selectedProduct || "-"}`,
      "",
      `Message: ${form.message || "-"}`,
    ].join("\n");

    return `https://wa.me/917989273309?text=${encodeURIComponent(body)}`;
  }, [form, selectedProduct]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setEmailStatus(null);
  };

  const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailStatus(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setEmailStatus("error");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          from_name: form.name,
          customer_name: form.name,
          email: form.email,
          from_email: form.email,
          customer_email: form.email,
          reply_to: form.email,
          company: form.company || "Not provided",
          phone: form.phone || "Not provided",
          product: selectedProduct || "Not specified",
          message: form.message,
          subject: `Trade Enquiry: ${form.name}-${form.company || "No Company"}-${form.product || "No Product"}`,
        },
        { publicKey }
      );
      setEmailStatus("success");
      setForm(initialForm);
    } catch (error) {
      console.error("EmailJS contact form submission failed:", error);
      setEmailStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <section className="border-y border-slate-200 bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A7720]">
                Reach and follow Trishulan
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#0B1F3A] sm:text-3xl">Connect with us</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              Choose the channel that works best for your enquiry.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={`${item.label}: ${item.value}`}
                className="interactive-surface group flex min-h-32 flex-col rounded-xl border border-slate-200 bg-white p-3 text-[#0B1F3A] shadow-md shadow-slate-900/5 transition hover:border-[#ffd13b]/70 hover:shadow-lg sm:p-4"
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.brand === "whatsapp" ? "bg-[#25D366] text-white" : item.brand === "instagram" ? "bg-[linear-gradient(135deg,#833AB4_0%,#FD1D1D_55%,#FCAF45_100%)] text-white" : item.brand === "linkedin" ? "bg-[#0A66C2] text-white" : "bg-[#ffd13b] text-[#0B1F3A]"}`}
                  aria-hidden="true"
                >
                  {item.brand === "instagram" ? (
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
                    </svg>
                  ) : item.brand === "linkedin" ? (
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                      <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
                    </svg>
                  ) : item.brand === "whatsapp" ? (
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
                      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.12 0C5.58 0 .26 5.31.26 11.85c0 2.09.55 4.13 1.59 5.93L.16 24l6.38-1.67a11.9 11.9 0 0 0 5.58 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.47-8.41ZM12.13 21.7h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.79.99 1.01-3.7-.23-.38a9.83 9.83 0 0 1-1.51-5.18c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.88-9.88 9.88Zm5.42-7.4c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.53.07-.8.37-.28.3-1.06 1.03-1.06 2.52s1.09 2.92 1.24 3.12c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.44.25-.71.25-1.32.18-1.44-.08-.13-.28-.2-.58-.35Z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  )}
                </span>
                <span className="mt-3 block text-[10px] font-medium uppercase tracking-[0.13em] text-slate-500">
                  {item.label === "Call / WhatsApp" ? "WhatsApp" : item.label}
                </span>
                <span className="mt-1 wrap-break-word text-sm font-semibold leading-5 text-[#0B1F3A] group-hover:text-[#8A6A1D]">
                  {item.value}
                </span>
                <span className="mt-auto self-end pt-2 text-sm text-[#9A7720] transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F6F8] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
          <div className="interactive-surface rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A7720]">
              Business information
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A]">Trust starts with clarity.</h2>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Company
                </p>
                <p className="mt-2 text-lg font-bold text-[#0B1F3A]">
                  Trishulan Import and Export Company
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Office address
                </p>
                <p className="mt-2 text-base leading-7 text-slate-700">
                  First Floor, Chitti Fast Food Center<br />
                  Near Nirmala Hospital, Beside Building<br />
                  Jangareddygudem, Andhra Pradesh 534447
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Working focus
                </p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-slate-700">
                  {businessHighlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href="https://maps.app.goo.gl/YSGFRFhYGELHhi9w5?g_st=ac"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-[#0B1F3A] px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white"
                >
                  Open map location
                </a>
              </div>
            </div>
          </div>

          <div id="contact-form" className="contact-form interactive-surface scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A7720]">
              Make an enquiry
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A]">Send your trade requirements</h2>

            <form className="mt-8 space-y-5" onSubmit={handleEmailSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Your name
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none ring-0 transition placeholder:text-slate-400 focus:border-[#ffd13b] focus:bg-white"
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Company name
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none ring-0 transition placeholder:text-slate-400 focus:border-[#ffd13b] focus:bg-white"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Mobile number
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 ..."
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none ring-0 transition placeholder:text-slate-400 focus:border-[#ffd13b] focus:bg-white"
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Email address
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none ring-0 transition placeholder:text-slate-400 focus:border-[#ffd13b] focus:bg-white"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-slate-700">
                Product or service of interest
                <select
                  name="product"
                  value={selectedProduct}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-[#ffd13b] focus:bg-white"
                >
                  <option value="">Select an option</option>
                  {products.map((product) => (
                    <option key={product.slug} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Requirements
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your required quantity, destination, specification, or trade need..."
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#ffd13b] focus:bg-white"
                />
              </label>

              <p className="text-xs leading-5 text-slate-600">
                By sending this enquiry, you agree that we may use the details
                provided to respond to your request. See our{" "}
                <a
                  href="/privacy"
                  className="font-semibold text-[#0B1F3A] underline underline-offset-4"
                >
                  privacy notice
                </a>
                .
              </p>

              {emailStatus && (
                <p
                  role={emailStatus === "error" ? "alert" : "status"}
                  className={`rounded-lg px-4 py-3 text-sm leading-6 ${
                    emailStatus === "success"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {emailStatus === "success"
                    ? "Your enquiry has been sent. Our team will get back to you."
                    : !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
                        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
                        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                      ? "Email sending is not configured yet. Please contact us by WhatsApp or email directly."
                      : "We could not send your enquiry. Please try again or contact us by WhatsApp."}
                </p>
              )}

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md bg-[#ffd13b] px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#e5c55a]"
                >
                  Send on WhatsApp
                </a>
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md border border-[#0B1F3A] px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? "Sending..." : "Send by email"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
