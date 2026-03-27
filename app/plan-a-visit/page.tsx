"use client";

import { useState } from "react";
import Link from "next/link";

export default function PlanAVisitPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    visitDate: "",
    heardFrom: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/plan-a-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <main className="pt-24 bg-[#fcfaf7] min-h-screen flex items-center justify-center px-8">
        <div className="max-w-lg w-full text-center space-y-8">
          <div className="w-16 h-16 rounded-full bg-[#29B9E8] flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-serif italic text-5xl text-[#1a1a2e]">See you Sunday.</h1>
          <p className="text-xl text-[#4a4a4a] leading-relaxed">
            We got your info and we can&apos;t wait to meet you. Someone from our team may reach out before your visit.
          </p>
          <div className="pt-4 space-y-4">
            <p className="text-[#4a4a4a]">
              <span className="font-semibold">Sundays at 12 PM</span> — AMC 25 Union Square, 890 Broadway, NYC
            </p>
            <Link
              href="/im-new"
              className="inline-block border border-[#1a1a2e] text-[#1a1a2e] px-8 py-3 font-medium hover:bg-[#1a1a2e] hover:text-white transition-all duration-200"
            >
              What to expect
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 bg-[#fcfaf7] min-h-screen">
      <div className="max-w-2xl mx-auto px-8 py-16 md:py-24">

        <div className="mb-12">
          <span className="text-[#29B9E8] font-bold tracking-[0.2em] uppercase text-sm block mb-4">
            You&apos;re welcome here
          </span>
          <h1 className="font-serif italic text-5xl md:text-7xl text-[#1a1a2e] leading-tight mb-6">
            Plan a Visit
          </h1>
          <p className="text-xl text-[#4a4a4a] leading-relaxed">
            Let us know you&apos;re coming. We&apos;ll have someone ready to welcome you at the door.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-semibold text-[#1a1a2e] tracking-wide uppercase">
                First Name <span className="text-[#29B9E8]">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={form.firstName}
                onChange={handleChange}
                className="w-full border border-[#d0cdc8] bg-white px-4 py-3 text-[#1a1a2e] focus:outline-none focus:border-[#29B9E8] transition-colors"
                placeholder="First name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-semibold text-[#1a1a2e] tracking-wide uppercase">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleChange}
                className="w-full border border-[#d0cdc8] bg-white px-4 py-3 text-[#1a1a2e] focus:outline-none focus:border-[#29B9E8] transition-colors"
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-[#1a1a2e] tracking-wide uppercase">
              Email <span className="text-[#29B9E8]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-[#d0cdc8] bg-white px-4 py-3 text-[#1a1a2e] focus:outline-none focus:border-[#29B9E8] transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-[#1a1a2e] tracking-wide uppercase">
              Phone <span className="text-[#4a4a4a] font-normal normal-case tracking-normal">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-[#d0cdc8] bg-white px-4 py-3 text-[#1a1a2e] focus:outline-none focus:border-[#29B9E8] transition-colors"
              placeholder="(212) 555-0100"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="visitDate" className="block text-sm font-semibold text-[#1a1a2e] tracking-wide uppercase">
              When are you planning to visit? <span className="text-[#4a4a4a] font-normal normal-case tracking-normal">(optional)</span>
            </label>
            <input
              id="visitDate"
              name="visitDate"
              type="date"
              value={form.visitDate}
              onChange={handleChange}
              className="w-full border border-[#d0cdc8] bg-white px-4 py-3 text-[#1a1a2e] focus:outline-none focus:border-[#29B9E8] transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="heardFrom" className="block text-sm font-semibold text-[#1a1a2e] tracking-wide uppercase">
              How did you hear about us? <span className="text-[#4a4a4a] font-normal normal-case tracking-normal">(optional)</span>
            </label>
            <select
              id="heardFrom"
              name="heardFrom"
              value={form.heardFrom}
              onChange={handleChange}
              className="w-full border border-[#d0cdc8] bg-white px-4 py-3 text-[#1a1a2e] focus:outline-none focus:border-[#29B9E8] transition-colors"
            >
              <option value="">Select one</option>
              <option value="Friend or Family">Friend or Family</option>
              <option value="Instagram">Instagram</option>
              <option value="TikTok">TikTok</option>
              <option value="YouTube">YouTube</option>
              <option value="Google">Google</option>
              <option value="Flyer or Poster">Flyer or Poster</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {status === "error" && (
            <p className="text-red-600 text-sm">{errorMsg}</p>
          )}

          <div className="pt-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#1a1a2e] text-white py-4 text-lg font-medium hover:bg-[#29B9E8] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Submitting..." : "I\u2019m Coming"}
            </button>
          </div>

          <p className="text-center text-sm text-[#4a4a4a]">
            We meet <span className="font-semibold">Sundays at 12 PM</span> at AMC 25 Union Square, 890 Broadway, NYC
          </p>
        </form>

      </div>
    </main>
  );
}
