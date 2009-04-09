function DataCz() {
    this.meniny = [
	[ "", "Karina", "Radmila", "Diana", "Dalimil", "", "Vilma", "Čestmír", "Vladan", "Břetislav", "Bohdana", "Pravoslav", "Edita", "Radovan", "Alice", "Ctirad", "Drahoslav", "Vladislav", "Doubravka", "Ilona", "Běla", "Slavomír", "Zdeněk", "Milena", "Miloš", "Zora", "Ingrid", "Otýlie ", "Zdislava", "Robin", "Marika", ],
	[ "Hynek", "Nela", "Blažej", "Jarmila", "Dobromila", "Vanda", "Veronika", "Milada", "Apolena", "Mojmír", "Božena", "Slavěna", "Věnceslav", "Valentýn", "Jiřina", "Ljuba", "Miloslava", "Gizela", "Patrik", "Oldřich", "Lenka", "Petr", "Svatopluk", "Matěj", "Liliana", "Dorota", "Alexandr", "Lumír", ],
	[ "Bedřich", "Anežka", "Kamil", "Stela", "Kazimír", "Miroslav", "Tomáš", "Gabriela", "Františka", "Viktorie", "Anděla", "Řehoř", "Růžena", "Rút, Matylda", "Ida", "Elena, Hubert", "Vlastimil", "Eduard", "Josef", "Světlana", "Radek", "Leona", "Ivona", "Gabriel", "Marián", "Emanuel", "Dita", "Soňa", "Taťána", "Arnošt", "Kvido", ],
	[ "Hugo", "Erika", "Richard", "Ivana", "Miroslava", "Vendula", "Heřman, Hermína", "Ema", "Dušan", "Darja", "Izabela", "Julius", "Aleš", "Vincenc", "Anastázie", "Irena", "Rudolf", "Velérie", "Rostislav", "Marcela", "Alexandra", "Evženie", "Vojtěch", "Jiří", "Marek", "Oto", "Jaroslav", "Vlastislav", "Robert", "Blahoslav", ],
	[ "", "Zikmund", "Alexej", "Květoslav", "Klaudie", "Radoslav", "Stanislav", "", "Ctibor", "Blažena", "Svatava", "Pankrác", "Servác", "Bonifác", "Žofie", "Přemysl", "Aneta", "Nataša", "Ivo", "Zbyšek", "Monika", "Emil", "Vladimír", "Jana", "Viola", "Filip", "Valdemar", "Vilém", "Maxmilián, Maxim", "Ferdinand", "Kamila", ],
	[ "Laura", "Jarmil", "Tamara", "Dalibor", "Dobroslav", "Norbert", "Iveta, Slavoj", "Medard", "Stanislava", "Gita", "Bruno", "Antonie", "Antonín", "Roland", "Vít", "Zbyněk", "Adolf", "Milan", "Leoš", "Květa", "Alois", "Pavla", "Zdeňka", "Jan", "Ivan", "Adriana", "Ladislav", "Lubomír", "Petr, Pavel", "Šárka", ],
	[ "Jaroslava ", "Patricie", "Radomír", "Prokop", "", "", "Bohuslava", "Nora", "Drahoslava", "Libuše, Amálie", "Olga", "Bořek", "Markéta", "Karolína", "Jindřich", "Luboš", "Martina", "Drahomíra", "Čeněk", "Ilja", "Vítězslav", "Magdaléna", "Libor", "Kristýna", "Jakub", "Anna", "Věroslav", "Viktor", "Marta", "Bořivoj", "Ignác", ],
	[ "Oskar", "Gustav", "Miluše", "Dominik", "Kristián", "Oldřiška", "Lada", "Soběslav", "Roman", "Vavřinec", "Zuzana", "Klára", "Alena", "Alan", "Hana", "Jáchym", "Petra", "Helena", "Ludvík", "Bernard", "Johana", "Bohuslav", "Sandra", "Bartoloměj", "Radim", "Luděk", "Otakar", "Augustýn", "Evelína", "Vladěna", "Pavlína", ],
	[ "Linda, Samuel", "Adéla", "Bronislav", "Jindřiška", "Boris", "Boleslav", "Regína", "Mariana", "Daniela", "Irma", "Denisa", "Marie", "Lubor", "Radka", "Jolana", "Ludmila", "Naděžda", "Kryštov", "Zita", "Oleg", "Matouš", "Darina", "Berta", "Jaromír", "Zlata", "Andrea", "Jonáš", "Václav", "Michal", "Jeroným", ],
	[ "Igor", "Olívie, Oliver", "Bohumil", "František", "Eliška", "Hanuš", "Justýna", "Věra", "Štefan, Sára", "Marina", "Andrej", "Marcel", "Renáta", "Agáta", "Tereza", "Havel", "Hedvika", "Lukáš", "Michaela", "Vendelín", "Brigita", "Sabina", "Teodor", "Nina", "Beáta", "Erik", "Šarlota, Zoe", "", "Silvie", "Tadeáš", "Štěpánka", ],
	[ "Felix", "", "Hubert", "Karel", "Miriam", "Liběna", "Saskie", "Bohumír", "Bohdan", "Evžen", "Martin", "Benedikt", "Tibor", "Sáva", "Leopold", "Otmar, Mahulena", "", "Romana", "Alžběta", "Nikola", "Albert", "Cecílie", "Klement", "Emílie", "Kateřina", "Artur", "Xenie", "René", "Zina", "Ondřej", ],
	[ "Iva", "Blanka", "Svatoslav", "Barbora", "Jitka", "Mikuláš", "Ambrož, Benjamín", "Květoslava", "Vratislav", "Julie", "Dana", "Simona", "Lucie", "Lýdie", "Radana, Radan", "Albína", "Daniel", "Miloslav", "Ester", "Dagmar", "Natálie", "Šimon", "Vlasta", "Adam, Eva", "", "Štěpán", "Žaneta", "Bohumila", "Judita", "David", "Silvestr", ]
    ];

    this.sviatky = [
	[ 1, 1, "Den obnovy samostatného Českého státu" ],
	[ 6, 1, "Tři krále" ],
	[ 1, 5, "Svátek práce" ],
	[ 8, 5, "Den osvobození od fašismu (1945)" ],
	[ 5, 7, "Den slovanských věrozvestú Cyrila a Metodeje" ],
	[ 6, 7, "Den upálení mistra Jana Husa (1415)" ],
	[ 28, 9, "Den české státnosti" ],
	[ 28, 10, "Den vzniku samostat. Českosl. státu (1918)" ],
	[ 2, 11, "Památka zesnulých" ],
	[ 17, 11, "Den boje studentů za svobodu a demokracii" ],
	[ 24, 12, "Štědrý den" ],
	[ 25, 12, "1. Svátek vánoční" ],
	[ 26, 12, "2. Svátek vánoční" ],
    ];

    this.easter = [
	[ 0, "Velikonoční neděle" ],
	[ 1, "Pondělí velikonoční" ],
    ];

    return this;
}
