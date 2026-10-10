import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-shell flex min-h-[60vh] flex-col justify-center py-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight">Not found</h1>
      <Link href="/" className="mt-6 text-accent hover:underline">
        ← Home
      </Link>
    </section>
  );
}
