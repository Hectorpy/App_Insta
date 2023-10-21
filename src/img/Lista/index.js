import React, {Component} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";



export default class Lista extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data
        };

        this.mostrarlikes = this.mostrarlikes.bind(this)
        this.like = this.like.bind(this);
        this.darLike = this.darLike.bind(this);
    }

    darLike(likeada){
        return likeada ? require('../img/likered2.png') : require('../img/like2.png')
    }

    like(){

        let feed = this.state.feed;

        if (feed.likeada === true) {
            this.setState({
                feed:{
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1
                }
            });
        } else {
            this.setState({
                feed:{
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1
                    }
                });
        }
    }

    mostrarlikes(likers){
        let feed = this.state.feed;

        if(feed.likers <= 0){
            return;
        }
        
        return(
            <Text style={styles.likes}>
                {feed.likers} {feed.likers > 1 ? 'Curtidas' : 'Curtida'}
            </Text>
        );
    }


    render(){
        return(
            <View style={styles.areaFeed}>

            <View style={styles.viewPerfil}>
                <Image
                source={{uri: this.state.feed.imgperfil}}
                style={styles.fotoPerfil}
                />
                <Text style={styles.nomeUser}> {this.state.feed.nome} </Text>
            </View>

            <Image
            resizeMode= "cover"
            source={{uri: this.state.feed.imgPublicacao}}
            style={styles.fotoPubli}
            />


            <View style={styles.areaIcons}>
                <TouchableOpacity onPress={this.like}>
                    <Image
                     source={this.darLike(this.state.feed.likeada)}
                    style={styles.icons}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.areaBtn}>
                    <Image
                     source={require ('../img/send.png')}
                    style={styles.icons}
                    />
                </TouchableOpacity>
            </View>

            {this.mostrarlikes(this.state.feed.likers)}

            <View style={styles.viewRodape}>
                <Text style={styles.nomeRodape}> {this.state.feed.nome} </Text>

                <Text style={styles.desc}> {this.state.feed.descricao} </Text>
            </View>


            </View>
        );
    }
}


const styles = StyleSheet.create({
    areaFeed: {

    },
    nomeUser: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000',
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    fotoPubli: {
        flex: 1,
        height: 400,
    },
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },
    areaIcons: {
        flexDirection: 'row',
        padding: 5,    
    },
    icons: {
        width: 33,
        height: 33,
    },
    areaBtn: {
        paddingLeft: 5,
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    desc: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000'
    },
    nomeRodape: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 5
    },
    likes: {
        marginLeft: 5,
        fontWeight: 'bold'
    },
});