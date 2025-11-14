import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-10 text-center font-sans text-slate-900">
      <main className="max-w-2xl rounded-3xl border border-slate-200 bg-white/80 p-10 backdrop-blur">
        <h1 className="mb-4 text-4xl font-semibold">Jordan workshop</h1>
        <p className="mb-8 text-slate-600">
          Welcome to the Jordan workshop 15th-20th November 2025.
        </p>
        <div className="flex flex-col gap-4">
          <Link
           href="https://github.com/eirikhaugstulen/plugin-workshop-jordan"
           target="_blank"
           className="inline-flex items-center justify-center rounded-2xl border border-slate-900 bg-slate-900 px-6 py-3 text-lg font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-slate-900">
            <div className="flex items-center gap-2">
              <p>Workshop repository</p>
              <ExternalLinkIcon className="w-4 h-4" />
            </div>
          </Link>
          <Link
            href="/civil-registry"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-900 bg-slate-900 px-6 py-3 text-lg font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-slate-900"
          >
            <div className="flex items-center gap-2">
              <p>Demo of the civil registry</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
