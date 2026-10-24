"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase, type CustomerReview } from "@/lib/supabase";
import { Quote, Star } from "lucide-react";

export default function CustomerReviews() {
  const [reviews, setReviews] = useState<CustomerReview[]>([]);
  const [isLoading, setIsLoading] = useState(supabase !== null);
  const [loadError, setLoadError] = useState(
    supabase ? "" : "Customer reviews are not configured yet."
  );
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const supabaseClient = supabase;
    if (!supabaseClient) return;

    let isCurrent = true;

    const loadReviews = async () => {
      const { data, error } = await supabaseClient
        .from("customer_reviews")
        .select("id, created_at, customer_name, company_name, rating, feedback, status")
        .eq("status", "approved")
        .order("created_at", { ascending: false })
        .limit(10);

      if (!isCurrent) return;

      if (error) {
        console.error("Failed to load approved customer reviews:", error);
        setLoadError("We couldn't load customer reviews. Please try again later.");
      } else {
        setReviews(data);
      }

      setIsLoading(false);
    };

    void loadReviews();

    return () => {
      isCurrent = false;
    };
  }, []);

  useEffect(() => {
    if (!isFormOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsFormOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isFormOpen]);

  const submitReview = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    setSubmitted(false);

    if (!supabase) {
      setSubmitError("Review submissions are not configured yet.");
      return;
    }

    const customerName = name.trim();
    const companyName = company.trim();
    const reviewText = feedback.trim();

    if (!customerName || !reviewText) {
      setSubmitError("Enter your name and review before submitting.");
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from("customer_reviews").insert({
      customer_name: customerName,
      company_name: companyName || null,
      rating,
      feedback: reviewText,
      status: "pending",
    });

    setIsSubmitting(false);

    if (error) {
      console.error("Failed to submit customer review:", error);
      setSubmitError(
        "Your review could not be submitted. Please try again later."
      );
      return;
    }

    setName("");
    setCompany("");
    setRating(5);
    setFeedback("");
    setSubmitted(true);
    setIsFormOpen(false);
  };

  const averageRating = reviews.length
    ? (
      reviews.reduce((total, review) => total + review.rating, 0) /
      reviews.length
    ).toFixed(1)
    : null;

  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white px-4 py-8 text-[#0B1F3A] sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto my-10 max-w-7xl rounded-xl border border-slate-200 border-t-4 border-t-[#0B1F3A] bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9A7620]">
              <span className="h-px w-8 bg-[#ffd13b]" />
              TRUST BUILT THROUGH EXPERIENCE
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1F3A] sm:text-4xl md:text-5xl">
              Words from our customers.
            </h2>

            <p className="mt-4 text-base text-slate-600">
              Discover feedback shared by customers who have experienced our service
              and business approach.
            </p>
          </div>

          {averageRating && (
            <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-[#ffd13b]/30 bg-[#FBF8EE] px-5 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#F1D778]">
                <Star size={24} fill="currentColor" aria-hidden="true" />
              </div>

              <div>
                <p className="text-2xl font-bold text-[#0B1F3A]">
                  {averageRating}<span className="text-base text-slate-500"> / 5</span>
                </p>
                <p className="text-xs text-slate-600">
                  Based on {reviews.length} approved{" "}
                  {reviews.length === 1 ? "review" : "reviews"}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8">
          {isLoading ? (
            <div
              role="status"
              className="rounded-2xl bg-slate-50 px-6 py-16 text-center text-sm text-slate-600"
            >
              Loading customer experiences...
            </div>
          ) : loadError ? (
            <div
              role="alert"
              className="rounded-2xl border border-amber-200 bg-amber-50 px-6 py-12 text-center text-sm text-amber-950"
            >
              {loadError}
            </div>
          ) : reviews.length ? (
            <div className="review-marquee relative">
              <div className="review-marquee-track">
                {[0, 1].map((group) => (
                  <div
                    key={group}
                    className="review-marquee-group"
                    aria-hidden={group === 1 ? true : undefined}
                  >
                    {reviews.map((review) => (
                      <article
                        key={`${group}-${review.id}`}
                        className="flex w-[300px] shrink-0 flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(11,31,58,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#ffd13b]/70 hover:shadow-[0_16px_40px_rgba(11,31,58,0.12)] sm:w-[350px] sm:p-7"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8F3E3] text-[#9A7620]">
                            <Quote size={22} aria-hidden="true" />
                          </div>

                          <div
                            className="flex gap-0.5 text-[#B78A16]"
                            aria-label={`${review.rating} out of 5 stars`}
                          >
                            {Array.from({ length: 5 }, (_, index) => (
                              <Star
                                key={index}
                                size={16}
                                strokeWidth={1.5}
                                fill={index < review.rating ? "currentColor" : "none"}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                        </div>

                        <blockquote className="mt-6 min-h-28 flex-1 text-[15px] leading-7 text-slate-700">
                          “{review.feedback}”
                        </blockquote>

                        <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                          <div
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A] text-sm font-bold uppercase text-[#F1D778]"
                            aria-hidden="true"
                          >
                            {review.customer_name.trim().charAt(0) || "C"}
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold text-[#0B1F3A]">
                              {review.customer_name}
                            </p>
                            <p className="mt-1 truncate text-xs text-slate-500">
                              {review.company_name || "Verified customer feedback"}
                            </p>
                          </div>

                          <div className="ml-auto h-2 w-2 shrink-0 rounded-full bg-[#ffd13b]" />
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-16 text-center">
              <Star
                size={30}
                className="mx-auto text-[#B78A16]"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-lg font-semibold text-[#0B1F3A]">
                Our customer stories start here
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
                We look forward to sharing approved customer experiences with you.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-col items-center">
          <button
            type="button"
            onClick={() => {
              setSubmitError("");
              setSubmitted(false);
              setIsFormOpen(true);
            }}
            className="inline-flex min-h-10 items-center justify-center rounded-md bg-[#0B1F3A] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#17345B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd13b]"
          >
            Give feedback
          </button>
          {submitted && (
            <p role="status" className="mt-3 text-center text-sm font-medium text-emerald-800">
              Thank you. Your review has been submitted for approval.
            </p>
          )}
        </div>
      </div>

      {isFormOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-[#07162B]/70 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsFormOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="feedback-title"
            className="my-auto w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7720]">
                  Your experience
                </p>
                <h2 id="feedback-title" className="mt-2 text-2xl font-bold text-[#0B1F3A]">
                  Leave feedback
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close feedback form"
                onClick={() => setIsFormOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 text-xl text-slate-600 hover:bg-slate-50"
              >
                x
              </button>
            </div>

            <form onSubmit={submitReview} className="mt-6 space-y-5">
              <label className="block text-sm font-medium text-slate-700">
                Your name
                <input
                  required
                  maxLength={80}
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-base outline-none focus:border-[#B78A16]"
                  placeholder="Enter your name"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Company name <span className="font-normal text-slate-500">(optional)</span>
                <input
                  maxLength={120}
                  autoComplete="organization"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-base outline-none focus:border-[#B78A16]"
                  placeholder="Your company"
                />
              </label>

              <fieldset>
                <legend className="text-sm font-medium text-slate-700">Rating</legend>
                <div className="mt-2 flex gap-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      aria-label={`${value} star${value === 1 ? "" : "s"}`}
                      aria-pressed={rating === value}
                      onClick={() => setRating(value)}
                      className={`text-3xl leading-none transition hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A7720] ${rating >= value ? "text-[#B78A16]" : "text-slate-300"
                        }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="block text-sm font-medium text-slate-700">
                Your feedback
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  value={feedback}
                  onChange={(event) => setFeedback(event.target.value)}
                  className="mt-2 w-full resize-y rounded-md border border-slate-300 px-4 py-3 text-base outline-none focus:border-[#B78A16]"
                  placeholder="Share a brief note about your genuine experience"
                />
                <span className="mt-1 block text-right text-xs text-slate-500">
                  {feedback.length}/1000
                </span>
              </label>

              <label className="flex items-start gap-3 text-sm leading-5 text-slate-600">
                <input
                  required
                  type="checkbox"
                  className="mt-1 h-4 w-4 shrink-0 accent-[#0B1F3A]"
                />
                <span>
                  I agree that my name, company (if provided), and review may be displayed publicly if approved.
                  {" "}See our{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-[#0B1F3A] underline underline-offset-4"
                  >
                    privacy notice
                  </Link>
                  .
                </span>
              </label>

              {submitError && (
                <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-900">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !supabase}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#0B1F3A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#17345B] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600"
              >
                {isSubmitting ? "Submitting review..." : "Submit review"}
              </button>
              <p className="text-center text-xs leading-5 text-slate-500">
                Reviews are submitted as pending and appear publicly only after approval.
              </p>
            </form>
          </section>
        </div>
      )}
    </section>
  );
}
