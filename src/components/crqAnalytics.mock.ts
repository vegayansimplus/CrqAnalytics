// ─── Static mock data for CRQ Analytics Dashboard ───────────────────────────
// Exported shapes match the API response interfaces 1-to-1 so the component
// can use mock data as a drop-in fallback with no conditional type casting.

import type {
  CRQWorkflowStage,
  CRQSlaDomain,
  CRQRaisedVsClosed,
  CRQBottleneck,
  CRQDomainSlaChart,
  CRQRadarCoverage,
  CRQDomainCount,
} from "./crqAnalytics.api";

export const kpiCards = [
  {
    id: "total",
    label: "Total CRQ",
    value: 120,
    sub: "All requests",
    color: "#38bdf8",
    iconBg: "rgba(56,189,248,0.15)",
    icon: "📊",
    expandable: true,
    trend: 8,
  },
  {
    id: "open",
    label: "Open CRQ",
    value: 48,
    sub: "In progress",
    color: "#fb923c",
    iconBg: "rgba(251,146,60,0.15)",
    icon: "🔓",
    expandable: true,
    trend: -3,
  },
  {
    id: "closed",
    label: "Closed CRQ",
    value: 62,
    sub: "Completed",
    color: "#4ade80",
    iconBg: "rgba(74,222,128,0.15)",
    icon: "✅",
    expandable: false,
    trend: 12,
  },
  {
    id: "rejected",
    label: "Rejected",
    value: 10,
    sub: "Declined",
    color: "#f87171",
    iconBg: "rgba(248,113,113,0.15)",
    icon: "❌",
    expandable: false,
    trend: -2,
  },
  {
    id: "sla",
    label: "SLA Score",
    value: "87%",
    sub: "On-time rate",
    color: "#8b5cf6",
    iconBg: "rgba(139,92,246,0.15)",
    icon: "🎯",
    expandable: true,
    trend: 1.2,
  },
] as const;

export const workflowStages: CRQWorkflowStage[] = [
  { stage: "Authorization Approval",   totalCount: 18, openCount: 8 },
  { stage: "MOP Creation",             totalCount: 15, openCount: 7 },
  { stage: "Plan & Inventory Valid.",  totalCount: 14, openCount: 6 },
  { stage: "MOP Validation",           totalCount: 12, openCount: 5 },
  { stage: "Impact Analysis",          totalCount: 16, openCount: 7 },
  { stage: "CMB Approval",             totalCount: 13, openCount: 5 },
  { stage: "Impact Approval",          totalCount: 17, openCount: 8 },
  { stage: "Network Execution",        totalCount: 15, openCount: 2 },
];

export const slaDomains: CRQSlaDomain[] = [
  { domain: "Core Network", score: 92 },
  { domain: "Access",       score: 85 },
  { domain: "Transport",    score: 78 },
  { domain: "IP / MPLS",   score: 95 },
  { domain: "Transmission", score: 82 },
  { domain: "Enterprise",   score: 89 },
];

export const raisedVsClosed: CRQRaisedVsClosed[] = [
  { label: "Jan", raised: 28, closed: 22 },
  { label: "Feb", raised: 32, closed: 28 },
  { label: "Mar", raised: 25, closed: 20 },
  { label: "Apr", raised: 38, closed: 30 },
  { label: "May", raised: 30, closed: 25 },
  { label: "Jun", raised: 42, closed: 38 },
  { label: "Jul", raised: 35, closed: 30 },
];

export const bottlenecks: CRQBottleneck[] = [
  { stage: "MOP Creation",    avgWaitHours: 48 },
  { stage: "Impact Analysis", avgWaitHours: 36 },
  { stage: "CMB Approval",    avgWaitHours: 28 },
  { stage: "Auth Approval",   avgWaitHours: 20 },
  { stage: "Network Exec.",   avgWaitHours: 16 },
];

export const domainSlaChart: CRQDomainSlaChart[] = [
  { domain: "Core",    score: 92 },
  { domain: "Access",  score: 85 },
  { domain: "Trans.",  score: 78 },
  { domain: "IP/MPLS", score: 95 },
  { domain: "Tx",      score: 82 },
  { domain: "Ent.",    score: 89 },
];

export const radarData: { labels: string[]; values: number[] } = {
  labels: ["Core", "Access", "Transport", "IP/MPLS", "Transmission", "Enterprise"],
  values: [88, 72, 85, 91, 67, 79],
};

// Derived shape used by the component
export const radarCoverage: CRQRadarCoverage[] = radarData.labels.map(
  (subject, i) => ({ subject, value: radarData.values[i] }),
);

export const domainCRQ: CRQDomainCount[] = [
  { domain: "Core",    count: 32 },
  { domain: "Access",  count: 24 },
  { domain: "Trans.",  count: 18 },
  { domain: "IP/MPLS", count: 16 },
  { domain: "Tx",      count: 12 },
  { domain: "Ent.",    count: 10 },
  { domain: "Others",  count: 8 },
];
