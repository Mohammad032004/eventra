
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  FileBadge,
  FileCheck2,
  LayoutDashboard,
  Mail,
  Plus,
  Settings,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const stats = [
  {
    label: "Total Events",
    value: "12",
    change: "+2 this month",
    icon: CalendarDays,
    color: "bg-violet-50 text-violet-600",
  },
  {
    label: "Certificates Generated",
    value: "1,248",
    change: "+18.4% this month",
    icon: FileBadge,
    color: "bg-blue-50 text-blue-600",
  },
  {
    label: "Certificates Delivered",
    value: "1,102",
    change: "88.3% delivery rate",
    icon: Mail,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Total Participants",
    value: "864",
    change: "+12.5% this month",
    icon: Users,
    color: "bg-orange-50 text-orange-600",
  },
];

const events = [
  {
    name: "TechX Innovation Summit",
    category: "Technology",
    date: "Oct 24, 2026",
    participants: 180,
    certificates: "Ready",
    color: "bg-violet-100 text-violet-700",
    initials: "TX",
  },
  {
    name: "AI & Machine Learning Workshop",
    category: "Workshop",
    date: "Oct 28, 2026",
    participants: 95,
    certificates: "In progress",
    color: "bg-blue-100 text-blue-700",
    initials: "AI",
  },
  {
    name: "Campus Hackathon 2026",
    category: "Hackathon",
    date: "Nov 05, 2026",
    participants: 240,
    certificates: "Not started",
    color: "bg-orange-100 text-orange-700",
    initials: "CH",
  },
  {
    name: "Cybersecurity Awareness",
    category: "Seminar",
    date: "Nov 12, 2026",
    participants: 120,
    certificates: "Ready",
    color: "bg-emerald-100 text-emerald-700",
    initials: "CS",
  },
];

const activities = [
  {
    icon: FileCheck2,
    title: "Certificate batch generated",
    description: "TechX Innovation Summit · 180 certificates",
    time: "2 hours ago",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Mail,
    title: "Email delivery completed",
    description: "AI & ML Workshop · 95 participants",
    time: "Yesterday",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: CalendarDays,
    title: "New event created",
    description: "Cybersecurity Awareness",
    time: "2 days ago",
    color: "bg-blue-50 text-blue-600",
  },
];

const navigation = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Events", href: "/events", icon: CalendarDays },
  { label: "Certificates", href: "/certificates", icon: FileBadge },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex">
        <Link href="/" className="flex h-[76px] items-center gap-3 border-b border-slate-100 px-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
            <FileBadge size={22} />
          </span>
          <span className="text-2xl font-bold tracking-tight">
            eventra<span className="text-violet-600">.</span>
          </span>
        </Link>

        <div className="flex-1 space-y-7 overflow-y-auto px-4 py-7">
          <div>
            <p className="px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Workspace
            </p>
            <nav className="mt-3 space-y-1">
              {navigation.map((item, index) => {
                const Icon = item.icon;
                const active = index === 0;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-violet-50 text-violet-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                    }`}
                  >
                    <Icon size={19} />
                    {item.label}
                    {item.label === "Events" && (
                      <span className="ml-auto rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                        12
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <p className="px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Manage
            </p>
            <nav className="mt-3 space-y-1">
              <Link href="/participants" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50">
                <Users size={19} /> Participants
              </Link>
              <Link href="/verify" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50">
                <ShieldCheck size={19} /> Verification
              </Link>
              <Link href="/settings" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50">
                <Settings size={19} /> Settings
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-slate-100 p-4">
          <div className="rounded-2xl bg-slate-950 p-4 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
              <Zap size={19} className="text-violet-300" />
            </div>
            <p className="mt-3 text-sm font-semibold">Ready to scale?</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Automate your next event certificate workflow.
            </p>
            <Link href="/events/new" className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-3 py-2.5 text-xs font-semibold transition hover:bg-violet-500">
              Create an event <ArrowUpRight size={14} />
            </Link>
          </div>
          <Link href="/help" className="mt-3 flex items-center gap-2 px-2 py-2 text-sm text-slate-500 hover:text-slate-900">
            <CircleHelp size={17} /> Help and support
          </Link>
        </div>
      </aside>

      <main className="min-w-0 flex-1 lg:ml-64">
        <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-slate-200 bg-white/90 px-5 backdrop-blur-xl sm:px-8 lg:px-10">
          <div>
            <p className="text-xs text-slate-500">Workspace / Overview</p>
            <h1 className="mt-1 text-lg font-bold text-slate-950">
              Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/events/new"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700 sm:px-4"
            >
              <Plus size={17} />
              <span className="hidden sm:inline">Create event</span>
              <span className="sm:hidden">Create</span>
            </Link>
            <button
              type="button"
              aria-label="Account menu"
              className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 sm:px-3"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-xs font-bold text-violet-700">
                MA
              </span>
              <span className="hidden text-left sm:block">
                <span className="block text-xs font-semibold text-slate-800">
                  Mohammad
                </span>
                <span className="block text-[10px] text-slate-500">
                  Administrator
                </span>
              </span>
              <ChevronDown size={15} className="hidden text-slate-400 sm:block" />
            </button>
          </div>
        </header>

        <div className="mx-auto max-w-[1600px] space-y-8 p-5 sm:p-8 lg:p-10">
          <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-violet-700">
                Your workspace at a glance
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Welcome back, Mohammad 👋
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Here&apos;s what&apos;s happening with your events and certificates.
              </p>
            </div>
            <Link href="/events/new" className="inline-flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-violet-200 hover:text-violet-700 sm:self-auto">
              <Plus size={17} /> Create new event
            </Link>
          </section>

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <article key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <p className="text-sm font-medium text-slate-500">
                      {stat.label}
                    </p>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.color}`}>
                      <Icon size={20} />
                    </span>
                  </div>
                  <p className="mt-5 text-3xl font-bold tracking-tight text-slate-950">
                    {stat.value}
                  </p>
                  <p className="mt-3 flex items-center gap-1 text-xs font-medium text-emerald-600">
                    <ArrowUpRight size={14} />
                    {stat.change}
                  </p>
                </article>
              );
            })}
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.65fr_1fr]">
            <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="flex flex-col justify-between gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:px-6">
                <div>
                  <h3 className="font-bold text-slate-950">Recent events</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    A quick look at your event workspace.
                  </p>
                </div>
                <Link href="/events" className="inline-flex items-center gap-1 text-sm font-semibold text-violet-700 hover:text-violet-800">
                  View all <ArrowRight size={15} />
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] text-left">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50/70 text-[11px] uppercase tracking-wider text-slate-500">
                      <th className="px-6 py-4 font-semibold">Event</th>
                      <th className="px-4 py-4 font-semibold">Date</th>
                      <th className="px-4 py-4 font-semibold">Participants</th>
                      <th className="px-6 py-4 font-semibold">Certificates</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((event) => (
                      <tr key={event.name} className="border-b border-slate-100 last:border-0 transition hover:bg-slate-50/70">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${event.color}`}>
                              {event.initials}
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-slate-800">
                                {event.name}
                              </p>
                              <p className="mt-1 text-xs text-slate-500">
                                {event.category}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-xs text-slate-600">
                          {event.date}
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-slate-700">
                          {event.participants}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            event.certificates === "Ready"
                              ? "bg-emerald-50 text-emerald-700"
                              : event.certificates === "In progress"
                                ? "bg-amber-50 text-amber-700"
                                : "bg-slate-100 text-slate-600"
                          }`}>
                            {event.certificates}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border-t border-slate-100 p-4 text-center">
                <Link href="/events" className="text-sm font-semibold text-violet-700 hover:text-violet-800">
                  Explore all events <ArrowRight className="ml-1 inline" size={15} />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:px-6">
                <div>
                  <h3 className="font-bold text-slate-950">Recent activity</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Updates from your workspace.
                  </p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <Zap size={18} />
                </span>
              </div>

              <div className="space-y-6 p-5 sm:p-6">
                {activities.map((activity, index) => {
                  const Icon = activity.icon;

                  return (
                    <div key={activity.title} className="flex gap-3">
                      <div className="relative">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${activity.color}`}>
                          <Icon size={18} />
                        </span>
                        {index !== activities.length - 1 && (
                          <span className="absolute left-5 top-12 h-6 w-px bg-slate-200" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-800">
                          {activity.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {activity.description}
                        </p>
                        <p className="mt-2 text-[11px] text-slate-400">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-slate-100 p-5">
                <Link href="/certificates" className="flex items-center justify-between text-sm font-semibold text-violet-700 hover:text-violet-800">
                  Manage certificates <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            <Link href="/events/new" className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50 sm:p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <CalendarDays size={23} />
              </span>
              <span className="flex-1">
                <span className="block font-bold text-slate-900">
                  Create an event
                </span>
                <span className="mt-1 block text-sm text-slate-500">
                  Set up an event and manage participants.
                </span>
              </span>
              <ArrowRight size={19} className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-violet-700" />
            </Link>

            <Link href="/certificates" className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 sm:p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <FileBadge size={23} />
              </span>
              <span className="flex-1">
                <span className="block font-bold text-slate-900">
                  Generate certificates
                </span>
                <span className="mt-1 block text-sm text-slate-500">
                  Prepare certificates for your participants.
                </span>
              </span>
              <ArrowRight size={19} className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" />
            </Link>
          </section>

          <footer className="flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Eventra. All rights reserved.</p>
            <p>Made for organizers who value their time.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
