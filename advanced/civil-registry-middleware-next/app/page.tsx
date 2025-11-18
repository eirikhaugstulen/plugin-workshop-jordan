import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

export default function Home() {
  const baseButtonStyles =
    "inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-lg font-semibold transition focus-visible:outline-2 focus-visible:outline-slate-900";
  const primaryButtonStyles =
    "border-slate-900 bg-slate-900 text-white hover:bg-slate-800";
  const secondaryButtonStyles =
    "border-slate-900 bg-white text-slate-900 hover:bg-slate-100";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-10 text-center font-sans text-slate-900">
      <main className="max-w-xl rounded-3xl border border-slate-200 bg-white/80 p-10 backdrop-blur">
        <h1 className="mb-4 text-2xl font-semibold">Plugin workshop</h1>
        <h2 className="mb-4 text-xl font-semibold">Amman, Jordan</h2>
        <p className="mb-8 text-slate-600">
          Here is a collection of resources for the workshop on November 15th-20th 2025.
        </p>
        <div className="flex flex-col gap-4">
          <Link
            href="https://github.com/eirikhaugstulen/plugin-workshop-jordan"
            target="_blank"
            className={`${baseButtonStyles} ${primaryButtonStyles}`}>
            <div className="flex items-center gap-2">
              <p>Workshop repository</p>
              <ExternalLinkIcon className="w-4 h-4" />
            </div>
          </Link>
          {/* <Link
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=IsozpdPFJEeBvdsRTjluzgnWW2p0IxdDjvh0b9HCvu9UQjYwVkY0RlpOUVpQRFJWNTdLTFQ3V05DVS4u"
            target="_blank"
            className={`${baseButtonStyles} ${secondaryButtonStyles}`}>
            <div className="flex items-center gap-2">
              <p>Training survey</p>
              <ExternalLinkIcon className="w-4 h-4" />
            </div>
          </Link> */}
          {/* <Link
            href="https://dev.im.dhis2.org/tracker-plugins"
            target="_blank"
            className={`${baseButtonStyles} ${secondaryButtonStyles}`}>
            <div className="flex items-center gap-2">
              <p>Demo instance</p>
              <ExternalLinkIcon className="w-4 h-4" />
            </div>
          </Link> */}
          <Link
            href="https://github.com/eirikhaugstulen/jordan-node-server-middleware"
            target="_blank"
            className={`${baseButtonStyles} ${secondaryButtonStyles}`}
          >
            <div className="flex items-center gap-2">
              <p>Node middleware repository</p>
              <ExternalLinkIcon className="w-4 h-4" />
            </div>
          </Link>
          <Link
            href="https://developers.dhis2.org/docs/capture-plugins/developer/getting-started"
            target="_blank"
            className={`${baseButtonStyles} ${secondaryButtonStyles}`}
          >
            <div className="flex items-center gap-2">
              <p>Developer documentation</p>
              <ExternalLinkIcon className="w-4 h-4" />
            </div>
          </Link>
          <Link
            href="https://developers.dhis2.org/demo"
            target="_blank"
            className={`${baseButtonStyles} ${secondaryButtonStyles}`}
          >
            <div className="flex items-center gap-2">
              <p>@dhis2/ui documentation</p>
              <ExternalLinkIcon className="w-4 h-4" />
            </div>
          </Link>
          <Link
            href="https://github.com/eirikhaugstulen/jordan-enrollment-plugin-template"
            target="_blank"
            className={`${baseButtonStyles} ${secondaryButtonStyles}`}>
            <div className="flex items-center gap-2">
              <p>Enrollment plugin template</p>
              <ExternalLinkIcon className="w-4 h-4" />
            </div>
          </Link>
          <Link
            href="/civil-registry"
            className={`${baseButtonStyles} ${secondaryButtonStyles}`}
          >
            <div className="flex items-center gap-2">
              <p>Demo of the civil registry</p>
            </div>
          </Link>
          <a
            href="https://hzltgqabooemwjvfowfg.supabase.co/storage/v1/object/public/capture/route-manager-100.4.2.zip"
            download="route-manager-100.4.2.zip"
            className={`${baseButtonStyles} ${secondaryButtonStyles}`}
          >
            <div className="flex items-center gap-2">
              <p>Download route manager app</p>
            </div>
          </a>
          <div className="mt-8 flex justify-end">
            <Image
              src="/uio-logo.png"
              alt="UiO HISP Centre logo"
              width={220}
              height={80}
              className="h-auto w-auto max-w-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
