function FormataValor(valor, decimais=2) {    
    return parseFloat(valor).toFixed(decimais).replace(/\./g,',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export default FormataValor;