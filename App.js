import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Lista from './src/img/Lista';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      feed: [
        {
          id: '1', 
          nome: 'Lucas Silva', 
          descricao: 'Mais um dia de muitos bugs :)', 
          imgperfil: 'https://photografos.com.br/wp-content/uploads/2020/09/fotografia-para-perfil.jpg', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: false, 
          likers: 0
         },
        {
          id: '2', 
          nome: 'Matheus', 
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgperfil: 'https://media.licdn.com/dms/image/C4E03AQFmI29qBxRwlg/profile-displayphoto-shrink_800_800/0/1600729493554?e=2147483647&v=beta&t=BDAXVitTb-FtUh6ugjBVP2fpCBB2FzsxTDKN5GhLGYQ', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          descricao: 'Bora trabalhar Haha', 
          imgperfil: 'https://media.licdn.com/dms/image/C4D03AQGi6R_kf98goQ/profile-displayphoto-shrink_800_800/0/1537645995484?e=2147483647&v=beta&t=1oQwWe5hl0Am1pN6WYmcG0RdWHgTRIBfouFQjKxA-eI', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 3
        },
        {
          id: '4', 
          nome: 'Gustavo Henrique', 
          descricao: 'Isso sim que é TI!', 
          imgperfil: 'https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia-360-2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 1
        },
        {
          id: '5', 
          nome: 'Guilherme', 
          descricao: 'Boa tarde galera do insta...', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 32
        }
      ]
    };
  }

  render(){
  return (
    
    <View style={styles.container}>

    <View style={styles.header}>
      <TouchableOpacity>
        <Image
        source={require ('./img/LogoInsta.png')}
        style={styles.logo}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
        source={require ('./img/Send.png')}
        style={styles.send}
        />
      </TouchableOpacity>
    </View>
      <FlatList
      showsHorizontalScrollIndicator={false}
      data={this.state.feed}
      renderItem={({item}) => <Lista data={item} />}
      />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  logo:{
    width: 110,
    height: 37,
  },
  send:{
    height: 30,
    width: 30,
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    padding: 5,
    alignItems: 'center',
    borderWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
});
