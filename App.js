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
        color=true;

        var html=[];
var color="black";
        for(var i = 0; i < stats.length; i++) {
            var obj = stats[i];
        
//html={html+<tr>{obj.key}</tr>};
html.push(<tr style={{"padding":"5px","border": "none",background:(color?"#B4A793":"")}} key={obj.key}>{obj.key}<td>{obj.value}</td></tr>);
color=!color;
        }
        //html=html+"</table>";
        return (
     <div>
         <table 
         cellspacing="0" cellpadding="0"
         style={{
             width:"100%",
             "border": "none",
             "font-size": "25px",
         }}
         id='stats'>{html}</table>
     </div>
        
        );
        }
} 

export default function App() {
    return (
        <View style={styles.container}>
            <View style={{display: "flex","align-items":"center",justifyContent:"center",}}>
           <Text style={
                styles.title
            }>Stats / Charts</Text>
            <Chart
  style={{ height: 400, width: "100%", }}
  data={[
    { x: -2, y: 15 },
    { x: -1, y: 10 },
    { x: 0, y: 12 },
    { x: 1, y: 7 },
    { x: 2, y: 6 },
    { x: 3, y: 8 },
    { x: 4, y: 10 },
    { x: 5, y: 8 },
    { x: 6, y: 12 },
    { x: 7, y: 14 },
    { x: 8, y: 12 },
    { x: 9, y: 13.5 },
    { x: 10, y: 18 },
  ]}
  //padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
  xDomain={{ min: -2, max: 10 }}
  yDomain={{ min: 0, max: 20 }}
>
  <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
  <HorizontalAxis tickCount={5} />
  <Area theme={{ gradient: { from: { color: '#ffa502' }, to: { color: '#ffa502', opacity: 0.4 } }}} />
  <Line theme={{ stroke: { color: '#ffa502', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
</Chart></View><br/>
            <View style={{
                wdith:"100%",
                justifyContent:"center",

            }}><br/>
            <View 
              style={{ flex:1,height: "40vw", width: "100%",position:"static", flex:1,}}
              >
        
</View></View><br/>
<View style={{paddingTop:"10px"}}>
<Table style={{width:"100%",flex:1,}}></Table>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
   
    container: {
        width:"90%",
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
        //alignItems: 'center',
       // justifyContent: 'center',
        //"align-items": "center",
        textAlign: 'center',
        justifyContent:"center",
        display: "flex",
    },
    title: {
        position: "absolute",
        fontSize: "10vw",
        top: "15px",
        display: "flex",
    },
});
