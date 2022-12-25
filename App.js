import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity } from 'react-native';

import { Picker } from "@react-native-picker/picker"

import Slider from "@react-native-community/slider"

export default function App() {

  const [valor, setValor] = useState(250)

  const [estudante, setEstudante] = useState(false)

  const [sexoSelecionado, setSexoSelecionado] = useState("")

  const [sexo, setSexo] = useState([
    { key: 1, nome: "Masculino" },
    { key: 2, nome: "Feminino" },
    { key: 3, nome: "Outro" }
  ])

  let sexos = sexo.map((valor, key) => {
    return <Picker.Item key={key} value={key} label={valor.nome} />
  })

  const [nome, setNome] = useState("")

  const [email, setEmail] = useState("")

  const [idade, setIdade] = useState("")

  function abrir() {
    alert(`NOME COMPLETO: ${nome}

EMAIL: ${email}

IDADE: ${idade}

SEXO: ${sexo[sexoSelecionado].nome}

ESTUDANTE: ${estudante ? "Sim" : "Não"}

SEU LIMITE: R$${valor.toFixed(0)}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Banco Do Miauuu</Text>
      <Text style={styles.subtitle}>Insira algumas informações para continuarmos</Text>
      <View style={styles.inputs}>
        <View style={styles.interanlInputs}>
          <Text style={styles.labels}>Nome completo</Text>
          <TextInput style={styles.textInputs} placeholder='Ex: João Figuereido de Melo' onChangeText={(text) => setNome(text)} />
          <Text style={styles.labels}>Email</Text>
          <TextInput style={styles.textInputs} placeholder='Ex: email@email.com' onChangeText={(text) => setEmail(text)} />
          <View style={styles.idadeSexo}>
            <View>
              <Text style={styles.labels}>Idade</Text>
              <TextInput style={[styles.textInputs, { width: 160, marginRight: 20 }]} placeholder='Ex: 18' onChangeText={(text) => setIdade(text)} />
            </View>
            <View>
              <Text style={styles.labels}>Informe seu sexo</Text>
              <View style={styles.picker}>
                <Picker
                  selectedValue={sexoSelecionado}
                  onValueChange={(sexo) => setSexoSelecionado(sexo)}
                >
                  {sexos}
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.switch}>
            <Text style={[styles.labels, { marginRight: 7 }]}>Você é estudante?</Text>
            <Switch
              value={estudante}
              onValueChange={(selecionado) => setEstudante(selecionado)}
              style={{ marginTop: 6 }}
            />
          </View>
          <Text style={styles.labels}>Informe o seu limite: R${valor.toFixed(0)}</Text>
          <Slider
            minimumValue={250}
            maximumValue={2500}
            value={valor}
            onValueChange={(limiteSelecionado) => setValor(limiteSelecionado)}
            minimumTrackTintColor="#FA641E"
            maximumTrackTintColor='#999999'
            thumbTintColor='#FF0000'
          />
          <View style={styles.btnArea}>
            <TouchableOpacity style={styles.btn} onPress={abrir}>
              <Text style={styles.textBtns}>ABRIR CONTA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FA641E"
  },
  title: {
    fontFamily: "monospace",
    color: "#FFF",
    marginTop: 40,
    fontSize: 22,
    textAlign: "center"
  },
  subtitle: {
    fontFamily: "monospace",
    color: "#FFF",
    textAlign: "center",
    marginTop: 15,
    fontWeight: "400",
    fontSize: 12
  },
  inputs: {
    borderRadius: 25,
    backgroundColor: "#FFF",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    paddingBottom: 40
  },
  interanlInputs: {
    marginTop: 10,
    marginLeft: 10
  },
  labels: {
    marginTop: 20,
    fontFamily: "monospace",
    fontWeight: "400"
  },
  textInputs: {
    padding: 15,
    height: 45,
    borderWidth: 1,
    borderColor: "#999999",
    borderRadius: 15,
    width: 350
  },
  idadeSexo: {
    flexDirection: "row"
  },
  picker: {
    justifyContent: "center",
    height: 45,
    borderRadius: 15,
    width: 170,
    borderWidth: 1,
    borderColor: "#999999"
  },
  switch: {
    flexDirection: "row",
    marginTop: 4,
  },
  btnArea: {
    marginTop: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 40,
    backgroundColor: "#FA641E"
  },
  textBtns: {
    fontWeight: "bold",
    color: "#FFF"
  }
});
