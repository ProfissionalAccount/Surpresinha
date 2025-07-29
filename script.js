// QUIZ DE QUE TIPO DE BRUXA VOCÊ É 🧙‍♀️
let userName;
let witch = 0;
let nat = 0;
let druid = 0;
let wizard = 0;

alert("Bem-vinde ao quiz de que tipo de bruxa você é!!");
userName = prompt("Mas antes do quiz, me diga seu nome");
let question;

question = prompt(`De onde viria sua magia em um mundo mágico?
1 - Obtida através de estudos.
2 - Magia natural.
3 - Magia das plantas e animais.
4 - Magia hereditária.
obs.: use NÚMEROS.`);
switch (question){
    case "1":
        witch++;
        break;
    case "2":
        nat++;
        break;
    case "3":
        druid++;
        break;
    case "4":
        wizard++;
        break;
    default:
        alert("Sua resposta foi inválida, por favor recomece(basta atualizar a página).");
        throw new Error("Quiz encerrado por resposta inválida.");
};

question = prompt(`Que tipos de elementos você usaria?
1 - Livros e pergaminhos.
2 - Plantas, pedras energizadas e componentes da natureza.
3 - Energia da natural.
4 - A magia que está dentro de você.
obs.: use NÚMERO.`);
switch (question){
    case "1":
        witch++;
        break;
    case "2":
        nat++;
        break;
    case "3":
        druid++;
        break;
    case "4":
        wizard++;
        break;
    default:
        alert("Sua resposta foi inválida, por favor recomece(basta atualizar a página).");
        throw new Error("Quiz encerrado por resposta inválida.");
};

question = prompt(`O que você prefere fazer no tempo livre?
1 - Ler livros.
2 - Pesquisar sobre, astronomia ou energia do mundo.
3 - Passar um tempo perto da natureza.
4 - Passa um tempo com a famÍlia.
obs.: use NÚMERO.`);
switch (question){
    case "1":
        witch++;
        break;
    case "2":
        nat++;
        break;
    case "3":
        druid++;
        break;
    case "4":
        wizard++;
        break;
    default:
        alert("Sua resposta foi inválida, por favor recomece(basta atualizar a página).");
        throw new Error("Quiz encerrado por resposta inválida.");
};

question = prompt(`Você prefere acreditar em:
1 - Nos seus estudos
2 - Horóscopo, tarot, ou leitura de sorte,
3 - Eventos naturais.
4 - na tradição, ou o que é contado a você pelos mais velhos.
obs.: use NÚMEROS.`);
switch (question){
    case "1":
        witch++;
        break;
    case "2":
        nat++;
        break;
    case "3":
        druid++;
        break;
    case "4":
        wizard++;
        break;
    default:
        alert("Sua resposta foi inválida, por favor recomece(basta atualizar a página).");
        throw new Error("Quiz encerrado por resposta inválida.");
};

question = prompt(`O que você usaria para canalizar seu poder?
1 - Um grimório.
2 - Pedras energizadas.
3 - Plantas e a natureza ao seu redor.
4 - A magia que nasceu com você.
obs.: use NÚMEROS.`);
switch (question){
    case "1":
        witch++;
        break;
    case "2":
        nat++;
        break;
    case "3":
        druid++;
        break;
    case "4":
        wizard++;
        break;
    default:
        alert("Sua resposta foi inválida, por favor recomece(basta atualizar a página).");
        throw new Error("Quiz encerrado por resposta inválida.");
};

question = prompt(`O que você teria como decoração na sua casa?
1 - Estante de livros.
2 - Pedras preciosas, cartas de tarot e etc.
3 - Plantas e lugares para seus pets.
4 - Objetos passados pela sua família até você.
obs.: use NÚMEROS.`);
switch (question){
    case "1":
        witch++;
        break;
    case "2":
        nat++;
        break;
    case "3":
        druid++;
        break;
    case "4":
        wizard++;
        break;
    default:
        alert("Sua resposta foi inválida, por favor recomece(basta atualizar a página).");
        throw new Error("Quiz encerrado por resposta inválida.");
};

question = prompt(`Que poder você quer ter?
1 - Qualquer um que você queira estudar.
2 - Poder sobre a energia do universo.
3 - Poder sobre as plantas e se transformar em animais.
4 - Poder que veio dos seus antepassados.
obs.: use NÚMEROS.`);
switch (question){
    case "1":
        witch++;
        break;
    case "2":
        nat++;
        break;
    case "3":
        druid++;
        break;
    case "4":
        wizard++;
        break;
    default:
        alert("Sua resposta foi inválida, por favor recomece(basta atualizar a página).");
        throw new Error("Quiz encerrado por resposta inválida.");
};

let arr = [witch, nat, druid, wizard]
let biggest = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
        biggest = arr[i];
    }
}

// EASTER EGG
switch (userName) {
    case "Muca":
        easter = "Muca!! Fiz pra ti!! <33";
        break;

    case "Mari":
        easter = "manaa, essa definitivamente é a run";
        break;
    
    case "Isaac":
        easter = "... oxi, o usuário não existe??";
        break;

    case "Raven":
        easter = "Ra, precisa testar mais não anjo, ta rodando certinho";
        break;

    case "Kian":
        easter = ", tu não sabe";
        break;

    case "Muh":
        easter = "amor, eu te amo muito!! <33"
}

if(easter) {
    userName = easter
}

if(biggest == witch){
    alert(`Oii ${userName}! O seu tipo de bruxa seria a Bruxa Convencional. Ou seja aquela bruxa que mais vemos, em filmes e séries. Esse tipo obtem seus poderes por meio de estudos, escritas antigas e ensinamentos. Pode possuir qualquer tipo de magia, contanto que estude e cumpra os requisitos.

Ex.: As bruxas de Little Witch Academy.`)
} else if(biggest == nat){
    alert(`Oii ${userName}! O seu tipo de bruxa seria a Bruxa Natural/Mística. Ou seja aquela bruxa que usa da energia do universo. Esse tipo obtem seus poderes por meio de pedras energizadas, contato com a energia natural. Pode possuir magias que envolvam o universo, sorte, o mundo ao seu redor.

Ex.: Cartomantes.`)
} else if(biggest == druid){
    alert(`Oii ${userName}! O seu tipo de bruxa seria a Bruxa Druida. Ou seja aquela bruxa que usa das plantas e animais para usar magia. Esse tipo obtem seus poderes por meio da energia de plantas, animais e da natureza ao seu redor. Pode possuir poderes que envolvam a natureza no geral, podendo controlar algumas plantas, falar e se transformar em animais.
        
Ex.: Malévola.`)
} else if(biggest == wizard){
    alert(`Oii ${userName}! O seu tipo de bruxa seria a Feiticeira. Ou seja aquela bruxa que recebe seus poderes pela família. Esse tipo obtem seus poderes por meio da sua linhagem mágica, não precisa de componentes, pois a magia nasceu dentro de si. Pode possuir qualquer magia, desde que seja herdada da sua família.

Ex.: Harry Potter.`)
}
