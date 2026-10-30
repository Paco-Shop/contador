"use client";

import { useState } from "react";

export const Contador = () => {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-3xl bg-white/80 backdrop-blur-sm p-10 text-center shadow-xl border border-emerald-200">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-emerald-700">
          Naturaleza
        </p>

        <p className="mb-8 text-7xl font-bold text-emerald-800">{cuenta}</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => {
              setCuenta((c) => c - 1);
            }}
            className="rounded-full bg-emerald-700 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-800 hover:shadow-lg active:scale-95"
          >
            -1
          </button>
          <button
            onClick={() => {
              setCuenta(0);
            }}
            className="rounded-full border-2 border-emerald-700 px-7 py-3 font-semibold text-emerald-800 transition hover:bg-emerald-50 active:scale-95"
          >
            Reset
          </button>
          <button
            onClick={() => {
              setCuenta((c) => c + 1);
            }}
            className="rounded-full bg-emerald-700 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-800 hover:shadow-lg active:scale-95"
          >
            +1
          </button>
        </div>
      </div>
    </div>
  );
};
