export type data = {
    data: string | number,
    footerData: number
}
type DashboardSummary = {
    title: string,
    footer: string,
    icon: {
        name: string,
        bgColor: string
    },
    apiCall: () => string,
    data: data | null,
    type: 'currency' | 'number' | 'date';
}

export default DashboardSummary;