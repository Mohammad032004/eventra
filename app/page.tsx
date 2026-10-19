
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronRight,
  FileBadge,
  FileCheck2,
  Layers3,
  Mail,
  Menu,
  QrCode,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: FileBadge,
    title: "Bulk Certificate Generation",
    description:
      "Generate hundreds of personalized certificates from a single participant list.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: Mail,
    title: "Automated Delivery",
    description:
      "Deliver individual certificates to participants by email without repetitive manual work.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: ShieldCheck,
    title: "Certificate Verification",
    description:
      "Give every certificate a unique identity and make authenticity easy to verify.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Users,
    title: "Participant Management",
    description:
      "Organize participant lists and keep event records in one convenient workspace.",
    color: "bg-orange-100 text-orange-700",
  },
  {
    icon: Layers3,
    title: "Reusable Templates",
    description:
      "Maintain consistent branding across workshops, hackathons, and college events.",
    color: "bg-pink-100 text-pink-700",
  },
  {
    icon: Zap,
    title: "Faster Workflows",
    description:
      "Replace repetitive certificate tasks with a simple, organized workflow.",
    color: "bg-amber-100 text-amber-700",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your event",
    description:
      "Add your event details and organize your participant information.",
  },
  {
    number: "02",
    title: "Generate certificates",
    description:
      "Choose a template and personalize certificates for every participant.",
  },
  {
    number: "03",
    title: "Deliver and verify",
    description:
      "Send certificates and make their authenticity verifiable online.",
  },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-200">
        <FileBadge size={23} />
      </span>
      <span className="text-2xl font-bold tracking-tight text-slate-950">
        eventra<span className="text-violet-600">.</span>
      </span>
    </Link>
  );
}

function CertificatePreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-5 top-16 h-32 w-32 rounded-full bg-violet-300/40 blur-3xl" />
      <div className="absolute -right-5 bottom-10 h-32 w-32 rounded-full bg-blue-300/40 blur-3xl" />

      <div className="relative rounded-3xl border border-white bg-white p-4 shadow-2xl shadow-slate-900/10 sm:p-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <p className="text-sm font-semibold text-slate-950">
              Certificate preview
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Eventra certificate studio
            </p>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
            <Check className="mr-1 inline" size={13} />
            Ready to generate
          </span>
        </div>

        <div className="my-5 border-2 border-violet-200 bg-gradient-to-br from-white via-violet-50/40 to-white p-5 sm:p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-white">
                <Sparkles size={19} />
              </div>
              <span className="font-bold tracking-tight text-slate-900">
                eventra.
              </span>
            </div>
            <BadgeCheck className="text-violet-600" size={30} />
          </div>

          <div className="py-8 text-center sm:py-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-600 sm:text-xs">
              Certificate of participation
            </p>
            <h3 className="mt-5 font-serif text-2xl text-slate-900 sm:text-3xl">
              Certificate
            </h3>
            <p className="mt-3 text-xs text-slate-500">
              This certificate is proudly presented to
            </p>
            <p className="mt-3 border-b border-violet-200 pb-2 font-serif text-xl italic text-violet-800 sm:text-2xl">
              Alex Johnson
            </p>
            <p className="mx-auto mt-4 max-w-xs text-xs leading-5 text-slate-500">
              For active participation in the Innovation & Technology Summit.
            </p>
          </div>

          <div className="flex items-end justify-between gap-3">
            <div className="border-t border-slate-300 pt-2">
              <p className="text-xs font-semibold text-slate-800">
                Event Organizer
              </p>
              <p className="mt-1 text-[10px] text-slate-500">
                Authorized signature
              </p>
            </div>
            <div className="text-right">
              <QrCode className="ml-auto text-violet-700" size={35} />
              <p className="mt-1 text-[9px] text-slate-500">
                EV-2026-001
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-slate-50 p-3">
          <div className="flex items-center gap-2">
            <FileCheck2 className="text-violet-600" size={19} />
            <div>
              <p className="text-xs font-semibold text-slate-800">
                Personalized PDF
              </p>
              <p className="text-[10px] text-slate-500">
                Preview demonstration
              </p>
            </div>
          </div>
          <span className="rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm">
            PDF document
          </span>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-2 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:flex">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          <Mail size={20} />
        </span>
        <div>
          <p className="text-sm font-semibold text-slate-900">
            Delivery workflow
          </p>
          <p className="text-xs text-slate-500">
            Ready for automation
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Logo />

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-slate-600 transition hover:text-violet-700"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 transition hover:text-violet-700"
            >
              How it works
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-violet-700"
            >
              About
            </Link>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/login"
              className="px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:text-violet-700"
            >
              Log in
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              Get started <ArrowUpRight size={16} />
            </Link>
          </div>

          <details className="group relative sm:hidden">
            <summary
              aria-label="Toggle navigation menu"
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200 text-slate-700"
            >
              <Menu size={21} />
            </summary>
            <div className="absolute right-0 top-14 flex w-56 flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
              <Link href="#features" className="rounded-lg p-3 text-sm hover:bg-slate-50">
                Features
              </Link>
              <Link href="#how-it-works" className="rounded-lg p-3 text-sm hover:bg-slate-50">
                How it works
              </Link>
              <Link href="#about" className="rounded-lg p-3 text-sm hover:bg-slate-50">
                About
              </Link>
              <Link href="/login" className="rounded-lg p-3 text-sm hover:bg-slate-50">
                Log in
              </Link>
              <Link
                href="/dashboard"
                className="rounded-lg bg-violet-600 p-3 text-center text-sm font-semibold text-white"
              >
                Get started
              </Link>
            </div>
          </details>
        </nav>
      </header>

      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.12),transparent_42%),radial-gradient(ellipse_at_bottom_right,rgba(96,165,250,0.10),transparent_40%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-2 text-xs font-semibold text-violet-700 sm:text-sm">
              <Sparkles size={15} />
              A smarter way to manage event certificates
            </div>

            <h1 className="mt-7 max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Every event.
              <br />
              Every certificate.
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Effortlessly.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Create events, generate personalized certificates in bulk, and
              simplify delivery and verification with one organized platform.
              Spend less time on paperwork and more time creating experiences.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700"
              >
                Get started <ArrowRight size={17} />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-violet-200 hover:bg-violet-50"
              >
                See how it works <ChevronRight size={17} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <Check className="text-emerald-600" size={16} />
                Bulk generation
              </span>
              <span className="flex items-center gap-2">
                <Check className="text-emerald-600" size={16} />
                Personalized PDFs
              </span>
              <span className="flex items-center gap-2">
                <Check className="text-emerald-600" size={16} />
                Easy verification
              </span>
            </div>
          </div>

          <CertificatePreview />
        </div>
      </section>

      <section id="features" className="border-y border-slate-100 bg-slate-50/70 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Everything in one place
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Less manual work. More meaningful events.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              The essential tools for managing certificates before, during,
              and after your event.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/60"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}
                  >
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-violet-700">
                    Explore feature <ArrowRight size={15} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              A simple workflow
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              From event to certificate in three steps.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              One consistent process to help your team manage certificates
              without repetitive tasks.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.number} className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-lg font-bold text-violet-700">
                  {step.number}
                </div>
                {index !== steps.length - 1 && (
                  <div className="absolute left-16 top-7 hidden h-px w-[calc(100%-2rem)] border-t border-dashed border-violet-200 md:block" />
                )}
                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-violet-200">
                <Sparkles size={14} /> Built for event organizers
              </div>
              <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Make every achievement easier to recognize.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                From student workshops to large-scale hackathons, Eventra
                brings your certificate workflow into one place.
              </p>
            </div>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-violet-50"
            >
              Start with Eventra <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <Logo />
          <p className="text-sm text-slate-500">
            Every Event. Every Certificate. Effortlessly.
          </p>
          <p className="text-sm text-slate-500">
            © 2026 Eventra. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
