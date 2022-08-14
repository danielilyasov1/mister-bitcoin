import React, { Component } from 'react';
import LineChart from 'react-linechart';
import {bitcoinService} from '../services/bitcoinService'
 
export default class StatisticPage extends Component {
    state = {
        price: null,
    }

    componentDidMount(){
        this.loadChartMarketPrice()
    }

    async loadChartMarketPrice(){
        try {
        const price = await bitcoinService.getMarketPrice()
        this.setState({price})
        } catch (err) {
          console.log('err:', err)
        }
      }

    render() {
        const {price} = this.state
        console.log("p",price);
        const data = [
            {				
                //need to ask why i cant get price to points					
                color: "blue", 
                points: [{x: 1647475200, y: 41133.08},{x: 1647561600, y: 40946.78},{x: 1647648000, y: 41795.77},{x: 1647734400, y: 42222.32},{x: 1647820800, y: 41250.83},{x: 1647907200, y: 41071.41}]
            }
        ];
        return (
            <div>
                <div className="App">
                    <h1>My First LineChart</h1>
                    <LineChart 
                        width={800}
                        height={400}
                        data={data}
                    />
                </div>				
            </div>
        );
    }
}
