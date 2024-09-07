const montanhas = [
    {
        nome: "Aconcágua",
        altimetria: "6.962 metros",
        país: "Argentina",
        historia: "É a montanha mais alta da América do Sul e do Hemisfério Ocidental. O nome 'Aconcágua' provavelmente vem da língua indígena quechua, significando 'Sentinela de Pedra'. Para os povos indígenas locais, o Aconcágua era sagrado.",
        bandeira: "argentina.png"
    },
    {
        nome: "Ojos del Salado",
        altimetria: "6.893 metros",
        país: "Chile/Argentina",
        historia: "O vulcão ativo mais alto do mundo, possui importância tanto geológica quanto cultural. Os povos indígenas andinos acreditavam que eram moradas de divindades.",
        bandeira: "chile.png"
    },
    {
        nome: "Huascarán",
        altimetria: "6.768 metros",
        país: "Peru",
        historia: "Localizada no Parque Nacional Huascarán, na Cordilheira Branca. Seu nome é em homenagem ao imperador inca Huáscar.",
        bandeira: "peru.png"
    },
    {
        nome: "Cerro Bonete",
        altimetria: "6.759 metros",
        país: "Argentina",
        historia: "Uma das cinco montanhas mais altas da América do Sul, localizada no remoto noroeste da Argentina.",
        bandeira: "argentina.png"
    },
    {
        nome: "Monte Pissis",
        altimetria: "6.793 metros",
        país: "Argentina",
        historia: "Um dos vulcões mais altos do mundo, considerado lugar de poder espiritual pelas culturas indígenas.",
        bandeira: "argentina.png"
    },
    {
        nome: "Chimborazo",
        altimetria: "6.263 metros",
        país: "Equador",
        historia: "O ponto mais distante do centro da Terra, considerado uma montanha sagrada pelos Kichwas.",
        bandeira: "equador.png"
    },
    {
        nome: "Illimani",
        altimetria: "6.438 metros",
        país: "Bolívia",
        historia: "Uma das montanhas mais emblemáticas da Bolívia, reverenciada como protetora pelas comunidades aimarás.",
        bandeira: "bolivia.png"
    },
    {
        nome: "Tupungato",
        altimetria: "6.570 metros",
        país: "Argentina/Chile",
        historia: "Um dos vulcões mais altos da Cordilheira dos Andes, importante para práticas religiosas andinas.",
        bandeira: "argentina.png"
    },
    {
        nome: "Nevado Sajama",
        altimetria: "6.542 metros",
        país: "Bolívia",
        historia: "Montanha vulcânica com significado espiritual para as comunidades aimarás, localizada no Parque Nacional Sajama.",
        bandeira: "bolivia.png"
    },
    {
        nome: "Cotopaxi",
        altimetria: "5.897 metros",
        país: "Equador",
        historia: "Um dos vulcões mais ativos e famosos do Equador, sagrado pelos Kichwas, cujo nome significa 'Pescoço da Lua'.",
        bandeira: "equador.png"
    }
];

function searchMountain() {
    const selectedMountain = document.getElementById('mountainSelect').value;
    const result = montanhas.find(montanha => montanha.nome === selectedMountain);

    if (result) {
        document.getElementById('result').innerHTML = `
            <div class="mountain-box">
                <img src="img/${result.bandeira}" alt="Bandeira de ${result.país}">
                <div>
                    <h2>${result.nome}</h2>
                    <p><strong>Altimetria:</strong> ${result.altimetria}</p>
                    <p><strong>País:</strong> ${result.país}</p>
                    <p><strong>História cultural:</strong> ${result.historia}</p>
                </div>
            </div>
        `;
    } else {
        document.getElementById('result').innerHTML = '<p>Montanha não encontrada. Tente outra.</p>';
    }
}
