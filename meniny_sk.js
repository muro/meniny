function DataSk() {
    this.meniny = [
	[ "", "Alexandra, Karina", "Daniela, Radmila", "Drahoslav, Diana", "Andrea, Dalimil", "Antónia", "Bohuslava, Vilma", "Severín", "Alexej", "Dáša", "Malvína", "Ernest", "Rastislav", "Radovan", "Dobroslav", "Kristína", "Nataša", "Bohdana", "Drahomíra, Mário", "Dalibor", "Vincent", "Zora", "Miloš", "Timotej", "Gejza", "Tamara", "Bohuš", "Alfonz", "Gašpar", "Ema", "Emil", ],
	[ "Tatiana", "Erika, Erik", "Blažej", "Veronika", "Agáta", "Dorota", "Vanda", "Zoja", "Zdenko", "Gabriela", "Dezider", "Perla", "Arpád", "Valentín", "Pravoslav", "Ida, Liana", "Miloslava", "Jaromír", "Vlasta", "Lívia", "Eleonóra", "Etela", "Roman, Romana", "Matej", "Frederik, Frederika", "Viktor", "Alexander", "Zlatica", ],
	[ "Albín", "Anežka", "Bohumil, Bohumila", "Kazimír", "Fridrich", "Radoslav, Radoslava", "Tomáš", "Alan, Alana", "Františka", "Branislav, Bruno", "Angela, Angelika", "Gregor", "Vlastimil", "Matilda", "Svetlana", "Boleslav", "Ľubica", "Eduard", "Jozef", "Víťazoslav, Klaudius", "Blahoslav", "Beňadik", "Adrián", "Gabriel", "Marián", "Emanuel", "Alena", "Soňa", "Miroslav", "Vieroslava", "Benjamín", ],
	[ "Hugo", "Zita", "Richard", "Izidor", "Miroslava", "Irena", "Zoltán", "Albert", "Milena", "Igor", "Július", "Estera", "Aleš", "Justína", "Fedor", "Dana, Danica", "Rudolf", "Valér", "Jela", "Marcel", "Ervin", "Slavomír", "Vojtech", "Juraj", "Marek", "Jaroslava", "Jaroslav", "Jarmila", "Lea", "Anastázia", ],
	[ "", "Žigmund", "Galina", "Florián", "Lesana, Lesia", "Hermína", "Monika", "Ingrida", "Roland", "Viktória", "Blažena", "Pankrác", "Servác", "Bonifác", "Žofia", "Svetozár", "Gizela", "Viola", "Gertrúda", "Bernard", "Zina", "Júlia, Juliána", "Želmíra", "Ela", "Urban", "Dušan", "Iveta", "Viliam", "Vilma", "Ferdinand", "Petronela, Petrana", ],
	[ "Žaneta", "Xénia, Oxana", "Karolína", "Lenka", "Laura", "Norbert", "Róbert", "Medard", "Stanislava", "Margaréta", "Dobroslava", "Zlatko", "Anton", "Vasiľ", "Vít", "Blanka, Bianka", "Adolf", "Vratislav", "Alfréd", "Valéria", "Alojz", "Paulína", "Sidónia", "Ján", "Olívia, Tadeáš", "Adriána", "Ladislav, Ladislava", "Beáta", "Peter, Pavol", "Melánia", ],
	[ "Diana", "Berta", "Miloslav", "Prokop", "", "Patrik, Patrícia", "Oliver", "Ivan", "Lujza", "Amália", "Milota", "Nina", "Margita", "Kamil", "Henrich", "Drahomír", "Bohuslav", "Kamila", "Dušana", "Iľja, Eliáš", "Daniel", "Magdaléna", "Oľga", "Vladimír", "Jakub", "Anna, Hana", "Božena", "Krištof", "Marta", "Libuša", "Ignác", ],
	[ "Božidara", "Gustáv", "Jerguš", "Dominik, Dominika", "Hortenzia", "Jozefína", "Štefánia", "Oskár", "Ľubomíra", "Vavrinec", "Zuzana", "Darina", "Ľubomír", "Mojmír", "Marcela", "Leonard", "Milica", "Elena, Helena", "Lýdia", "Anabela", "Jana", "Tichomír", "Filip", "Bartolomej", "Ľudovít", "Samuel", "Silvia", "Augustín", "Nikola", "Ružena", "Nora", ],
	[ "Drahoslava", "Linda", "Belo", "Rozália", "Regína", "Alica", "Marianna", "Miriama", "Martina", "Oleg", "Bystrík", "Mária", "Ctibor", "Ľudomil", "Jolana", "Ľudmila", "Olympia", "Eugénia", "Konštantín", "Ľuboslav, Ľuboslava", "Matúš", "Móric", "Zdenka", "Ľuboš, Ľubor", "Vladislav", "Edita", "Cyprián", "Václav", "Michal, Michaela", "Jarolím", ],
	[ "Arnold", "Levoslav", "Stela", "František", "Viera", "Natália", "Eliška", "Brigita", "Dionýz", "Slavomíra", "Valentína", "Maximilián", "Koloman", "Boris", "Terézia", "Vladimíra", "Hedviga", "Lukáš", "Kristián", "Vendelín", "Uršula", "Sergej", "Alojzia", "Kvetoslava", "Aurel", "Demeter", "Sabína", "Dobromila", "Klára", "Šimon, Šimona", "Aurélia", ],
	[ "Denis, Denisa", "", "Hubert", "Karol", "Imrich", "Renáta", "René", "Bohumír", "Teodor", "Tibor", "Martin, Maroš", "Svätopluk", "Stanislav", "Irma", "Leopold", "Agnesa", "Klaudia", "Eugen", "Alžbeta", "Félix", "Elvíra", "Cecília", "Klement", "Emília", "Katarína", "Kornel", "Milan", "Henrieta", "Vratko", "Ondrej, Andrej", ],
	[ "Edmund", "Bibiána", "Oldrich", "Barbora, Barbara", "Oto", "Mikuláš", "Ambróz", "Marína", "Izabela", "Radúz", "Hilda", "Otília", "Lucia", "Branislava, Bronislava", "Ivica", "Albína", "Kornélia", "Sláva, Slávka", "Judita", "Dagmara", "Bohdan", "Adela", "Nadežda", "Adam, Eva ", "", "Štefan", "Filoména", "Ivana, Ivona", "Milada", "Dávid", "Silvester", ]
    ];

    this.sviatky = [
	[ 1, 1, "Deň vzniku Slovenskej republiky" ],
	[ 6, 1, "Zjavenie Pána" ],
	[ 1, 5, "Sviatok práce" ],
	[ 8, 5, "Deň víťazstva nad fašizmom" ],
	[ 5, 7, "Sviatok svätého Cyrila a svätého Metoda" ],
	[ 29, 8, "Výročie Slovenského Národného Povstania" ],
	[ 1, 9, "Deň Ústavy Slovenskej republiky" ],
	[ 1, 11, "Sviatok všetkých svätých" ],
	[ 2, 11, "Pamiatka zosnulých" ],
	[ 15, 9, "Sedembolestná Panna Mária" ],
	[ 17, 11, "Deň boja za slobodu a demokraciu" ],
	[ 24, 12, "Štedrý deň" ],
	[ 25, 12, "Prvý sviatok vianočný" ],
	[ 26, 12, "Druhý sviatok vianočný" ],
    ];

    this.easter = [
	[ -7, "Kvetná nedeľa" ],
	[ -3, "Zelený štvrtok" ],
	[ -2, "Veľký piatok" ],
	[ -1, "Biela sobota" ],
	[ 0, "Veľkonočná nedeľa" ],
	[ 1, "Veľkonočný pondelok" ],
    ];

    return this;
}
