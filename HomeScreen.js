import React, {Component} from "react";
import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';


export default class Home extends Component 
{
  constructor()
  {
    super();
    this.state = {
      text: "",
      isSearchPressed: false,
      word: "Loading...",
      lexicalCategory: "",
      examples: [],
      definition: ""
    }
  }

  getWord=(word)=>{
    var searchKeyword = word.toLowerCase();
    var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
    return fetch(url)
    .then((data)=>{
              console.log(data.status)
      if (data.status === 200)
      {
        return data.json()
      } else return null
    })
    .then((response)=>{
      var responseObject = response;
      if (responseObject)
      {
        var wordData = responseObject.definitions[0];
        var definition = wordData.description
        var lexicalCategory = wordData.wordtype
        this.setState({
          "word": this.state.text,
          "definition": definition,
          "lexicalCategory" : lexicalCategory
        })
      } else 
      {
        this.setState({
          "word": this.state.text,
          "definition": "Not Found"
        })
      }
    })
  }
  
  render()
  {
    return(
      <View>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 3,
            width: 300,
            height: 40,
            marginLeft: 15,
            alignItems: "center"
          }} 
          onChangeText = {text => {
            this.setState({
              text: text,
              isSearchPressed: false,
              word: "Loading...",
              lexicalCategory: "",
              examples: [],
              definition: ""
            })
          }}
          value = {this.state.text}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "gray",
            height: 30,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 100,
            marginTop: 30
          }}
          onPress={()=>{
            this.setState({ isSearchPressed: true })
            this.getWord(this.state.text)
          }}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
        <Text style={{marginTop: 40}}>Word: {""}</Text>
        <Text>{this.state.word}</Text>
        <Text style={{marginTop: 20}}>Type: {""}</Text>
        <Text>{this.state.lexicalCategory}</Text>
        <View style={{flexDirection:'row',flexWrap: 'wrap', marginTop: 20}}>
          <Text style={styles.detailsTitle}>
            Definition :{" "}
          </Text>
          <Text style={{ fontSize:18}}>
            {this.state.definition}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
