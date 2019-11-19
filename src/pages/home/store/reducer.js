import * as constants from './constants';

//link https://dev.heweather.com/docs/api/weather
const defaultState = ({
    //定位信息
    geoPosition: {
        addressComponent: {
            district: '',
            township: '',
        },
    },
    //当前天气
    nowWeather: {},
    //未来天气
    dailyForecastList: [],
    //生活指数
    lifestyle: [],
    airNowCity: {},
    hourlyList: [],
});


export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.ADD_CURRENT_POSITION:
            return {
                ...state,
                geoPosition: action.geoPosition,
            };
            break;
        case constants.ADD_NOW_WEATHER:
            return {
                ...state,
                nowWeather: action.nowWeather,
            };
            break;
        case constants.ADD_DAILY_FORECAST:
            return {
                ...state,
                dailyForecastList: action.dailyForecastList,
            };
            break;
        case constants.ADD_TODAY_LIFESTYLE:
            return {
                ...state,
                lifestyle: action.lifestyle,
            };
            break;
        case constants.ADD_AIR_NOW_CITY:
            return {
                ...state,
                airNowCity: action.airNowCity,
            };
            break;
        case constants.ADD_HOURLY_WEATHER:
            return {
                ...state,
                hourlyList: action.hourlyList,
            };
        default:
            return state;
    }
}
