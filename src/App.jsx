import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Network,
  ShieldCheck,
  Building2,
  Orbit,
  Activity,
  Cable,
  Server,
  CheckCircle2,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
function Button({ className = "", variant = "default", children, ...props }) {
  const base = "inline-flex items-center justify-center transition focus:outline-none focus:ring-2 focus:ring-orange-400/40 disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "",
    outline: "",
  };

  return (
    <button className={`${base} ${variants[variant] || ""} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Card({ className = "", children, ...props }) {
  return (
    <div className={`border ${className}`} {...props}>
      {children}
    </div>
  );
}

function CardContent({ className = "", children, ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full border px-4 text-sm outline-none transition focus:border-orange-400/40 focus:ring-2 focus:ring-orange-400/20 ${className}`}
      {...props}
    />
  );
}

function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full border px-4 py-3 text-sm outline-none transition focus:border-orange-400/40 focus:ring-2 focus:ring-orange-400/20 ${className}`}
      {...props}
    />
  );
}

const logos = ["Aster Grid", "NorthSpan", "Lattice Port", "Civitek", "MetroPulse", "SignalForge"];

const statItems = [
  { value: "99.97%", label: "critical network uptime across managed deployments" },
  { value: "42%", label: "faster commissioning for field infrastructure rollouts" },
  { value: "3.2x", label: "more telemetry visibility at the edge" },
];

const solutions = [
  {
    icon: Cpu,
    title: "Embedded Control Systems",
    text: "Purpose-built boards, rugged edge controllers, and firmware platforms designed for mission-critical infrastructure in harsh environments.",
  },
  {
    icon: Network,
    title: "Intelligent Network Fabric",
    text: "Low-latency industrial networking and secure device orchestration that connects sensors, assets, and operations into one resilient system.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Infrastructure Monitoring",
    text: "Always-on telemetry, anomaly detection, and system observability for transport, utilities, campuses, and connected public assets.",
  },
  {
    icon: Building2,
    title: "Smart Infrastructure Integration",
    text: "Turn fragmented equipment into coordinated digital infrastructure with unified deployment, analytics, and lifecycle support.",
  },
];

const featureColumns = [
  {
    eyebrow: "Sense",
    title: "Instrument the physical world.",
    text: "Nevro embeds intelligence directly into field hardware so roads, facilities, substations, and distributed assets can report health, load, activity, and failure risk in real time.",
    bullets: ["Rugged embedded compute", "Sensor fusion pipelines", "Edge-first firmware architecture"],
  },
  {
    eyebrow: "Connect",
    title: "Move data through resilient networks.",
    text: "From local field buses to wide-area networking, Nevro creates dependable pathways between devices, operators, and cloud services without sacrificing security or latency.",
    bullets: ["Industrial Ethernet and wireless mesh", "Segmentation and zero-trust access", "Fleet-wide device orchestration"],
  },
  {
    eyebrow: "Operate",
    title: "Turn signals into action.",
    text: "Operators get live visibility, predictive alerts, and deployment-ready insights through Nevro’s unified command layer for smart infrastructure teams.",
    bullets: ["Telemetry dashboards", "Predictive maintenance triggers", "Workflow and incident escalation"],
  },
];

const products = [
  {
    name: "Nevro EdgeOS",
    summary: "Embedded runtime for secure field controllers and industrial devices.",
    tag: "Firmware platform",
  },
  {
    name: "NerveMesh",
    summary: "Adaptive network layer for infrastructure-wide device coordination.",
    tag: "Network orchestration",
  },
  {
    name: "PulseView",
    summary: "Operational intelligence console for telemetry, alerts, and system health.",
    tag: "Observability suite",
  },
];

const cases = [
  {
    title: "Urban Mobility Corridors",
    body: "Unified roadside controllers, traffic sensors, and junction telemetry into a live edge-network fabric that reduced response times for maintenance crews and improved corridor visibility.",
  },
  {
    title: "Utility Distribution Sites",
    body: "Connected remote equipment with resilient embedded gateways and encrypted network overlays, enabling predictive maintenance and centralized diagnostics.",
  },
  {
    title: "Connected Campuses",
    body: "Integrated building systems, occupancy sensors, and power monitoring into one infrastructure command layer for safer, more efficient operations.",
  },
];

function DotGrid() {
  const dots = useMemo(
    () => Array.from({ length: 84 }, (_, i) => ({
      id: i,
      x: (i % 12) * 9,
      y: Math.floor(i / 12) * 12,
      delay: (i % 8) * 0.12,
    })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden opacity-50">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {dots.map((dot) => (
          <motion.circle
            key={dot.id}
            cx={dot.x}
            cy={dot.y}
            r="0.55"
            fill="#ff7a1a"
            animate={{ opacity: [0.12, 0.65, 0.12] }}
            transition={{ duration: 3.6, repeat: Infinity, delay: dot.delay }}
          />
        ))}
      </svg>
    </div>
  );
}

function FloatingPanel() {
  const bars = [52, 80, 61, 74, 45, 68, 88, 58];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto w-full max-w-6xl"
    >
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-orange-500/20 via-orange-300/10 to-transparent blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-orange-500/10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[300px] sm:min-h-[430px] border-b border-white/10 p-4 sm:p-6 lg:border-b-0 lg:border-r lg:p-8">
            <DotGrid />

            <div className="relative z-10 mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-orange-300">Nevro Command</div>
                <div className="mt-2 text-lg sm:text-2xl font-semibold text-white">Infrastructure nerve map</div>
              </div>
              <div className="rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-200 whitespace-nowrap">
                Live edge telemetry
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-3 sm:gap-4">
              <Card className="col-span-1 sm:col-span-2 lg:col-span-2 min-h-[280px] sm:min-h-[300px] border-white/10 bg-white/5 backdrop-blur-xl">
                <CardContent className="p-3 sm:p-5 h-full flex flex-col">
                  <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <div className="text-xs sm:text-sm text-zinc-400">Regional network health</div>
                      <div className="text-base sm:text-lg font-medium text-white">47 active infrastructure nodes</div>
                    </div>
                    <Activity className="h-4 sm:h-5 w-4 sm:w-5 text-orange-300 shrink-0" />
                  </div>
                  <div className="grid grid-cols-8 items-end gap-1 sm:gap-2 pt-4 sm:pt-8 flex-grow">
                    {bars.map((bar, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ height: 20 }}
                        animate={{ height: `${bar}%` }}
                        transition={{ duration: 1.2, delay: idx * 0.08 }}
                        className="rounded-t-lg sm:rounded-t-xl bg-gradient-to-t from-orange-600 to-orange-300"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-1 min-h-[280px] sm:min-h-[300px] border-white/10 bg-white/5 backdrop-blur-xl">
                <CardContent className="flex h-full flex-col justify-between p-3 sm:p-5">
                  <div>
                    <div className="text-xs sm:text-sm text-zinc-400">Alert status</div>
                    <div className="mt-2 text-2xl sm:text-3xl font-semibold text-white">Nominal</div>
                  </div>
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-zinc-300">
                    <div className="flex items-center justify-between"><span>Core links</span><span>Stable</span></div>
                    <div className="flex items-center justify-between"><span>Field devices</span><span>Healthy</span></div>
                    <div className="flex items-center justify-between"><span>Latency band</span><span>9ms</span></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-1 min-h-[280px] sm:min-h-[300px] border-white/10 bg-white/5 backdrop-blur-xl">
                <CardContent className="p-3 sm:p-5 h-full flex flex-col justify-center">
                  <div className="mb-4 sm:mb-6 text-xs sm:text-sm text-zinc-400">Node groups</div>
                  <div className="space-y-2 sm:space-y-3">
                    {["Transit", "Energy", "Facilities"].map((item, idx) => (
                      <div key={item} className="space-y-1">
                        <div className="flex items-center justify-between text-xs sm:text-sm text-white">
                          <span>{item}</span>
                          <span>{[94, 98, 91][idx]}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${[94, 98, 91][idx]}%` }}
                            transition={{ duration: 1.1, delay: 0.2 + idx * 0.1 }}
                            className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-300"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-1 sm:col-span-2 lg:col-span-3 min-h-[280px] sm:min-h-[300px] border-white/10 bg-gradient-to-br from-white/8 to-white/5 backdrop-blur-xl">
                <CardContent className="p-3 sm:p-5">
                  <div className="mb-4 sm:mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <div className="text-xs sm:text-sm text-zinc-400">Deployment activity</div>
                      <div className="text-sm sm:text-lg font-medium text-white">Edge devices synchronized across 12 districts</div>
                    </div>
                    <Orbit className="h-4 sm:h-5 w-4 sm:w-5 text-orange-300 shrink-0" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-300">
                    {["Gateways provisioned", "Firmware validated", "Links encrypted", "Policies applied"].map((item, idx) => (
                      <div key={item} className="rounded-lg sm:rounded-2xl border border-white/10 bg-black/20 p-2 sm:p-4">
                        <div className="mb-1 sm:mb-2 text-zinc-500 text-xs">0{idx + 1}</div>
                        <div className="font-medium text-white text-xs sm:text-sm">{item}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-orange-300">What Nevro does</div>
                <div className="mt-2 text-2xl font-semibold text-white">Embedded systems and networks for smart infrastructure</div>
              </div>
            </div>

            <div className="space-y-5 text-sm leading-7 text-zinc-300">
              <p>
                Named after the Greek word for “nerve,” Nevro builds the digital nerves of modern infrastructure: the embedded electronics, communications layers, and control systems that allow physical environments to sense, respond, and operate intelligently.
              </p>
              <p>
                We design the circuitry, firmware, networking, and operational software that help infrastructure owners modernize roads, utilities, campuses, logistics corridors, and public assets without replacing everything from scratch.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Rugged embedded compute engineered for field conditions",
                "Secure network architecture from edge device to command layer",
                "Professional services for deployment, integration, and lifecycle support",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-transparent p-5">
              <div className="text-sm text-orange-200">Featured deployment</div>
              <div className="mt-2 text-lg font-medium text-white">Smart arterial traffic and utility corridor modernization</div>
              <div className="mt-2 text-sm leading-7 text-zinc-300">
                Nevro unified roadside controllers, environmental sensing, utility equipment telemetry, and edge networking into one coordinated operations layer.
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="text-xs uppercase tracking-[0.3em] text-orange-400">{eyebrow}</div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-zinc-400 sm:text-lg">{text}</p>
    </div>
  );
}

export default function NevroLandingPage() {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,26,0.25),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_35%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />

        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-300 text-sm font-bold text-black">
              N
            </div>
            <div>
              <div className="text-lg font-semibold tracking-wide">nevro</div>
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Embedded systems & networks</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-zinc-300 lg:flex">
            <a href="#solutions" className="transition hover:text-white">Solutions</a>
            <a href="#platform" className="transition hover:text-white">Platform</a>
            <a href="#industries" className="transition hover:text-white">Industries</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#platform" className="hidden h-10 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white hover:bg-white/10 lg:inline-flex items-center justify-center whitespace-nowrap transition focus:outline-none focus:ring-2 focus:ring-orange-400/40 disabled:pointer-events-none disabled:opacity-50">
              View capabilities
            </a>
            <a href="#contact" className="h-10 rounded-full bg-orange-500 px-5 text-sm text-white hover:bg-orange-400 inline-flex items-center justify-center whitespace-nowrap transition focus:outline-none focus:ring-2 focus:ring-orange-400/40 disabled:pointer-events-none disabled:opacity-50">
              Book a consultation
            </a>
          </div>
        </header>

        <section className="relative z-10 px-6 pb-20 pt-10 lg:px-10 lg:pb-28 lg:pt-16">
          <div className="mx-auto max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-200"
            >
              <Cable className="h-4 w-4" />
              The digital nerves of smart infrastructure
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-8xl"
            >
              Embedded intelligence for infrastructure that needs to think, connect, and respond.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl"
            >
              Nevro designs embedded systems, industrial networks, and operational software for the roads, utilities, campuses, and connected assets powering modern cities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button className="h-12 rounded-full bg-orange-500 px-6 text-base text-white hover:bg-orange-400">
                Book a demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-base text-white hover:bg-white/10">
                Explore the platform
              </Button>
            </motion.div>
          </div>

          <div className="mt-16">
            <FloatingPanel />
          </div>
        </section>
      </div>

      <section className="border-y border-white/10 bg-zinc-950/60 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">Trusted by infrastructure innovators</div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm font-medium text-zinc-400 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-end">
            {logos.map((logo) => (
              <div key={logo} className="min-w-[110px] text-center lg:text-left">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Solutions"
            title="A full stack for smart infrastructure systems"
            text="Inspired by the same premium, multi-section storytelling pattern as the reference site, this concept combines a cinematic hero, trust layer, solution grid, product visuals, proof sections, and a strong CTA flow while using Nevro’s own orange-white-black identity and infrastructure-focused messaging."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                >
                  <Card className="group h-full rounded-[1.75rem] border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-orange-400/30 hover:bg-white/[0.05]">
                    <CardContent className="p-6">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-zinc-400">{item.text}</p>
                      <div className="mt-6 inline-flex items-center text-sm text-orange-300">
                        Learn more <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="platform" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Platform"
            title="From circuitry to command layer"
            text="Nevro bridges hardware engineering and network intelligence so infrastructure teams can modernize physical systems without creating new operational silos."
          />

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {products.map((product, idx) => (
                <button
                  key={product.name}
                  onClick={() => setActiveProduct(idx)}
                  className={`w-full rounded-[1.5rem] border p-5 text-left transition ${
                    activeProduct === idx
                      ? "border-orange-400/30 bg-orange-500/10"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">{product.tag}</div>
                  <div className="mt-2 text-2xl font-semibold text-white">{product.name}</div>
                  <div className="mt-3 text-sm leading-7 text-zinc-400">{product.summary}</div>
                </button>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,122,26,0.16),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.06),transparent_20%)]" />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-orange-300">Interactive visual</div>
                    <div className="mt-2 text-2xl font-semibold text-white">{products[activeProduct].name}</div>
                  </div>
                  <Server className="h-6 w-6 text-orange-300" />
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {["Field Layer", "Network Layer", "Operations Layer"].map((item, i) => (
                    <motion.div
                      key={`${products[activeProduct].name}-${item}`}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: i * 0.09 }}
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="text-sm text-zinc-500">0{i + 1}</div>
                      <div className="mt-2 text-lg font-medium text-white">{item}</div>
                      <div className="mt-2 text-sm leading-7 text-zinc-400">
                        {i === 0 && "Controllers, gateways, and embedded logic operating at the edge."}
                        {i === 1 && "Resilient routing, segmentation, and secure device coordination."}
                        {i === 2 && "Telemetry, alerts, workflows, and infrastructure intelligence."}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.75rem] border border-orange-400/20 bg-black/30 p-5">
                  <div className="flex items-center justify-between text-sm text-zinc-400">
                    <span>Reactive node activity</span>
                    <span>Live simulation</span>
                  </div>
                  <div className="mt-5 grid grid-cols-6 gap-3 sm:grid-cols-8">
                    {Array.from({ length: 24 }, (_, i) => (
                      <motion.div
                        key={i}
                        animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.08, 1] }}
                        transition={{ duration: 2.8, delay: i * 0.08, repeat: Infinity }}
                        className="aspect-square rounded-xl border border-orange-400/20 bg-gradient-to-br from-orange-500/30 to-white/5"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="How it works"
            title="Build the nerves. Connect the system. Run the environment."
            text="The name Nevro comes from the Greek word for nerve, which shapes the company story: circuits and networks act as the nervous system of modern digital infrastructure."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {featureColumns.map((column, idx) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
              >
                <Card className="h-full rounded-[1.8rem] border-white/10 bg-white/[0.03]">
                  <CardContent className="p-7">
                    <div className="text-xs uppercase tracking-[0.25em] text-orange-400">{column.eyebrow}</div>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{column.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">{column.text}</p>
                    <div className="mt-6 space-y-3">
                      {column.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-center gap-3 text-sm text-zinc-300">
                          <div className="h-2 w-2 rounded-full bg-orange-400" />
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-zinc-950 p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-orange-400">Impact</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Infrastructure systems built to perform under real-world conditions</h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-zinc-400">
                Nevro combines hardware reliability, secure networking, and operations software into one delivery model for teams modernizing critical environments.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {statItems.map((item) => (
                <div key={item.value} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-3xl font-semibold text-white">{item.value}</div>
                  <div className="mt-3 text-sm leading-7 text-zinc-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Case studies"
            title="Designed for infrastructure operators, utilities, and connected environments"
            text="Representative examples that make the company feel established and technically credible while still reading like a clean modern landing page."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {cases.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <Card className="h-full rounded-[1.75rem] border-white/10 bg-white/[0.03]">
                  <CardContent className="p-7">
                    <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">0{idx + 1}</div>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">{item.body}</p>
                    <div className="mt-6 inline-flex items-center text-sm text-orange-300">
                      View project summary <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Card className="rounded-[2rem] border-white/10 bg-white/[0.03]">
            <CardContent className="p-8 sm:p-10">
              <div className="text-xs uppercase tracking-[0.25em] text-orange-400">About Nevro</div>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Engineering the nervous system of the built world</h2>
              <p className="mt-5 text-base leading-8 text-zinc-400">
                Nevro is a technology company focused on smart infrastructure. We help organizations bring embedded intelligence and secure connectivity to environments where downtime, fragmentation, and poor visibility create operational risk.
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-400">
                Our teams work across embedded hardware, firmware, industrial networking, telemetry, and systems integration to deliver infrastructure that is measurable, resilient, and ready for scale.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-transparent">
            <CardContent className="p-8 sm:p-10">
              <div className="text-xs uppercase tracking-[0.25em] text-orange-200">Why the name fits</div>
              <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Circuits and networks are the nerves of a computer system</h3>
              <p className="mt-5 text-base leading-8 text-zinc-300">
                Just as nerves carry signals through the body, embedded electronics and data networks carry signals through infrastructure. Nevro builds those signaling pathways so physical systems can detect change, transmit information, and trigger coordinated action.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 pt-10 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-6 sm:p-8 lg:p-10">
            <div className="text-xs uppercase tracking-[0.25em] text-orange-400">Contact</div>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-5xl font-semibold text-white">See how Nevro can modernize your infrastructure stack</h2>
            <p className="mt-5 max-w-lg text-sm sm:text-base leading-7 sm:leading-8 text-zinc-400">
              Talk with our team about edge systems, network modernization, telemetry, and secure infrastructure integration.
            </p>

            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-orange-300 shrink-0" /> hello@nevro.tech</div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-orange-300 shrink-0" /> +1 (555) 240-0186</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-orange-300 shrink-0" /> Austin, Texas</div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              <Input className="h-10 sm:h-12 rounded-lg sm:rounded-2xl border-white/10 bg-black/20 text-white text-sm placeholder:text-zinc-500" placeholder="First name" />
              <Input className="h-10 sm:h-12 rounded-lg sm:rounded-2xl border-white/10 bg-black/20 text-white text-sm placeholder:text-zinc-500" placeholder="Last name" />
            </div>
            <div className="mt-3 sm:mt-4 grid gap-3 sm:gap-4 sm:grid-cols-2">
              <Input className="h-10 sm:h-12 rounded-lg sm:rounded-2xl border-white/10 bg-black/20 text-white text-sm placeholder:text-zinc-500" placeholder="Work email" />
              <Input className="h-10 sm:h-12 rounded-lg sm:rounded-2xl border-white/10 bg-black/20 text-white text-sm placeholder:text-zinc-500" placeholder="Company" />
            </div>
            <Textarea className="mt-3 sm:mt-4 min-h-[120px] sm:min-h-[140px] rounded-lg sm:rounded-[1.5rem] border-white/10 bg-black/20 text-white text-sm placeholder:text-zinc-500" placeholder="Tell us about your infrastructure environment and what you want to improve" />
            <div className="mt-4 flex flex-col gap-3 sm:gap-4 sm:items-center sm:justify-between">
              <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-zinc-500 order-2 sm:order-1">By submitting, you agree to be contacted about Nevro solutions and platform capabilities.</p>
              <Button className="h-11 sm:h-12 rounded-full bg-orange-500 px-6 text-sm text-white hover:bg-orange-400 w-full sm:w-auto order-1 sm:order-2">
                Request a demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
