import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FormataValor from './Utils';

export default class Card extends Component {
    render() {
        const { item } = this.props;
        return (
            <View style={[styles.viewCard, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                <View style={[styles.viewPadrao, { flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }]}>
                    <Text style={styles.tituloProduto}>{item.nome}</Text>
                    <Text><Icon name="fire" size={25} color="#d10000" /> {item.kcal} calorias</Text>
                    <Text style={styles.textoValor}>R$ {FormataValor(item.valor)}</Text>
                </View>
                <View style={styles.viewPadrao}>
                    <Image source={item.imagem} style={styles.imagemPadrao} />
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    viewCard: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
        borderColor: '#ddd',
        borderWidth: 1,
        shadowColor: 'black',
        elevation: 20
    },
    viewPadrao: {
        margin: 5,
        padding: 5
    },
    textoValor: {
        color: '#FFaa33',
        fontWeight: 'bold',
        fontSize: 14
    },
    tituloProduto: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    imagemPadrao: {
        width: 100,
        height: 100
    },
    debug: {
        backgroundColor: 'red'
    }
});

