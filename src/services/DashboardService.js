import axios from "axios";

export function getTopChart() {
    return axios.get('assets/dataset/topChart.json')
        .then(res => res.data.topChart)
        .then(data => {
            return data;
        });
}

export function getTodayAppData() {

    return axios.get('assets/dataset/topChart.json')
        .then(res => res.data.topChart)
        .then(data => {
            let todayApps = data[data.length-1].apps;
            todayApps.map(today => {
                data[data.length-2].apps.map(lastDay => {
                    if(today.id === lastDay.id){
                        today.rankDiff = today.rank - lastDay.rank
                    }
                })
           })
           return todayApps;
        });
}