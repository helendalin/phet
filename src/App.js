import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SignInForm from './SignInForm';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SignInForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
