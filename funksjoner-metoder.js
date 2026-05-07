/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her
function oddetallPartall(tall) {
    const rest = tall % 2; // Rest brukes til å vurdere om tallet er partall. Resten blir 0 når partall deles med 2.
    return rest === 0 ? "Partall" : "Oddetall"; // Dersom resten ble 0 returneres "Partall", ellers returneres "Oddetall"
}

console.log(oddetallPartall(10)); // "Partall"
console.log(oddetallPartall(9)); // "Oddetall"
console.log(oddetallPartall(4)); // "Partall"
console.log(oddetallPartall(-1)); // "Oddetall"
console.log(oddetallPartall(-2)); // "Partall"

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her
function storeBokstaver(tekst) {
    return tekst.toUpperCase(); // Streng-metoden endrer variabelen før den returneres
}

storeBokstaver("Dette er kult"); // "DETTE ER KULT!";

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her
function hilse(navn, time) {
    /*
        vi kan bruke en switch case med "uttrykk" (expressions)
        istedet for tekstsammenlikning, og dra nytte av at cases faller igjennom for å håndtere under 0 og over 23:
    */
    let hilsetekst;
    switch (true) {
        case time < 0:
        case time > 23:
            hilsetekst = "Ugyldig tid";
            break;
        case time <= 5:
            hilsetekst = `God natt ${navn}`;
            break;
        case time <= 11:
            hilsetekst = `God morgen ${navn}`;
            break;
        case time <= 17:
            hilsetekst = `God dag ${navn}`;
            break;
        case time <= 23:
            hilsetekst = `God kveld ${navn}`;
    }

    return hilsetekst;
}

console.log(hilse("Per", -1)); // "Ugyldig tid"
console.log(hilse("Pål", 9001)); // "Ugyldig tid"
console.log(hilse("Espen", 22)); // "God kveld Espen"
console.log(hilse("Askeladd", 10)); // God morgen Askeladd"

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her
function amputer(array) {
    return array.slice(1, -1);
    // Returnerer en "ny" liste bestående av allt ekskludert det første og
    // siste elementet, logisk ekvivalent med å fjerne det første og siste elementet.
}

console.log(amputer(["Rød", "Grønn", "Blå", "Gul"])); // ["Grønn", "Blå"]
console.log(amputer(["En", "To", "Tre", "Fire", "Fem", "Seks"])); // ["To", "Tre", "Fire", "Fem"]

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her

// En enkelt-linje pil-funksjon (pardon my norsk) kan gis en implisitt returverdi.
// Prettier pluginen til VSCode legger til parentes rundt parameternavnet men det behøves ikke.
const merPositiv = (tekst) => tekst.replace("vanskelig", "gøy").trim();

console.log(merPositiv("  Javascript er vanskelig   ")); // "Javascript er gøy"
console.log(merPositiv(" Det er vanskelig å bruke metoder ")); // "Det er gøy å bruke metoder"
console.log(merPositiv("   vanskelig        ")); // "gøy"

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her
items.shift(); // Fjerner første element ("shift"er det mot venstre).

items[items.indexOf("Viskelær")] = "Linjal"; // Finner først hvilken index Viskeler har, og erstatter elementet på den indeksen med Linjal

items.splice(0, 2, "Markeringspenn"); // Første element er fjernet tidligere, derfor kutter vi fra 0 til 2, ikke 1 til 3.

const nyListe = items.join(" | ");
console.log(nyListe); // "Markeringspenn | Linjal | Blyant | Markør"

const medBokstavenE = items.filter((element) => element.includes("e"));
console.log(medBokstavenE); // ["Markeringspenn"] fordi så mange elementer er borte innen nå.

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her
function listeXor(liste, streng) {
    if (liste.includes(streng)) {
        // Fjern elementet hvis det er der
        liste.splice(liste.indexOf(streng), 1);
    } else {
        // Legg til elementet hvis det ikke er der
        liste.push(streng);
    }

    return liste;
}

listeXor(["Rød", "Grønn"], "Blå"); // ["Rød", "Grønn", "Blå"]
listeXor(["Rød", "Grønn", "Blå"], "Blå"); // ["Rød", "Grønn"]

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her
function ordentligKuleTyper(innverdi) {
    switch (typeof innverdi) {
        case "string":
            break;
        case "number":
            innverdi *= 2;
            break;
        case "boolean":
            innverdi = innverdi ? "Ja" : "Nei";
            break;
        default:
            innverdi = "Kun primitive verdier";
    }

    return `😎${innverdi}😎`;
}

ordentligKuleTyper("Halla kompis!"); // "😎Halla kompis!😎"
ordentligKuleTyper(42); // "😎84😎"
ordentligKuleTyper(true); // "😎Ja😎"
ordentligKuleTyper(false); // "😎Nei😎"
ordentligKuleTyper([]); // "😎Kun primitive verdier😎"
