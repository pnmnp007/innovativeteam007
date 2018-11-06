import React from 'react';
import { StyleSheet, ViewPagerAndroid, View } from 'react-native';
import newsImage from './assets/usc_asc.jpg';
import NewsItemMain from './src/components/News/NewsItemMain';

export default class App extends React.Component {
  render() {
    let newsDesc = "Join us for a screening of The Waiting Game, a student-produced documentary that takes a look at immigration policy in the US through the story of a family...";

    return (
      <ViewPagerAndroid 
        style={styles.viewPager}
        initialPage={0}>
        <View style={styles.container} key={1}>
          <NewsItemMain
            desc = {"First News \n" + newsDesc}
            image = {newsImage}
          />  
      </View>
      <View style={styles.container} key={2}>
          <NewsItemMain
            desc = {"Second News \n" + newsDesc}
            image = {newsImage}
          />  
      </View>
      <View style={styles.container} key={3}>
          <NewsItemMain
            desc = {"Third News \n" + newsDesc}
            image = {newsImage}
          />  
      </View>
      </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
