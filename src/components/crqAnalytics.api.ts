// ─── CRQ Analytics API Types ─────────────────────────────────────────────────
// Wire this up to your RTK Query `api` slice once the backend is ready.
// The mock hook below mirrors the RTK Query hook signature exactly, so the
// component needs zero changes when you switch to the real endpoint.

export interface CRQAnalyticsFilterParams {
  verticalId?: number;
  teamFunctionId?: number;
  domainId?: number;
  subDomainId?: number;
  circleId?: number;
  startDate: string;
  endDate: string;
}

export interface CRQKpiSummary {
  totalCrq: number;
  openCrq: number;
  closedCrq: number;
  rejected: number;
  slaScore: number;
  totalTrendPct: number;
  openTrendPct: number;
  closedTrendPct: number;
  rejectedTrendPct: number;
  slaTrendPct: number;
}

export interface CRQWorkflowStage {
  stage: string;
  totalCount: number;
  openCount: number;
}

export interface CRQSlaDomain {
  domain: string;
  score: number;
}

export interface CRQRaisedVsClosed {
  label: string;
  raised: number;
  closed: number;
}

export interface CRQBottleneck {
  stage: string;
  avgWaitHours: number;
}

export interface CRQDomainSlaChart {
  domain: string;
  score: number;
}

export interface CRQRadarCoverage {
  subject: string;
  value: number;
}

export interface CRQDomainCount {
  domain: string;
  count: number;
}

export interface CRQAnalyticsDashboardResponse {
  status: string;
  kpi: CRQKpiSummary;
  workflowStages: CRQWorkflowStage[];
  slaDomains: CRQSlaDomain[];
  raisedVsClosed: CRQRaisedVsClosed[];
  bottlenecks: CRQBottleneck[];
  domainSlaChart: CRQDomainSlaChart[];
  radarCoverage: CRQRadarCoverage[];
  domainCrqCount: CRQDomainCount[];
}

// ─── Mock hook — mirrors RTK Query's useQuery return shape ───────────────────
// Replace with the real RTK slice export when the API is live:
//
//   import { api } from "../../../service/api";
//
//   export const crqAnalyticsApiSlice = api.injectEndpoints({
//     endpoints: (builder) => ({
//       getCRQAnalyticsDashboard: builder.query<
//         CRQAnalyticsDashboardResponse,
//         CRQAnalyticsFilterParams
//       >({
//         query: (p) => ({ url: "/crq-analytics/dashboard", method: "GET", params: p }),
//         providesTags: ["CRQ_ANALYTICS"],
//         keepUnusedDataFor: 60,
//       }),
//     }),
//     overrideExisting: false,
//   });
//
//   export const { useGetCRQAnalyticsDashboardQuery } = crqAnalyticsApiSlice;

export function useGetCRQAnalyticsDashboardQuery(_params: CRQAnalyticsFilterParams): {
  data: CRQAnalyticsDashboardResponse | undefined;
  isFetching: boolean;
  isError: boolean;
  refetch: () => void;
} {
  // Returns undefined so the component falls back to mock data — identical to
  // RTK Query's behaviour when the API has never responded successfully.
  return {
    data: undefined,
    isFetching: false,
    isError: false,
    refetch: () => undefined,
  };
}
