import React, { Component } from 'react';
import LineChart from 'react-linechart';
import {bitcoinService} from '../services/bitcoinService'
 
export default class StatisticPage extends Component {
    state = {
        data: null,
    }

    componentDidMount(){
        this.loadChartMarketPrice()
    }

    async loadChartMarketPrice(){
        try {
        const price = await bitcoinService.getMarketPrice()
       const  data = [
            {				
                color: "blue", 
                points: price
            }
        ];
        this.setState({data})

        } catch (err) {
          console.log('err:', err)
        }
    }

    render() {
        const {data} = this.state
        
        if(!data)return <div>Loading..</div>
        return (
            <div>
                <div className="App">
                    <h1>Market Price</h1>
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
