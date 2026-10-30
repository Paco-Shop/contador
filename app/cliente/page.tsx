import { Metadata } from "next";
import { Contador } from "./Contador";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contador en cliente",
  description:
    "diferencias entre un contador en el cliente y otro que cuenta en el servidor",
};

const ClientePage = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-100 via-lime-50 to-amber-100">
      <h1 className="mx-auto mb-10 max-w-3xl px-4 text-center text-3xl font-bold leading-tight tracking-wide text-emerald-800 drop-shadow-sm sm:text-4xl ">
        Contador con valor guardado en el navegador de cada cliente 🌿
      </h1>
      <Contador />
      <Link
        href="/"
        className="bg-emerald-800 text-lime-50 px-3 py-2 rounded-full fixed left-3 top-3"
      >
        Atrás
      </Link>
    </section>
  );
};

export default ClientePage;
