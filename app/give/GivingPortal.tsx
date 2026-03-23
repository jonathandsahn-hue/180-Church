"use client";

import { useState } from "react";

const presets = ["$50", "$100", "$250"];

export default function GivingPortal() {
  const [selected, setSelected] = useState("$100");
  const [custom, setCustom] = useState("");

  const paypalHref = "https://www.paypal.com/paypalme/180church";

  return (
    <section className="mt-32 px-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl p-12 border border-gray-100" style={{ boxShadow: "0 12px 40px rgba(27,28,26,0.04)" }}>
        <div className="text-center mb-10">
          <div className="w-12 h-12 rounded-full bg-[#29B9E8]/10 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[#29B9E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#1a1a2e]">Give Online</h2>
          <p className="text-[#4a4a6a] mt-2">Secure and simple. Processed through PayPal.</p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            {presets.map((amount) => (
              <button
                key={amount}
                onClick={() => { setSelected(amount); setCustom(""); }}
                className={`py-4 font-bold text-lg border-2 transition-all ${
                  selected === amount && !custom
                    ? "border-[#29B9E8] text-[#29B9E8] bg-[#29B9E8]/5"
                    : "border-gray-200 text-[#4a4a6a] hover:border-[#29B9E8] hover:text-[#29B9E8]"
                }`}
              >
                {amount}
              </button>
            ))}
          </div>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4a4a6a]">$</span>
            <input
              type="number"
              placeholder="Other Amount"
              value={custom}
              onChange={(e) => { setCustom(e.target.value); setSelected(""); }}
              className="w-full pl-10 pr-4 py-4 bg-gray-50 border-0 focus:ring-2 focus:ring-[#29B9E8] text-[#1a1a2e] placeholder-gray-400"
            />
          </div>

          <a
            href={paypalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#1a1a2e] text-white py-5 font-bold text-lg text-center hover:bg-[#29B9E8] transition-all duration-200"
          >
            Continue to Give
          </a>

          <p className="text-center text-sm text-gray-400">
            You can also give by Venmo, Zelle, or check — see options below.
          </p>
        </div>
      </div>
    </section>
  );
}
