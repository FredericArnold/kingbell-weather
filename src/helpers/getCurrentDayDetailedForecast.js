const currentDayForecast = data => [
    {
        name: 'Prévisions',
        value: data.predictability,
        unit: '%',
    },
    {
        name: 'humidité',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'vent',
        value: Math.round(data.wind_speed),
        unit: 'km/h',
    },
    {
        name: 'pression de l\'air',
        value: data.air_pressure,
        unit: 'mb',
    },
    {
        name: 'temp max ',
        value: Math.round(data.max_temp),
        unit: '°C',
    },
    {
        name: 'temp min ',
        value: Math.round(data.min_temp),
        unit: '°C',
    },
];

export default currentDayForecast;
