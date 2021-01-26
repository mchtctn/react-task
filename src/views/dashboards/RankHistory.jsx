import React, { Component } from 'react';
import ApexCharts from 'react-apexcharts'


class RankHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
            series: this.prepareState(),
            options: {
                chart: {
                    height: 350,
                    type: 'area',
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: this.topChart.map(chart => chart.date)
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy'
                    },
                },
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ApexCharts options={this.state.options} series={this.state.series} type="area" height={300} />
            </div>
        );  
    }

    prepareState(){
        let apps = []
        this.topChart.map(chart => {
            chart.apps.map(ch => {
                let obj = apps.find(app => app.id === ch.id)
                if(obj){
                    obj.data.push(ch.rank)
                }
                else{
                    apps.push({id: ch.id, name: ch.name, data: [ch.rank]})
                }
            })
        })

        return apps;
    }

    topChart = [
        {
         date : "2020-10-10",
         apps : [
            {
               id : 1,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 2,
               iconName : "driveClimberIcon"
            },
            {
               id : 2,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 4,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 3,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 3,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 4,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 5,
               iconName : "driveClimberIcon"
            },
            {
               id : 5,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 1,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 6,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 7,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 7,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 6,
               iconName : "driveClimberIcon"
            },
            {
               id : 8,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 9,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 9,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 8,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 10,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 10,
               iconName : "bowMaster_multiplayerGameIcon"
            }
         ]   
        },
        {
         date : "2020-10-11",
         apps : [
            {
               id : 1,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 8,
               iconName : "driveClimberIcon"
            },
            {
               id : 2,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 6,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 3,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 7,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 4,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 9,
               iconName : "driveClimberIcon"
            },
            {
               id : 5,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 10,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 6,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 4,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 7,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 2,
               iconName : "driveClimberIcon"
            },
            {
               id : 8,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 3,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 9,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 1,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 10,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 5,
               iconName : "bowMaster_multiplayerGameIcon"
            }
         ]   
        },
        {
         date : "2020-10-12",
         apps : [
            {
               id : 1,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 9,
               iconName : "driveClimberIcon"
            },
            {
               id : 2,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 2,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 3,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 1,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 4,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 8,
               iconName : "driveClimberIcon"
            },
            {
               id : 5,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 5,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 6,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 4,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 7,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 3,
               iconName : "driveClimberIcon"
            },
            {
               id : 8,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 10,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 9,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 6,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 10,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 7,
               iconName : "bowMaster_multiplayerGameIcon"
            }
         ]   
        },
        {
         date : "2020-10-13",
         apps : [
            {
               id : 1,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 8,
               iconName : "driveClimberIcon"
            },
            {
               id : 2,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 3,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 3,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 4,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 4,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 9,
               iconName : "driveClimberIcon"
            },
            {
               id : 5,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 2,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 6,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 5,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 7,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 6,
               iconName : "driveClimberIcon"
            },
            {
               id : 8,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 1,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 9,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 7,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 10,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 10,
               iconName : "bowMaster_multiplayerGameIcon"
            }
         ]   
        },
        {
         date : "2020-10-14",
         apps : [
            {
               id : 1,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 7,
               iconName : "driveClimberIcon"
            },
            {
               id : 2,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 6,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 3,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 4,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 4,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 10,
               iconName : "driveClimberIcon"
            },
            {
               id : 5,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 9,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 6,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 8,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 7,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 1,
               iconName : "driveClimberIcon"
            },
            {
               id : 8,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 2,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 9,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 5,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 10,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 3,
               iconName : "bowMaster_multiplayerGameIcon"
            }
         ]   
        },
        {
         date : "2020-10-15",
         apps : [
            {
               id : 1,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 3,
               iconName : "driveClimberIcon"
            },
            {
               id : 2,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 5,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 3,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 10,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 4,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 1,
               iconName : "driveClimberIcon"
            },
            {
               id : 5,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 2,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 6,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 7,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 7,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 4,
               iconName : "driveClimberIcon"
            },
            {
               id : 8,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 9,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 9,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 8,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 10,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 6,
               iconName : "bowMaster_multiplayerGameIcon"
            }
         ]   
        },
        {
         date : "2020-10-16",
         apps : [
            {
               id : 1,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 6,
               iconName : "driveClimberIcon"
            },
            {
               id : 2,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 4,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 3,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 5,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 4,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 2,
               iconName : "driveClimberIcon"
            },
            {
               id : 5,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 8,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 6,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 10,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 7,
               name : "Drive Climber",
               publisher : "Vodoo",
               rating : 4,
               country : "FR",
               rank : 9,
               iconName : "driveClimberIcon"
            },
            {
               id : 8,
               name : "Facebook Messenger",
               publisher : "Facebook",
               rating : 2,
               country : "US",
               rank : 7,
               iconName : "facebookMessengerIcon"
            },
            {
               id : 9,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 1,
               iconName : "bowMaster_multiplayerGameIcon"
            },
            {
               id : 10,
               name : "Bowmaster-Multiplayer Game",
               publisher : "Playgendary",
               rating : 4,
               country : "UK",
               rank : 3,
               iconName : "bowMaster_multiplayerGameIcon"
            }
         ]   
        }
    ]
}
 
export default RankHistory;