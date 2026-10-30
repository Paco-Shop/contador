import { Metadata } from "next";
import Link from "next/link";
import { ContadorServidor } from "./ContadorServidor";

export const metadata: Metadata = {
  title: "Contador en servidor",
  description:
    "diferencias entre un contador en el cliente y otro que cuenta en el servidor",
};

const ServidorPage = () => {
  return (
    <section className="min-h-screen  bg-gradient-to-br from-emerald-100 via-lime-50 to-amber-100">
      <h1 className="mx-auto mb-10 max-w-3xl px-4 text-center text-3xl font-bold leading-tight tracking-wide text-emerald-800 drop-shadow-sm sm:text-4xl ">
        Contador con valor guardado en el servidor, llevará la misma cuenta para
        todos los clientes 🌿
      </h1>
      <ContadorServidor />
      <Link
        href="/"
        className="bg-emerald-800 text-lime-50 px-3 py-2 rounded-full fixed left-3 top-3"
      >
        Atrás
      </Link>
    </section>
  );
};

export default ServidorPage;
