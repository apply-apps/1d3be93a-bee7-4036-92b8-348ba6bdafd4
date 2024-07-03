// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, Button, StyleSheet, View, Text, ScrollView } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={stylesHomeScreen.container}>
      <Text style={stylesHomeScreen.title}>Tales for Kids</Text>
      <View style={stylesHomeScreen.buttonContainer}>
        <Button title="Tale 1" onPress={() => navigation.navigate('Tale1')} />
        <Button title="Tale 2" onPress={() => navigation.navigate('Tale2')} />
        <Button title="Tale 3" onPress={() => navigation.navigate('Tale3')} />
      </View>
    </SafeAreaView>
  );
}

const stylesHomeScreen = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
});

function Tale1() {
  return (
    <SafeAreaView style={stylesTales.container}>
      <ScrollView>
        <Text style={stylesTales.title}>The Little Red Riding Hood</Text>
        <Text style={stylesTales.text}>Once upon a time, there was a little girl who lived in a village near the forest...</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function Tale2() {
  return (
    <SafeAreaView style={stylesTales.container}>
      <ScrollView>
        <Text style={stylesTales.title}>The Three Little Pigs</Text>
        <Text style={stylesTales.text}>Once upon a time, there were three little pigs...</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function Tale3() {
  return (
    <SafeAreaView style={stylesTales.container}>
      <ScrollView>
        <Text style={stylesTales.title}>Jack and the Beanstalk</Text>
        <Text style={stylesTales.text}>Once upon a time, there was a boy named Jack who lived with his mother...</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const stylesTales = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tale1" component={Tale1} />
        <Stack.Screen name="Tale2" component={Tale2} />
        <Stack.Screen name="Tale3" component={Tale3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}