import { revalidatePath } from "next/cache";

let cuenta = 0;

export const ContadorServidor = () => {
  async function incrementar() {
    "use server";
    cuenta++;
    revalidatePath("/servidor");
  }

  async function decrementar() {
    "use server";
    cuenta--;
    revalidatePath("/servidor");
  }

  async function resetear() {
    "use server";
    cuenta = 0;
    revalidatePath("/servidor");
  }

  return (
    <form className="relative mx-auto flex w-full max-w-md flex-col items-center overflow-hidden rounded-3xl border border-cyan-100/20 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 p-8 text-white shadow-2xl shadow-cyan-950/30">
      {/* Decoración marina */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300/80">
          Contador
        </p>

        <p className="bg-gradient-to-b from-white to-cyan-200 bg-clip-text text-7xl font-light tracking-tight text-transparent">
          {cuenta}
        </p>

        <div className="my-8 h-px w-24 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

        <div className="flex items-center gap-3">
          <button
            formAction={decrementar}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/20 bg-white/5 text-xl font-light text-cyan-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:shadow-lg hover:shadow-cyan-500/10 active:translate-y-0"
          >
            −
          </button>

          <button
            formAction={resetear}
            className="rounded-full border border-amber-100/20 bg-amber-100/5 px-6 py-3 text-sm font-medium text-amber-100/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-200/40 hover:bg-amber-100/10 hover:shadow-lg active:translate-y-0"
          >
            Reset
          </button>

          <button
            formAction={incrementar}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/20 bg-white/5 text-xl font-light text-cyan-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:shadow-lg hover:shadow-cyan-500/10 active:translate-y-0"
          >
            +
          </button>
        </div>

        <p className="mt-8 max-w-xs text-center text-sm leading-relaxed text-slate-300/70">
          El valor de cuenta es compartido por todos los usuarios y se guarda en
          el servidor.
        </p>
      </div>
    </form>
  );
};
