const appCategory = [{
        "categoryName": "Books",
        "percentApps": 0.052,
        "percentPopApps": 0.004,
        id: 1
    },
    {
        "categoryName": "Business",
        "percentApps": 0.058,
        "percentPopApps": 0.002,
        id: 2
    },
    {
        "categoryName": "Comics",
        "percentApps": 0.005,
        "percentPopApps": 0.009,
        id: 3
    },
    {
        "categoryName": "Community",
        "percentApps": 0.022,
        "percentPopApps": 0.018,
        id: 4
    },
    {
        "categoryName": "Education",
        "percentApps": 0.071,
        "percentPopApps": 0.003,
        id: 5
    },
    {
        "categoryName": "Entertainment",
        "percentApps": 0.095,
        "percentPopApps": 0.009,
        id: 6
    },
    {
        "categoryName": "Finance",
        "percentApps": 0.021,
        "percentPopApps": 0.007,
        id: 7
    },
    {
        "categoryName": "Health",
        "percentApps": 0.027,
        "percentPopApps": 0.006,
        id: 8
    },
    {
        "categoryName": "Libraries",
        "percentApps": 0.003,
        "percentPopApps": 0.008,
        id: 9
    },
    {
        "categoryName": "Lifestyle",
        "percentApps": 0.072,
        "percentPopApps": 0.005,
        id: 10
    },
    {
        "categoryName": "Video Player",
        "percentApps": 0.019,
        "percentPopApps": 0.016,
        id: 11
    },
    {
        "categoryName": "Medical",
        "percentApps": 0.011,
        "percentPopApps": 0.002,
        id: 12
    },
    {
        "categoryName": "Music/Audio",
        "percentApps": 0.042,
        "percentPopApps": 0.011,
        id: 13
    },
    {
        "categoryName": "News",
        "percentApps": 0.032,
        "percentPopApps": 0.004,
        id: 14
    },
    {
        "categoryName": "Personalized Services",
        "percentApps": 0.056,
        "percentPopApps": 0.012,
        id: 15
    },
    {
        "categoryName": "Photography",
        "percentApps": 0.014,
        "percentPopApps": 0.038,
        id: 16
    },
    {
        "categoryName": "Productivity",
        "percentApps": 0.025,
        "percentPopApps": 0.016,
        id: 17
    },
    {
        "categoryName": "Shopping",
        "percentApps": 0.018,
        "percentPopApps": 0.014,
        id: 18
    },
    {
        "categoryName": "Social",
        "percentApps": 0.022,
        "percentPopApps": 0.012,
        id: 19
    },
    {
        "categoryName": "Sports",
        "percentApps": 0.026,
        "percentPopApps": 0.004,
        id: 20
    },
    {
        "categoryName": "Tools",
        "percentApps": 0.064,
        "percentPopApps": 0.016,
        id: 21
    },
    {
        "categoryName": "Transportation",
        "percentApps": 0.013,
        "percentPopApps": 0.007,
        id: 22
    },
    {
        "categoryName": "Travel",
        "percentApps": 0.041,
        "percentPopApps": 0.005,
        id: 23
    },
    {
        "categoryName": "Weather",
        "percentApps": 0.004,
        "percentPopApps": 0.022,
        id: 24
    },
    {
        "categoryName": "Games",
        "percentApps": 0.188,
        "percentPopApps": 0.032,
        id: 25
    }
]

const appType = [{
        type: "free",
        percentApps: 0.8511,
        id: 1
    },
    {
        type: "paid",
        percentApps: 0.1489,
        id: 2
    }
]

const appDiscovery = [{
        "appDiscoveryID": "1",
        "appDiscoverySource": "Through friends and family",
        "appDiscoveryPercentUsers": 0.510
    },
    {
        "appDiscoveryID": "2",
        "appDiscoverySource": "Through app store",
        "appDiscoveryPercentUsers": "0.480"
    },
    {
        "appDiscoveryID": "3",
        "appDiscoverySource": "Through app store recommendation",
        "appDiscoveryPercentUsers": 0.340
    },
    {
        "appDiscoveryID": "4",
        "appDiscoverySource": "Through mobile Ads",
        "appDiscoveryPercentUsers": 0.330
    },
    {
        "appDiscoveryID": "5",
        "appDiscoverySource": "Through online content",
        "appDiscoveryPercentUsers": "0.320"
    },
    {
        "appDiscoveryID": "6",
        "appDiscoverySource": "Through social media",
        "appDiscoveryPercentUsers": 0.320
    },
    {
        "appDiscoveryID": "7",
        "appDiscoverySource": "Through websites",
        "appDiscoveryPercentUsers": 0.310
    },
    {
        "appDiscoveryID": "8",
        "appDiscoverySource": "Through TV ads",
        "appDiscoveryPercentUsers": 0.260
    },
    {
        "appDiscoveryID": "9",
        "appDiscoverySource": "Through search engine",
        "appDiscoveryPercentUsers": 0.210
    },
    {
        "appDiscoveryID": "10",
        "appDiscoverySource": "Through youtube Ads",
        "appDiscoveryPercentUsers": 0.200
    }
]


const appUsage = [{
        appUsageId: 1,
        appUsageFrequency: "once a day",
        score: 0
    },
    {
        appUsageId: 2,
        appUsageFrequency: "few times a week",
        score: 0
    },
    {
        appUsageId: 3,
        appUsageFrequency: "once a week",
        score: 0
    },
    {
        appUsageId: 4,
        appUsageFrequency: "few times a month",
        score: 0
    },
    {
        appUsageId: 5,
        appUsageFrequency: "once a month",
        score: 0
    },
    {
        appUsageId: 6,
        appUsageFrequency: "rare",
        score: 0
    },
]

const appFeatures = [{
        id: 1,
        feature: "push notification",
        description: "",
        score: 0.00
    },
    {
        id: 2,
        feature: "geo location",
        description: "gps",
        score: 0.00
    },
    {
        id: 3,
        feature: "camera",
        description: "",
        score: 0
    },
    {
        id: 4,
        feature: "Accelerometer",
        description: "",
        score: 0
    },
    {
        id: 5,
        feature: "gyroscope",
        description: "",
        score: 0
    },
    {
        id: 6,
        feature: "Light sensor",
        description: "",
        score: 0
    }


]

const formOptions = {
    appCategory,
    appDiscovery,
    appType,
    appUsage,
    appFeatures
}

export default formOptions