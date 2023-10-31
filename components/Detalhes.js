import React, { Component } from 'react'
import { Alert, Pressable, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import InputSpinner from "react-native-input-spinner";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FormataValor from './Utils';

export default class Detalhes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qtd: 0
        }

    }

    render() {
        const { item } = this.props.route.params;
        return (
            <View style={[styles.viewPadrao, { flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }]}>
                <View style={[styles.viewSuperior, styles.v100, { flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }]}>
                    <Text style={styles.tituloProduto}>{item.nome}</Text>
                    <Image source={item.imagem} style={styles.imagemPadrao} />
                    <View style={[styles.viewPadrao, styles.v100, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', alignContent: 'space-around' }]}>
                        {this.renderNumInput()}
                        <Text style={styles.textoValor}>R$ {FormataValor(item.valor)}</Text>
                    </View>
                    <View style={[styles.viewPadrao, styles.v100, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }]}>
                        <Text style={styles.textoLegenda}><Icon name="star-shooting" size={25} color="#FFaa44" /> {FormataValor(item.rate,1)}</Text>
                        <Text style={styles.textoLegenda}><Icon name="fire" size={25} color="#d10000" /> {item.kcal} calorias</Text>
                        <Text style={styles.textoLegenda}><Icon name="clock-time-five" size={25} color="#000" /> {item.tempo}</Text>
                    </View>
                </View>
                <View style={[styles.viewPadrao, { flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', height: 200 }]}>
                    <Text style={styles.tituloDescricao}>Descrição</Text>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.textoDescricao}>{item.descricao}</Text>
                    </ScrollView>
                </View>
                <View style={[styles.viewPadrao, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }]}>
                    {this.renderBtnAdicionarCarrinho()}
                    {this.renderBtnComprar()}
                </View>
            </View>
        );
    }

    renderNumInput() {
        return (
            <InputSpinner
                skin='clean'
                max={99}
                min={1}
                step={1}
                background={"#f2c250"}
                width={120}
                fontSize={18}
                value={this.state.number}
                onChange={(num) => {
                    this.setState({ num });
                }}
            />
        );
    }

    renderBtnAdicionarCarrinho() {
        return (
            <Pressable
                onPress={() => Alert.alert('Item adicionado ao carrinho')}
                style={styles.botaoBranco}
            >
                <Text style={styles.botaoTexto}>Adicionar carrinho</Text>
            </Pressable>
        );
    }

    renderBtnComprar() {
        return (
            <Pressable
                onPress={() => Alert.alert('Comprar agora!')}
                style={styles.botaoAmarelo}
            >
                <Text style={styles.botaoTexto}>Comprar Agora</Text>
            </Pressable>
        );
    }


}

const styles = StyleSheet.create({
    v100: {
        width: '95%'
    },
    viewPadrao: {
        margin: 5,
        padding: 5
    },
    viewSuperior: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#fbefd8'
    },
    botaoAmarelo: {
        borderRadius: 10,
        padding: 20,
        borderColor: '#f2c250',
        borderWidth: 2,
        backgroundColor: '#f2c250',
        margin: 10
    },
    botaoBranco: {
        borderRadius: 10,
        padding: 20,
        borderColor: '#f2c250',
        borderWidth: 2,
        backgroundColor: 'transparent',
        margin: 10
    },
    botaoTexto: {
        color: 'black',
        fontWeight: 'bold'
    },
    textoValor: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    tituloProduto: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22
    },
    tituloDescricao: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },
    textoDescricao: {
        color: '#777',
        fontSize: 14,
        textAlign: 'justify'
    },
    textoLegenda: {
        color: 'black',
        fontSize: 16
    },
    imagemPadrao: {
        width: '115%',
        height: 300
    },
    debug: {
        backgroundColor: 'red'
    }
});

