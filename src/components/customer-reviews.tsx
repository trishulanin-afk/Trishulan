"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase, type CustomerReview } from "@/lib/supabase";

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
      <div className="mx-auto max-w-7xl rounded-xl border border-slate-200 border-t-4 border-t-[#0B1F3A] bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 border-b border-[#0B1F3A]/15 pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A7720]">
              Customer feedback
            </p>
            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
              Ratings &amp; feedback
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
              Genuine customer reviews appear here after they have been approved.
            </p>
          </div>
          {averageRating && (
            <div className="flex shrink-0 items-center gap-3 rounded-lg border border-[#0B1F3A]/10 bg-white px-3 py-2">
              <span className="text-2xl font-bold text-[#0B1F3A]">
                {averageRating}
              </span>
              <span>
                <span
                  className="block text-base tracking-[0.12em] text-[#A66F11]"
                  aria-label={`${averageRating} out of 5 stars`}
                >
                  ★★★★★
                </span>
                <span className="block text-[11px] text-slate-600">
                  {reviews.length} approved {reviews.length === 1 ? "review" : "reviews"}
                </span>
              </span>
            </div>
          )}
        </div>

        <div className="mt-5">
          {isLoading ? (
            <div
              role="status"
              className="flex min-h-[184px] items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-5 py-8 text-center text-sm text-slate-600"
            >
              Loading approved reviews...
            </div>
          ) : loadError ? (
            <div
              role="alert"
              className="flex min-h-[184px] items-center justify-center rounded-lg border border-amber-200 bg-amber-50 px-5 py-8 text-center text-sm leading-6 text-amber-950"
            >
              {loadError}
            </div>
          ) : reviews.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <article
                  key={review.id}
                  className="flex min-h-[184px] flex-col rounded-lg border border-slate-200 border-t-4 border-t-[#D4AF37] bg-white p-4 shadow-sm"
                >
                  <p
                    className="text-sm tracking-[0.12em] text-[#A66F11]"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </p>
                  <blockquote className="mt-3 flex-1 text-sm leading-6 text-slate-700">
                    “{review.feedback}”
                  </blockquote>
                  <div className="mt-4 border-t border-slate-200 pt-3">
                    <p className="text-sm font-bold text-[#0B1F3A]">
                      {review.customer_name}
                    </p>
                    {review.company_name && (
                      <p className="mt-1 text-xs text-slate-600">
                        {review.company_name}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex min-h-[184px] items-center justify-center rounded-lg border border-slate-200 border-t-4 border-t-[#D4AF37] bg-white px-5 py-8 text-center shadow-sm">
              <div>
                <span aria-hidden="true" className="text-3xl text-[#A66F11]">
                  ★
                </span>
                <p className="mt-2 font-semibold text-[#0B1F3A]">
                  No reviews published yet
                </p>
                <p className="mx-auto mt-1 max-w-lg text-sm leading-6 text-slate-600">
                  Once a customer review is approved, it will be shown here.
                </p>
              </div>
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
            className="inline-flex min-h-10 items-center justify-center rounded-md bg-[#0B1F3A] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#17345B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
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
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#07162B]/70 p-4"
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
                ×
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
                      className={`text-3xl leading-none transition hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A7720] ${
                        rating >= value ? "text-[#B78A16]" : "text-slate-300"
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
