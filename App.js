/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
  Area,
} from 'react-native-responsive-linechart';

const data1 = [
  {x: -2, y: 1},
  {x: -1, y: 0},
  {x: 8, y: 13},
  {x: 9, y: 11.5},
  {x: 10, y: 12},
];

const data2 = [
  {x: -2, y: 15},
  {x: -1, y: 10},
  {x: 0, y: 12},
  {x: 1, y: 7},
  {x: 8, y: 12},
  {x: 9, y: 13.5},
  {x: 10, y: 18},
];
const App = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          margin: 15,
          // flex: 1,
          // backgroundColor: 'red',
          //flex: 1,
        }}>
        <ScrollView>
          <Chart
            style={{height: 200, width: '100%'}}
            xDomain={{min: -2, max: 10}}
            yDomain={{min: -2, max: 20}}
            padding={{left: 20, top: 10, bottom: 10, right: 10}}>
            <VerticalAxis tickValues={[0, 4, 8, 12, 16, 20]} />
            <HorizontalAxis tickCount={3} />
            <Line
              data={data1}
              smoothing="none"
              theme={{stroke: {color: 'red', width: 2}}}
            />
            <Line
              data={data2}
              smoothing="cubic-spline"
              theme={{stroke: {color: 'blue', width: 1}}}
            />
          </Chart>
          <Chart
            style={{height: 200, width: '100%'}}
            data={[
              {x: -2, y: 15},
              {x: -1, y: 10},
              {x: 0, y: 12},
              {x: 1, y: 7},
              {x: 2, y: 6},
              {x: 3, y: 8},
              {x: 4, y: 10},
              {x: 5, y: 8},
              {x: 6, y: 12},
              {x: 7, y: 14},
              {x: 8, y: 12},
              {x: 9, y: 13.5},
              {x: 10, y: 18},
            ]}
            padding={{left: 40, bottom: 20, right: 20, top: 20}}
            xDomain={{min: -2, max: 10}}
            yDomain={{min: 0, max: 20}}>
            <VerticalAxis
              tickCount={11}
              theme={{labels: {formatter: v => v.toFixed(2)}}}
            />
            <HorizontalAxis tickCount={5} />
            <Area
              theme={{
                gradient: {
                  from: {color: '#ffa502'},
                  to: {color: '#ffa502', opacity: 0.4},
                },
              }}
            />
            <Line
              theme={{
                stroke: {color: '#ffa502', width: 5},
                scatter: {default: {width: 4, height: 4, rx: 2}},
              }}
            />
          </Chart>
          <Chart
            style={{height: 200, width: '100%'}}
            xDomain={{min: -2, max: 10}}
            yDomain={{min: -2, max: 20}}
            padding={{left: 20, top: 10, bottom: 10, right: 10}}>
            <VerticalAxis tickValues={[0, 4, 8, 12, 16, 20]} />
            <HorizontalAxis tickCount={3} />
            <Line
              data={data1}
              smoothing="none"
              theme={{stroke: {color: 'red', width: 2}}}
            />
            <Line
              data={data2}
              smoothing="cubic-spline"
              theme={{stroke: {color: 'blue', width: 1}}}
            />
          </Chart>
          <Chart
            style={{height: 200, width: '100%'}}
            xDomain={{min: -2, max: 10}}
            yDomain={{min: -2, max: 20}}
            padding={{left: 20, top: 10, bottom: 10, right: 10}}>
            <VerticalAxis tickValues={[0, 4, 8, 12, 16, 20]} />
            <HorizontalAxis tickCount={3} />
            <Line
              data={data1}
              smoothing="none"
              theme={{stroke: {color: 'red', width: 2}}}
            />
            <Line
              data={data2}
              smoothing="cubic-spline"
              theme={{stroke: {color: 'blue', width: 1}}}
            />
          </Chart>
          <Chart
            style={{height: 200, width: '100%'}}
            xDomain={{min: -2, max: 10}}
            yDomain={{min: -2, max: 20}}
            padding={{left: 20, top: 10, bottom: 10, right: 10}}>
            <VerticalAxis tickValues={[0, 4, 8, 12, 16, 20]} />
            <HorizontalAxis tickCount={3} />
            <Line
              data={data1}
              smoothing="none"
              theme={{stroke: {color: 'red', width: 2}}}
            />
            <Line
              data={data2}
              smoothing="cubic-spline"
              theme={{stroke: {color: 'blue', width: 1}}}
            />
          </Chart>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
