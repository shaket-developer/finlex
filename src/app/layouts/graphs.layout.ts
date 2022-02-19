import { Color } from "chart.js";

interface dataset {
    data?: number[],
    pointStyle? : 'circle' | 'cross' | 'crossRot' | 'dash' | 'line' | 'rect' | 'rectRounded' | 'rectRot' | 'star' | 'triangle',
    barThickness?: number,
    borderRadius?: {
        topLeft: number,
        bottomLeft: number,
        topRight: number,
        bottomRight: number,
    },
    backgroundColor?: Color,
    borderColor?: Color,
    radius?: number,
}

interface BasicDataBar {
    labels?: string[],
    datasets: dataset[]
}

interface graph {
    title: string,
    subTitle: string,
    footer: string,
    icon: {
        name: string,
    },
    apiCall: () => string,
    type: 'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'scatter',
    bgColor: Color,
    generalSetting: BasicDataBar,
    styleSetting: any,
}

const graphs: graph[] = [
    {
        title: 'Website Views',
        subTitle: 'Last Campaign Performance',
        footer: 'campaign sent 2 days ago',
        icon: {
            name: 'bi bi-clock',
        },
        apiCall: () => {
            return 'website-views.json'
        },
        type: 'bar',
        bgColor: '#e31e5b',
        generalSetting: {
            datasets: [
                {
                  data: [],
                  pointStyle : 'circle',
                  barThickness: 6,
                  borderRadius: {
                    topLeft: 20,
                    bottomLeft: 20,
                    topRight: 20,
                    bottomRight: 20,
                  },
                  backgroundColor: 'white',
                  borderColor: 'white',
                  radius: 3,
                }
            ],
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        },
        styleSetting: {
            pointStyle: 'star',
            cornerRadius: 20,
            showLabelBackdrop: false,
            plugins: {
                legend: {
                    labels: {
                        display: false
                    },
                    display: false
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: 'white',
                        padding	: 10
                    },
                    grid: {
                        borderDash: [1, 1],
                        color: 'rgba(255,255,255,0.2)',
                        offset: true,
                        drawTicks: false,
                        drawBorder: false,
                        padding: 100
                    }
                },
                y: {
                    grace: '15%',
                    stacked: true,
                    ticks: {
                        color: 'white',
                        max: 2,
                        padding	: 10,
                        callback: function (item: number, index: number): any {
                            if (!(index % 2)) return item;
                        }
                    },
                    grid: {
                        borderDash: [1, 1],
                        color: 'rgba(255,255,255,0.2)',
                        drawTicks: false,
                        drawBorder: false,         
                    }
                }
            }
        }
    },
    {
        title: 'Daily Sales',
        subTitle: '(+51%) increase in today sales',
        footer: 'updated 4 minutes ago',
        icon: {
            name: 'bi bi-clock',
        },
        apiCall: () => {
            return 'daily-sales.json'
        },
        type: 'line',
        bgColor: '#34a051',
        generalSetting: {
            datasets: [
                {
                  data: [],
                  pointStyle : 'circle',
                  barThickness: 6,
                  borderRadius: {
                    topLeft: 20,
                    bottomLeft: 20,
                    topRight: 20,
                    bottomRight: 20,
                  },
                  backgroundColor: 'white',
                  borderColor: 'white',
                  radius: 3,
                }
            ],
            labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        styleSetting: {
            pointStyle: 'star',
            cornerRadius: 20,
            plugins: {
                legend: {
                    labels: {
                        display: false
                    },
                    display: false
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        borderDash: [1, 1],
                        color: 'transparent',
                        offset: true
                    }
                },
                y: {
                    grace: '15%',
                    stacked: true,
                    ticks: {
                        color: 'white',
                        padding	: 10,
                        callback: function (item: number, index: number): any {
                            if (!(index % 2)) return item;
                        }
                    },
                    grid: {
                        borderDash: [1, 1],
                        color: 'white',
                        drawTicks: false,
                        drawBorder: false,  
                    }
                }
            }
        }
    },
    {
        title: 'Completed Tasks',
        subTitle: 'Last Campaign Performance',
        footer: 'just updated',
        icon: {
            name: 'bi bi-clock',
        },
        apiCall: () => {
            return 'completed-tasks.json'
        },
        bgColor: '#232324',
        type: 'line',
        generalSetting: {
            datasets: [
                {
                  data: [],
                  pointStyle : 'circle',
                  barThickness: 6,
                  borderRadius: {
                    topLeft: 20,
                    bottomLeft: 20,
                    topRight: 20,
                    bottomRight: 20,
                  },
                  backgroundColor: 'white',
                  borderColor: 'white',
                  radius: 3,
                }
            ],
            labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        styleSetting: {
            pointStyle: 'star',
            cornerRadius: 20,
            plugins: {
                legend: {
                    labels: {
                        display: false
                    },
                    display: false
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        borderDash: [1, 1],
                        color: 'rgba(255,255,255,0.2)',
                        offset: true
                    }
                },
                y: {
                    grace: '15%',
                    stacked: true,
                    ticks: {
                        color: 'white',
                        callback: function (item: number, index: number): any {
                            if (!(index % 2)) return item;
                        }
                    },
                    grid: {
                        borderDash: [1, 1],
                        color: 'transparent',
                    }
                }
            }
        }
    }
];
export default graphs;