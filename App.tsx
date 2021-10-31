import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { api } from './src/queries/GetUsers.generated';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ChildComponent />
        <StatusBar style='auto' />
      </View>
    </Provider>
  );
}

const ChildComponent: React.FC = () => {
  const { data } = api.endpoints.GetUsers.useQuery();
  return <Text>{JSON.stringify(data)}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
