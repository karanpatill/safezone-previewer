import type { HomeContent } from './types';

const de: HomeContent = {
  toc: 'Auf dieser Seite',
  cropWhere: [
    'Instagram- und Facebook-Feed, wenn ein Reel zwischen Beiträgen abgespielt wird',
    'Instagram-Profilraster (3:4-Kacheln seit Januar 2025)',
    'Ältere quadratische Raster, quadratische Platzierungen bei Facebook und LinkedIn, Link-Vorschauen',
  ],
  sections: [
    {
      id: 'what',
      title: 'Was eine Safe Zone wirklich ist',
      blocks: [
        { p: 'Die Safe Zone ist der Teil des Hochkantbildes, auf den keine Plattform ihre Oberfläche legt. Instagram Reels, TikTok und YouTube Shorts spielen dein Video randlos auf einer Fläche von 1080 × 1920 Pixeln ab und zeichnen darüber Buttons, Bildunterschrift, Fortschrittsbalken und Navigation. Nichts davon ist ausgespart: Die App malt ihre Bedienelemente direkt auf deine Pixel und legt zusätzlich einen dunklen Verlauf darunter, damit ihr eigener weißer Text lesbar bleibt.' },
        { p: 'Deshalb kann ein Bild, das im Schnittprogramm perfekt aussieht, nach dem Hochladen auseinanderfallen. Der Untertitel im unteren Drittel läuft in die Bildunterschrift und den Audio-Hinweis; der Preis in der Ecke eines Produktbilds verschwindet hinter dem Like-Button; das etwas hoch kadrierte Gesicht landet unter den Tabs „Folge ich / Für dich“. Das Schnittprogramm weiß nichts von der Oberfläche, die später darübergelegt wird – in der Desktop-Vorschau fällt das Problem also nie auf.' },
        { p: 'Eine Safe Zone ist keine Geschmacksfrage, sondern besteht aus vier gemessenen Rändern – oben, rechts, unten und links – in Pixeln des Ausgabeformats. Alles, was gesehen und gelesen werden muss (Texte, Logos, Gesichter, Produktdetails, Call-to-Actions), gehört in das Rechteck, das übrig bleibt. Hintergrund, Texturen und Bewegung dürfen und sollen weiter das ganze 9:16 füllen: Dieser Bereich bleibt sichtbar, ist aber nicht verlässlich.' },
        { p: 'Mit SafeZoneSnap prüfst du das vor dem Posten. Lade ein Bild oder Video, wähle die Plattform – die Vorschau zeichnet eine originalgetreue Simulation der Oberfläche, das exakte sichere Rechteck, die verdeckten Bereiche und die Zuschnitte in Feed und Profil. Alles läuft in deinem Browser; deine Dateien werden nie auf einen Server hochgeladen.' },
      ],
    },
    {
      id: 'why',
      title: 'Warum die Oberfläche dort liegt, wo sie liegt',
      blocks: [
        { h3: 'Unten ist es immer am vollsten' },
        { p: 'Unten sammeln sich die Identität des Creators (Profilbild, Name und Folgen- oder Abonnieren-Button), die Bildunterschrift, der Audio-Hinweis, der Fortschrittsbalken und auf den meisten Handys die Navigation der App. Das sind vier bis sechs gestapelte Zeilen, weshalb die unteren Ränder in Hunderten von Pixeln gemessen werden: 380 px bei Shorts, 420 px bei Reels und 480 px bei TikTok, wo Bildunterschriften länger sind und Hashtags oft in eine zweite Zeile umbrechen. Anzeigen brauchen wegen des Call-to-Action-Buttons noch mehr Platz.' },
        { h3: 'Rechts sitzt die Aktionsleiste' },
        { p: 'Likes, Kommentare, Teilen, Speichern und der Audio- oder Remix-Shortcut sind rechts in einer Spalte gestapelt, die etwa auf halber Höhe beginnt und bis in den Bereich der Bildunterschrift reicht. Mit Beschriftung ist sie 120 bis 150 px breit – darum ist der rechte Rand immer größer als der linke.' },
        { h3: 'Oben: Tabs, Suche und Statusleiste' },
        { p: 'Oben liegen die Statusleiste des Telefons und eine einzelne App-Zeile mit Titel oder Feed-Umschalter und einem Kamera- oder Suchsymbol. Die oberen Ränder sind daher kleiner: 160 px bei Shorts, 180 px bei TikTok und 220 px bei Reels. Stories sind die Ausnahme: Fortschrittsanzeige, Kontoname und Schließen-Button schieben den freien Bereich auf etwa 250 px.' },
        { h3: 'Das Handyformat ändert sich, die Regel nicht' },
        { p: 'Die meisten aktuellen Smartphones haben ein Display von etwa 19,5:9 und sind damit länger als 9:16. Manche Apps legen die Navigation dort unter das Video und verdecken weniger. Da du das Gerät deines Publikums nicht wählst, werden Safe Zones für den ungünstigsten Fall berechnet: die komplette Oberfläche über dem kompletten 1080 × 1920-Frame.' },
      ],
    },
    {
      id: 'specs',
      title: 'Safe-Zone-Maße nach Plattform',
      blocks: [
        { p: 'Die Tabelle zeigt die Ränder, die jede SafeZoneSnap-Voreinstellung auf dem Standardformat 1080 × 1920 verwendet. „Safe Zone“ ist das Rechteck, das nach Abzug aller vier Ränder bleibt, „Nutzbar“ sein Anteil an der Gesamtfläche. Die Zeilen für Stories und Reels-Anzeigen folgen Metas veröffentlichten Vorgaben; die organischen Werte für Reels, TikTok und Shorts sind Referenzmessungen am aktuellen Layout der Apps.' },
        { table: 'specs' },
        { h3: 'Instagram Reels' },
        { p: 'Halte Text innerhalb von x 60–940 und y 220–1500. Der Kontoname beginnt bei etwa y 1550, darunter folgen Bildunterschrift und Audio. Erscheint das Reel auch im Hauptfeed, entfernt der 4:5-Zuschnitt oben und unten je 285 px – oben ist das strenger als die Reels-Oberfläche selbst.' },
        { h3: 'TikTok' },
        { p: 'Halte Text innerhalb von x 60–930 und y 180–1440. TikTok hat den höchsten unteren Block: Die Bildunterschrift zeigt mehr Text, Hashtags brechen um, und Audio, TikTok-Shop-Links und Effekt-Labels können sich stapeln. Die rechte Spalte ist wegen des Profilbilds mit Folgen-Badge auch etwas breiter.' },
        { h3: 'YouTube Shorts' },
        { p: 'Halte Text innerhalb von x 60–940 und y 160–1540. Shorts bietet die größte organische Safe Zone: Titel, Kanalzeile und Abonnieren-Button sitzen tiefer, die obere Leiste enthält nur Suche und Menü. Die Daumen-hoch- und Daumen-runter-Buttons beginnen recht weit oben – meide deshalb auch den rechten Rand auf halber Höhe.' },
        { h3: 'Stories und Reels-Anzeigen' },
        { p: 'Für Stories empfiehlt Meta, oben und unten etwa 14 % des Bildes – rund 250 px – freizuhalten. Für Reels-Anzeigen lautet die Vorgabe: oben 14 % (250 px), unten 35 % (670 px) und seitlich je 6 % (65 px) ohne Text und Logos. Läuft ein Motiv sowohl organisch als auch als Anzeige, gestalte es nach den Anzeigen-Rändern.' },
      ],
    },
    {
      id: 'crops',
      title: 'Feed- und Profilzuschnitte: die zweite Safe Zone',
      blocks: [
        { p: 'Ein Hochkantvideo wird nicht immer in 9:16 gezeigt. Im Instagram- und Facebook-Feed wird es auf 4:5 beschnitten; im Profilraster wird es zur 3:4-Kachel, dem Format, das Instagram im Januar 2025 eingeführt hat; andere Oberflächen nutzen weiterhin 1:1. Jeder Zuschnitt wird aus der Bildmitte genommen und entfernt oben und unten gleich breite Streifen.' },
        { table: 'crops' },
        { p: 'Praktisch wird der obere Bildrand von zwei Seiten eingeengt: Die Reels-Oberfläche verdeckt die ersten 220 px, der 4:5-Zuschnitt entfernt die ersten 285 px. Eine Headline bei y 240 ist im Reels-Tab sichtbar, im Feed aber abgeschnitten. Muss dein Reel an beiden Orten funktionieren, gilt y 285 als tatsächliche Oberkante des Textbereichs. Halte Titel auf Titelbildern innerhalb der mittleren 1080 × 1440, damit sie im Profilraster nicht beschnitten werden.' },
      ],
    },
    {
      id: 'math',
      title: 'Ränder auf jede Auflösung umrechnen',
      blocks: [
        { p: 'Die Ränder werden in Pixeln auf 1080 × 1920 angegeben, du schneidest aber vielleicht in 720 × 1280, in 4K hochkant oder auf einer beliebigen Design-Fläche. Da jede Plattform das Video auf den Bildschirm skaliert, skalieren die Ränder proportional mit. Rechne sie einmal in Prozent um, dann gelten sie für jede Größe.' },
        { pre: 'oben%  = oben  / 1920        rechts% = rechts / 1080\nunten% = unten / 1920        links%  = links  / 1080\n\nsichere_Breite = 1080 − 60 − 140  = 880 px\nsichere_Höhe   = 1920 − 220 − 420 = 1280 px   (Instagram Reels)' },
        { p: 'Für Reels ergibt das 11,46 % oben, 21,88 % unten, 5,56 % links und 12,96 % rechts. Bei 720 × 1280 sind das 147, 280, 40 und 93 px; bei 2160 × 3840 verdoppeln sich die Werte auf 440, 840, 120 und 280 px.' },
        { h3: 'Ein Layout für alle Plattformen' },
        { p: 'Veröffentlichst du denselben Schnitt in allen drei Apps, ist die Safe Zone die Schnittmenge aller Zonen: Nimm auf jeder Seite den größten Rand. Für Reels, TikTok und Shorts zusammen sind das 220 px oben, 150 px rechts, 480 px unten und 60 px links – ein Rechteck von <strong>870 × 1220 px</strong> (x 60–930, y 220–1440), rund 51 % des Bildes. Trage diese Werte in der Voreinstellung „Eigene“ ein, um diese universelle Hilfslinie immer im Blick zu haben.' },
      ],
    },
    {
      id: 'workflow',
      title: 'So nutzt du die Vorschau im echten Schnitt',
      blocks: [
        { ol: [
          '<strong>Exportiere ein Standbild oder einen kurzen Clip</strong> in finaler Auflösung, am besten die Stelle mit dem meisten Text.',
          '<strong>Zieh die Datei in die Vorschau</strong> oder füge einen Screenshot mit Strg + V ein. Videos laufen in Schleife und lassen sich mit dem Regler unter dem Bild durchsuchen.',
          '<strong>Wechsle die Plattform</strong>: Schraffierte Streifen zeigen verdeckte Bereiche, der grüne Rahmen ist das sichere Rechteck mit seiner Größe in Pixeln.',
          '<strong>Fahr mit dem Cursor</strong> über ein beliebiges Element, um seine exakten Koordinaten zu sehen und ob es in der Safe Zone, unter einem Teil der Oberfläche oder außerhalb des 4:5-Zuschnitts liegt.',
          '<strong>Teile das Ergebnis</strong>: „Vorschau laden“ speichert ein PNG in 1080 × 1920 zur Kundenfreigabe, „Maße kopieren“ legt die Ränder in die Zwischenablage.',
        ] },
        { p: '„Overlay laden“ erzeugt ein transparentes PNG in 1080 × 1920, das nur die aktivierten Hilfslinien enthält. Leg es in Premiere Pro, DaVinci Resolve, CapCut oder Canva auf die oberste Spur, sperre sie und blende sie vor dem Export aus, damit es nie im fertigen Video landet.' },
      ],
    },
    {
      id: 'type',
      title: 'Untertitel, Titel und Call-to-Actions richtig platzieren',
      blocks: [
        { ul: [
          '<strong>Untertitel:</strong> Setze die Grundlinie der unteren Zeile zwischen y 1180 und y 1420. So bleiben zwei Zeilen frei vom TikTok-Beschreibungsblock, dem strengsten der drei, ohne das Gesicht der sprechenden Person zu verdecken. Bei 1080 px Breite liest sich eine Schriftgröße von 48–64 px in kräftigem Schnitt gut auf dem Handy.',
          '<strong>Zeilenlänge:</strong> etwa 32 Zeichen pro Zeile und nie mehr als zwei Zeilen gleichzeitig. Ein schmaler, zentrierter Block ist sicherer als ein breiter.',
          '<strong>Hooks und Headlines:</strong> zwischen y 300 und y 900 halten, damit sie den 4:5-Zuschnitt und die obere Oberfläche überstehen.',
          '<strong>Logos:</strong> Wasserzeichen in den Ecken werden fast immer verdeckt; besser oben links innerhalb der Safe Zone platzieren.',
          '<strong>Call-to-Actions:</strong> Buttons, Preise und Pfeile gehören über den unteren Rand. Ein Pfeil auf „den Link unten“ zeigt am Ende auf die Oberfläche der App.',
        ] },
        { p: 'Bedenke schließlich, dass sich Oberflächen mit Updates, Sprache und Länge der Bildunterschrift ändern – je nach Quelle unterscheiden sich die Werte um 20 bis 80 px. Betrachte jede Safe Zone als Minimum und plane einen kleinen Puffer von 40 bis 60 px ein.' },
      ],
    },
  ],
  faqTitle: 'Häufige Fragen',
  faqs: [
    { q: 'Werden meine Videos oder Bilder irgendwohin hochgeladen?', a: 'Nein. Die Dateien werden direkt im Browser geöffnet und auf einem Canvas auf deinem eigenen Gerät gezeichnet. Nichts wird an einen Server gesendet. Nur deine Anzeigeeinstellungen (Plattform, Ebenen, Deckkraft) werden im lokalen Speicher des Browsers gemerkt.' },
    { q: 'Welche Auflösung sollte ein Hochkantvideo haben?', a: 'Exportiere in 1080 × 1920 Pixeln (9:16) für Reels, TikTok, Shorts und Stories. Die Plattformen akzeptieren auch höhere Auflösungen wie 2160 × 3840; die prozentualen Safe-Zone-Werte bleiben bei jeder Größe gleich.' },
    { q: 'Wie groß ist die Safe Zone bei Instagram Reels?', a: 'Auf einem 1080 × 1920-Frame mindestens 220 px oben, 420 px unten, 60 px links und 140 px rechts freihalten – es bleibt eine Fläche von 880 × 1280 px. Erscheint das Reel auch im Feed, halte Text wegen des 4:5-Zuschnitts unterhalb von y 285.' },
    { q: 'Wie groß ist die Safe Zone bei TikTok?', a: 'Mindestens 180 px oben, 480 px unten, 60 px links und 150 px rechts – das ergibt eine Fläche von 870 × 1260 px.' },
    { q: 'Gibt es eine Safe Zone für alle Plattformen?', a: 'Ja: Nimm auf jeder Seite den größten Rand. Für Reels, TikTok und Shorts zusammen sind das 220 px oben, 150 px rechts, 480 px unten und 60 px links, also 870 × 1220 px.' },
    { q: 'Kann ich das Overlay in CapCut, Premiere oder Canva nutzen?', a: 'Ja. „Overlay laden“ speichert ein transparentes PNG in 1080 × 1920 mit den aktiven Hilfslinien. Lege es als Referenz auf die oberste Ebene und blende es vor dem Export aus.' },
  ],
};

export default de;
