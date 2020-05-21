import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  return <View>
      <Button title='Go to Track Detail'
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>;
};

const styles = StyleSheet.create({

});

export default TrackListScreen;
