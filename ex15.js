function comprarVeiculo(veiculo) {
    switch (veiculo) {
        case "hatch":
            console.log("Compra efetuada com sucesso")
            break
        case "caminhonete":
            console.log("Tem certeza que não prefere este modelo?")
            break
        case "motocicleta":
            console.log("Tem certeza que não prefere este modelo?")
            break
        case "sedan":
            console.log("Tem certeza que não prefere este modelo?")
            break
            default:
                console.log("Não trabalhamos com este tipo de automóvel aqui")
    } 
}

comprarVeiculo("hatch")