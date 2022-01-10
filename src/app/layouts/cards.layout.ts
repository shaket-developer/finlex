const cards = [
    {
        title: 'Total Money',
        footer: 'than last week',
        icon: {
            name: 'bi bi-wallet-fill',
            bgColor: '#232324',
        },
        apiCall: () => {
            return 'totalMoney.json'
        },
        data: null,
        type: 'currency'
    },
    {
        title: 'Today\'s date and time',
        footer: 'warmer today',
        icon: {
            name: 'bi bi-calendar-fill',
            bgColor: '#e31e5b',
        },
        apiCall: () => {
            return 'todayDateTime.json'
        },
        data: null,
        type: 'date'
    },
    {
        title: 'New Users today',
        footer: 'than yesterday',
        icon: {
            name: 'bi bi-person-fill',
            bgColor: '#34a051',
        },
        apiCall: () => {
            return 'newUsersToday.json'
        },
        data: null,
        type: 'number'
    },
    {
        title: 'Total Users',
        footer: 'than last month',
        icon: {
            name: 'bi bi-person-fill',
            bgColor: '#1272e0',
        },
        apiCall: () => {
            return 'newUsers.json'
        },
        data: null,
        type: 'number'
    }
];
export default cards;