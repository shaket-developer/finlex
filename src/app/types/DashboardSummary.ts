export interface SummaryData {
    data: string | number,
    footerData: number
}
interface DashboardSummary {
    title: string,
    footer: string,
    icon: {
        name: string,
        bgColor: string
    },
    apiCall: () => string,
    data: SummaryData | null,
    type: 'currency' | 'number' | 'date';
}

export default DashboardSummary;