var dictionary = [
    "Archaeopteryx",
    "Baryonyx",
    "Apatosaurus",
    "Ankylosaurus",
    "Borogovia",
    "Brachiosaurus",
    "Ceratosaurus",
    "Compsognathus",
    "Corythosaurus",
    "Carcharodontosaurus",
    "Coelophysis",
    "Deinonychus",
    "Dilophosaurus",
    "Dimetrodon",
    "Diplodocus",
    "Dreadnoughtus",
    "Ekrixinatosaurus",
    'Echinodon',
    "Eolambia",
    "Equijubus",
    "Fukuiraptor",
    "Gallimimus",
    "Gargoyleosaurus",
    "Giganotosaurus",
    "Gigantoraptor",
    "Gondwanatitan",
    "Fukuisaurus",
    "Hadrosaurus",
    "Haya",
    "Hexing",
    "Hippodraco",
    "Huehuecanauhtlus",
    "Hypsibema",
    "Ichthyovenator",
    "Iguanacolossus",
    "iguanodon",
    "Indosuchus",
    "Juratyrant",
    "Kol",
    "Lambeosaurus",
    "Koreaceratops",
    "Lophorhothon",
    "Megalosaurus",
    "Mei",
    "Megaraptor",
    "Micropachycephalosaurus",
    "Mochlodon",
    "Minotaurasaurus",
    "Montanoceratops",
    "Nyasasaurus",
    "Nodocephalosaurus",
    "Nanotyrannus",
    "Oohkotokia",
    "Oviraptor",
    "Ozraptor",
    "Pachycephalosaurus",
    "Pachyrhinosaurus",
    "Parasaurolophus",
    "Pentaceratops",
    "Pneumatoraptor",
    "Proa",
    "Protoceratops",
    "Pyroraptor",
    "Qianzhousaurus",
    "Raptorex",
    "Riojasaurus",
    "Saurophaganax",
    "Santanaraptor",
    "Sauroposeidon",
    "Seismosaurus",
    "Serendipaceratops",
    "Skorpiovenator",
    "Stegosaurus",
    "Spinosaurus",
    "Struthiomimus",
    "Stygimoloch",
    "Styracosaurus",
    "Supersaurus",
    "Titanosaurus",
    "Titanoceratops",
    "Torosaurus",
    "Triceratops",
    "Tuojiangosaurus",
    "Troodon",
    "Tyrannosaurus Rex",
    "Tyrannotitan",
    "Utahraptor",
    "Udanoceratops",
    "Velociraptor",
    "Velocisaurus",
    "Vulcanodon",
    "Wannanosaurus",
    "Xenoceratops",
    "Xiongguanlong",
    "Yutyrannus",
    "Yongjinglong",
    "Zby",
    "Yizhousaurus",
    "Zuniceratops",
    "Quetzalcoatlus",
    "Onychonycteris",
    "Phthinosuchus",
];

var gameOn = false;
var guesses = 10;
var wrongLetters = [];
var correctLetters = [];
var wins = 0;
var losses = 0;
var word = dictionary[Math.floor(Math.random() * dictionary.length)];
var letterCount = word.length;
var letter = [];

document.onkeyup = function(event) {
    if (gameOn = false) {
        setupGame();
        gameOn = true;
    }
    else {
        if (event.keyCode  >= 65 && event.keyCode <=90) {
        letter.push(event.key.toLowerCase());
        alert(letter[0])
        }
    }
};

function setupGame() {
    var instruction = document.getElementsByClassName("start");
    if (instruction.style.display === "none") {
        instruction.style.display = "block";
    }
    else {
        instruction.style.display = "none";
        var blankWord = document.createElement("P");
        for (var i = 0; i < letterCount; i++) {
            var j = document.createTextNode("_");
            blankWord.appendChild (j);
        }
        var gameBoard = document.getElementsByClassName("gameColumn");
        gameBoard.appendChild (blankWord);
    }
};

function guess(letter) {
    if (guesses > 0) {
        if (wrongLetters.indexOf(letter[0]) && correctLetters.indexOf(letter[0]) === -1) {
            checkLetter();
        }
    }
};

function checkLetter() {
    var letterPlace = [];
    for (var k = 0; k < letterCount; k++) {
        if (word[k] === letter[0]) {
            letterPlace.push(k);
        }
    }
    if (letterPlace <1) {
        guesses --;
    }
    else {
        for (var l = 0; l < letterPlace.length; l ++) {
            word[letterPlace[l]] = letter[0];
        }
    }
};