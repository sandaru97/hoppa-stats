import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart';

import stats from "./stats";

class RenderRow extends Component {
    constructor(props) {
        super(props);
      }
    render() {

    return     <td key={this.props.data[key]}>{this.props.data[key]}</td>;
    }
}
class Table extends Component {


    render() {
        var html=[];

        for(var i = 0; i < stats.length; i++) {
            var obj = stats[i];
        
//html={html+<tr>{obj.key}</tr>};
html.push(<tr  key={obj.key}>{obj.key}<td>{obj.value}</td></tr>);

        }
        //html=html+"</table>";
        return (
     <div>
         <table>{html}</table>
     </div>
        
        );
        }
} 

export default function App() {
    return (
        <View style={styles.container}>
           <Text style={
                styles.title
            }>Stats / Charts</Text>
            <View style={{
                wdith:"95%",

            }}>
            <Chart
  style={{ height: "40vw", width: "70vw" }}
  data={[
    { x: 11/11/2011, y: 150 },
    { x: 12/11/2011, y: 10 },
    { x: 13/11/2011, y: 12 },
    { x: 14/11/2011, y: 17 },
    { x: 15/11/2011, y: 6 },
    { x: 16/11/2011, y: 81 },
    { x: 17/11/2011, y: 10 },
    { x: 18/11/2011, y: 8 },
    { x: 19/11/2011, y: 112 },
    { x: 10/11/2011, y: 14 },
    { x: 22/11/2011, y: 12 },
    { x: 24/11/2011, y: 18 },
  ]}
  //padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
  //xDomain={{ min: -2, max: 10 }}
 // yDomain={{ min: 0 }}
>
  <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
  <HorizontalAxis tickCount={5} />
  <Area theme={{ gradient: { from: { color: '#eb9486' }, to: { color: '#ffa502', opacity: 0.4 } }}} />
  <Line theme={{ stroke: { color: '#eb9486', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
</Chart></View>
<Table></Table>
        </View>
    );
}

const styles = StyleSheet.create({
   
    container: {
        "border-bottom": "10px solid #eb9486",
        "border-top": "10px solid #eb9486",
        "height": "100%",
        "width": "100%",
        // backgroundColor: '#d7d9b1',
        backgroundColor: '#d7d9b1',

        // "background-color":"#d7d9b1",
        display: "flex",
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        "align-items": "center",
        textAlign: 'center'
    },
    title: {
        position: "absolute",

        fontSize: "10vw",
        top: "15px"
    },
});
