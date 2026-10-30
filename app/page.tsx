import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="font-bold text-4xl">
        Contador en cliente y contador en servidor de Pacos shop
      </h1>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <Link
          href="/cliente"
          className="flex flex-col justify-end items-center gap-2 p-2 border rounded-xl hover:border-amber-300"
        >
          <Image
            src="/contador1.jpg"
            width={120}
            height={120}
            alt="Imagen del contador en cliente"
          />
          <p>Contador en cliente</p>
        </Link>
        <Link
          href="/servidor"
          className="flex flex-col justify-end items-center gap-2 p-2 border rounded-xl hover:border-amber-300"
        >
          <Image
            src="/contador2.jpg"
            width={120}
            height={120}
            alt="Imagen del contador en servidor"
          />
          <p>Contador en servidor</p>
        </Link>
      </div>
    </div>
  );
}
