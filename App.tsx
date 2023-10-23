import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      alamat: '',
      tanggalLahir: '',
      email: '',
    };
  }

  handlePendaftaran = () => {
    // Implementasikan logika pendaftaran di sini
    // Anda dapat mengirim data ke server atau melakukan tindakan lain sesuai kebutuhan
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Pendaftaran Santri</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama"
          onChangeText={(text) => this.setState({ nama: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Alamat"
          onChangeText={(text) => this.setState({ alamat: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Tanggal Lahir"
          onChangeText={(text) => this.setState({ tanggalLahir: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => this.setState({ email: text })}
        />
        <Button
          title="Daftar"
          onPress={this.handlePendaftaran}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});

export default HomeScreen;