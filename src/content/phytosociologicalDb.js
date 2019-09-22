/* eslint-disable no-irregular-whitespace */
import React from "react";
import cnfdMap from "../../static/images/cnfd_map.png";

export const en = {
  menu: [
    { name: "introduction", text: "Úvod" },
    { name: "dbState", text: "Stav centrální databáze" },
    { name: "turboweg", text: "Turboveg for Windows" },
    { name: "data", text: "Výměna a poskytování dat" },
    { name: "turbowegCheck", text: "Turboweg CHECK-UP" },
    { name: "literature", text: "Literatura" },
    { name: "acknowledgements", text: "Poděkování" }
  ],
  introduction: (
    <div>
      <p>
        <b>Česká národní fytocenologické databáze (ČNFD)</b> je úložiště pro
        digitalizované fytocenologické snímky zaznamenané v České republice,
        které jsou používány pro účely základního i aplikovaného ekologického
        výzkumu i v ochraně přírody. Tato činnost je součástí širších
        mezinárodních aktivit řízených pracovní skupinou European Vegetation
        Survey při Mezinárodní společnosti pro výzkum vegetace (
        <a href="http://iavs.org/">
          International Association for Vegetation Science
        </a>
        ). V rámci partnerství s časopisy
        <a href="http://www.preslia.cz/">Preslia</a> a
        <a href="https://botanospol.cz/cs/zpravy-cbs">
          Zprávy České botanické společnosti
        </a>
        slouží Česká národní fytocenologická databáze k archivaci
        fytocenologických snímků vztahujících se k publikovaným článkům.
        Fytocenologické snímky z České národní fytocenologické databáze jsou
        součástí EVA (<a href="#">European Vegetation Archive</a>) a sPlot (
        <a href="#">the Global Vegetation Database</a>) Floristická data z
        fytocenologických snímků uložených v České národní fytocenologické
        databázi jsou veřejně dostupná na webovém portálu{" "}
        <a href="#">PLADIAS</a> a <a href="#">DaLiBor</a>.
      </p>
      <p>
        Česká národní fytocenologická databáze je spravována na Ústavu botaniky
        a zoologie Masarykovy univerzity v Brně, kde jsou také data z lokálních
        databází shromažďována v tzv. centrální databázi. Hlavní koordinátoři
        databáze jsou Milan Chytrý (chytry_at_sci.muni.cz) a Ilona Knollová
        (ikuzel_at_sci.muni.cz), lokální koordinátoři jsou také na jiných
        pracovištích (viz seznam koordinátorů databáze). Součástí databázového
        projektu je také rozvoj metod pro analýzu dat.
      </p>
      <p>
        Základní údaje o České národní fytocenologické databázi lze najít
        v článku v časopise Preslia (<a href="#">Chytrý & Rafajová 2003</a>).
        Aktualizované údaje se nacházejí také v krátké zprávě publikované
        v časopise Biodiversity & Ecology (
        <a href="#">Chytrý & Michalcová 2012</a>). Databáze je registrována
        v celosvětovém přehledu vegetačních databází
        <a href="#">Global Index of Vegetation-plot Databases</a> (
        <a href="#">Dengler et al. 2011</a>) pod kódem EU-CZ-001.
      </p>
      <p>
        <strong>
          Doporučená citace ČNFD:
          <br />
          Chytrý M. & Rafajová M. (2003): Czech National Phytosociological
          database: basic statistics of the available vegetation-plot data.
          Preslia 75: 1–15.
        </strong>
      </p>
    </div>
  ),
  dbState: (
    <div>
      <p>
        Databáze v současné době obsahuje přibližně 113,6 tis. snímků (113 568,
        červenec 2019) z celého území České republiky (obr. 1) zapsané od roku
        1922 (obr. 2, dole) více než 1000 botaniky. Největší počet snímků byl
        zaznamenán ve vegetaci listnatých lesů (Querco-Fagetea), luk a pastvin
        (Molinio-Arrhenatheretea) nebo vysokých ostřic
        (Phragmito-Magno-Caricetea; obr. 2, nahoře). Fytocenologická
        bibliografie s vyznačením publikací excerpovaných v centrální databázi
        je k dispozici <a href="#">zde</a>.
      </p>
      Obr1. Rozmístění fytocenologických snímků do čtverců v České republice
      podle České národní fytocenologické databáze. Velikost symbolů = Natural
      Breaks (rozložení dat)
      <img
        width={"70%"}
        src={cnfdMap}
        alt="Rozmístění fytocenologických snímků do čtverců v České republice
      podle České národní fytocenologické databáze"
      />
      Obr. 2 <br />
      Obr.3 Interaktivní mapa
    </div>
  ),
  turboweg: (
    <div>
      <p>
        Program TURBOVEG (Hennekens & Schaminée 2001) je základním softwarem
        také pro Českou národní fytocenologickou databázi. V České republice
        může tento software zdarma získat každý amatérský i profesionální
        botanik, ekolog, student nebo pracovník ochrany přírody zabývající se
        studiem vegetace, pokud souhlasí s dodržováním níže stanovených podmínek
        pro práci s databází a je ochoten účastnit se výměny elektronických dat
        uložených v databázi. Pro získání přístupových práv kontaktujte Ilonu
        Knollovou (ikuzel_at_sci.muni.cz) nebo Milana Chytrého
        (chytry_at_sci.muni.cz). Pro zpracování fytocenologických dat uložených
        v programu TURBOVEG doporučujeme používat program JUICE (Tichý 2002),
        který lze zdarma stáhnout zde.
      </p>
      <ul>
        <li>
          <div>Instalace</div>
        </li>
        <li>
          <div>Aktualizace</div>
          <div>
            Pro optimální funkci programu Turboveg doporučujeme pravidelně
            kontrolovat dostupné aktualizace programu (<a href="#">zde</a> ,
            vždy stahovat vaiantu „International, single user version“).
          </div>
          <div>
            <h5>Aktualizované verze společných databází:</h5>
            <div>
              Aktuální verze seznamu druhů: <a href="#">species.zip</a> (19. 10.
              2018)
              {/* TODO: – datum se doplňuje samo po aktualizaci souboru na server, bylo by dobré to zachovat */}
            </div>
            <div>
              Aktuální verze společných databází, tzv. popup lists:{" "}
              <a href="#">popup.zip</a>
              (17. 05. 2019)
              {/* TODO: – datum se doplňuje samo po aktualizaci souboru na server, bylo by dobré to zachovat */}
            </div>
            <p>
              Soubor species.zip rozbalte a složku Czechia_Slovakia_2015 vložte
              do složky species (C:/Program Files/TURBOWIN/species). V Turbovegu
              připojte seznam druhů (species list) pomocí modify database
              attributes ke konkrétní databázi. Soubor popup.zip rozbalte a
              obsah vložte do složky popup (C:/Program Files/TURBOWIN/popup),
              při vkládání přepište všechny staré soubory.
            </p>
          </div>
        </li>
        <li>
          <div>Zásady práce</div>
          <p>
            Každý zadavatel smí zadávat fytocenologické snímky do databáze jen
            pod určitými čísly přidělenými lokálním koordinátorem. Tím získává
            jistotu, že pod stejnými čísly nezadává jiné snímky někdo jiný. V
            rámci stejného číselného rozsahu přiděleného lokálním koordinátorem
            se zadávají i citace literatury, pokud jsou zadávané snímky
            přebírány z publikovaných zdrojů.
          </p>
          <p>
            Autoři, kteří dosud nemají přidělen rozsah čísel, dostanou čísla
            přidělena při poskytnutí prvního souboru snímků do centrální
            databáze, tj. nejprve číslují své snímky od jedničky a pak celý
            soubor pošlou koordinátorovi centrální databáze, který snímkům
            přidělí volná čísla a přečísluje je. Pokud se zadavatel chystá své
            snímky publikovat, je kvůli odkazování vhodné mít již přidělená
            čísla z centrální databáze. Seznam rozsahů již přidělených čísel
            najdete <a href="#">zde</a>
            {/* TODO: (aktualizovat také). */}
          </p>
          <p>
            Pro začátečníky doporučujeme k prostudování <a href="#">manuál </a>
            popisující vytváření databází a zadávání dat do Turbovegu.
          </p>
          <p>
            Seznam druhů cévnatých rostlin používaný v TURBOVEGu je
            modifikovanou verzí díla Liste der Gefäßpflanzen Mitteleuropas
            (Ehrendorfer 1973) v němž lze najít také většinu synonym pro správný
            převod nomenklatury. Pokud přesto vzniknou pochybnosti při
            synonymizaci jmen rostlin uváděných v originálních zdrojích, je lépe
            nepsat daný druh do seznamu druhů ve snímku, ale do databázového
            pole Remarks, a to spolu s hodnotou pokryvnosti. Odtud bude po
            vyjasnění nomenklatorického problému možné kdykoliv v budoucnosti
            převést údaj do databáze. Tento seznam byl v roce 2015 aktualizován.
            Žádné nové druhy se oproti verzi z roku 2010 nepřidávaly, pouze u
            některých došlo k úpravě jména. Obě verze jsou kompatibilní. Jména
            mechorostů a lišejníků jsou v databázi sjednocena podle standardní
            literatury (Frey et al. 1995, Pišút et al. 1993). Druhový seznam
            používaný v České národní fytocenologické databázi, označovaný jako
            Czechia_Slovakia_2015, je shodný se seznamem používaným v Centrální
            databázi fytocenóz na Slovensku. Připomínky a návrhy k seznamu druhů
            prosím adresujte na ikuzel_at_sci.muni.cz. Seznam syntaxonů
            používaný v TURBOVEGu je vytvořen podle díla Rostlinná společenstva
            České republiky a jejich ohrožení (Moravec et al. 1995).
          </p>
        </li>
        <li>
          <div>Koordinátoři</div>
          <ul>
            <li>
              Centrální koordinace: Ilona Knollová a Milan Chytrý, e-mail:
              ikuzel_at_sci.muni.cz, chytry_at_sci.muni.cz
            </li>
            <li>
              Masarykova univerzita a jižní Morava Ilona Knollová, e-mail:
              ikuzel_at_sci.muni.cz
            </li>
            <li>
              Česká zemědělská univerzita, Botanický ústav Průhonice a
              Univerzita Karlova Tomáš Černý, e-mail: cernyt_at_fld.czu.cz
            </li>
            <li>
              Jihočeská univerzita a jižní Čechy Milan Štech, e-mail:
              stech_at_prf.jcu.cz
            </li>
          </ul>
        </li>
      </ul>
    </div>
  ),
  data: (
    <div>
      <p>
        Pro zajištění účinné výměny dat si dovolujeme požádat všechny uživatele
        TURBOVEGu, kteří do databáze zadali jakákoliv data, aby je poskytli do
        centrální databáze zasláním na adresu ikuzel_at_sci.muni.cz nebo
        chytry_at_sci.muni.cz. Data z centrální databáze mohou být podle přání
        jejich autora nebo dodavatele poskytována ostatním uživatelům ve třech
        režimech:
        <ul>
          <li>Veřejná data volně dostupná online z veřejné části databáze</li>
          {/* TODO: (odkaz nefunguje, takže ani nevím, co tam původně bylo, zeptat Dany) */}
          <li>
            Veřejná data dostupná na požádání od správce centrální databáze pro
            účely akademického výzkumu nebo aplikací v ochraně přírody, nikoliv
            však pro komerční využití. Žádosti o poskytnutí dat vyřizuje Dana
            Michalcová (dočasně zastupuje Ilona Knollová, ikuzel_at_sci.muni.cz)
            nebo Milan Chytrý (chytry_at_sci.muni.cz) na základě e-mailem
            doručeného vysvětlení, jak a k čemu budou data použita, a
            specifikace výběru a požadovaného formátu. Kritéria výběru
            fytocenologických snímků z databáze a formáty exportovaných snímků
            najdete <a href="#">zde</a>.
          </li>
          <li>
            Neveřejná data pouze uložená v centrální databázi, ale veřejně
            neposkytovaná, případně poskytovaná pouze pro účely specifikované
            dodavatelem
          </li>
          <p>
            Při použití dat vybraných z databáze v publikacích se uvádí tato
            standardní citace databáze:
          </p>
          <p>
            Chytrý M. & Rafajová M. (2003): Czech National Phytosociological
            database: basic statistics of the available vegetation-plot data.
            Preslia 75: 1–15.
          </p>
          <p>
            Současně se citují i publikace se zdrojem dat nebo autoři
            nepublikovaných dat. Tyto citace lze vynechat v případě použití
            fytocenologických snímků z velkého množství zdrojů, v nichž snímky
            z žádného zdroje výrazně nepřevažují, a to u publikací, jejichž
            charakter nedovoluje citovat všechny zdroje (např. články s omezeným
            počtem citací).
          </p>
        </ul>
      </p>
    </div>
  ),
  turbowegCheck: (
    <div>
      Speciálně upravená databáze v programu MS ACCESS slouží ke kontrole
      fytocenologických snímků zapsaných do programu TURBOVEG. Její hlavní
      funkcí je vyhledávání chyb v druhových a hlavičkových datech. V druhových
      datech jsou to například překlepy ve jménech druhů nebo chybně uvedená
      vegetační patra, v hlavičkových datech např. chybějící údaje v povinných
      polích nebo chybné souřadnice. Aplikace se ovládá pomocí jednoduchého
      rozhraní, a je proto možné ji používat i bez znalosti práce s MS ACCESS.
      Chyby nebo údaje ve formě souhrnů se zobrazují jako přehledné sestavy,
      které lze vytisknout. TURBOVEG CHECK-UP používá pro hledání chyb tabulky,
      které lze pravidelně aktualizovat z těchto webových stránek. Kromě toho se
      v aplikaci nacházejí odkazy na informace o České národní fytocenologické
      databázi. Bližší informace a odkazy na stažení aplikace najdete{" "}
      <a href="#">zde</a>.
    </div>
  ),
  literature: (
    <div>
      <li>
        Ehrendorfer F. (ed.) (1973): Liste der Gefäßpflanzen Mitteleuropas. Ed.
        2. G. Fischer, Stuttgart.{" "}
      </li>
      <li>
        Frey W., Frahm J. P., Fischer E. & Lobin W. (1995): Die Moos- und
        Farnpflanzen Europas. G. Fischer, Stuttgart. ⦁ Hennekens S.M. &
        Schaminée J.H.J. (2001): TURBOVEG, a comprehensive data base management
        system for vegetation data. Journal of Vegetation Science, 12: 589–591.{" "}
        <a href="#">[pdf]</a>
      </li>
      <li>
        Chytrý M. & Michalcová D. (2012): Czech National Phytosociological
        Database. In: Dengler J., Oldeland J., Jansen F., Chytrý M., Ewald J.,
        Finckh M., Glöckler F., Lopez-Gonzalez G., Peet R.K. & Schaminée J.H.J.,
        Vegetation databases for the 21st century, Biodiversity & Ecology, 4:
        345. <a href="#">[pdf]</a>
      </li>
      <li>
        Chytrý M. & Rafajová M. (2003): Czech National Phytosociological
        Database: basic statistics of the available vegetation plot-data.
        Preslia, 75: 1–15. <a href="#">[pdf]</a>
      </li>
      <li>
        Kubát K., Hrouda L., Chrtek J. jun., Kaplan Z., Kirschner J. & Štěpánek
        J. (eds.) (2002): Klíč ke květeně České Republiky. Academia, Praha.{" "}
      </li>
      <li>
        Moravec J., Balátová-Tuláčková E., Blažková D., Hadač E., Hejný S.,
        Husák Š., Jeník J., Kolbek J., Krahulec F., Kropáč Z., Neuhäusl R.,
        Rybníček K., Řehořek V. & Vicherek J. (1995): Rostlinná společenstva
        České republiky a jejich ohrožení (Red list of plant communities of the
        Czech Republic and their endangerment). Ed. 2. Severočes. Přír., Suppl.
        1995: 1–206.
      </li>
      <li>
        Pišút I., Lackovicová A. & Lisická E. (1993): Súpis lišajníkov
        Slovenska. Biológia, 48, Suppl. 1: 53–98. ⦁ Schaminée J.H.J., Hennekens
        S.M., Chytrý M. & Rodwell J.S. (2009): Vegetation-plot data and
        databases in Europe: an overview. Preslia, 81: 173–185.
        <a href="#">[pdf]</a>
      </li>
      <li>
        Tichý L. (2002): JUICE, software for vegetation classification. Journal
        of Vegetation Science, 13: 451–453. <a href="#">[pdf]</a>
      </li>
    </div>
  ),
  acknowledgements: (
    <div>
      <div>
        Dovolujeme si poděkovat všem, kteří dosud přispěli k tvorbě České
        národní fytocenologické databáze:
      </div>
      <ul>
        <li>Irena Axmanová</li>
        <li>Lucie Benediktová</li>
        <li>Denisa Blažková</li>
        <li>Karel Boublík</li>
        <li>Jana Božková</li>
        <li>Kateřina Bubíková</li>
        <li>Lucia Cachovanová</li>
        <li>Jaroslava Cieslarová</li>
        <li>David Cigánek</li>
        <li>Šárka Cimalová</li>
        <li>Jaroslav Čáp</li>
        <li>Alžběta Čejková</li>
        <li>Barbora Čepelová</li>
        <li>Martin Černý</li>
        <li>Tomáš Černý</li>
        <li>Pavel Daněk</li>
        <li>Jiří Danihelka</li>
        <li>Alice Dingová</li>
        <li>Daniel Dítě</li>
        <li>Ctibor Dolejší</li>
        <li>Jana Ďoubalová</li>
        <li>Jan Douda</li>
        <li>Pavel Dřevojan</li>
        <li>Martin Duchoslav</li>
        <li>Helena Dušková</li>
        <li>Jana Dvořáková</li>
        <li>Jitka Effmertová</li>
        <li>Libor Ekrt</li>
        <li>Viktoria Eltsova</li>
        <li>Martina Fabšičová</li>
        <li>Karel Fajmon</li>
        <li>Petr Filippov</li>
        <li>Jarmila Filippovová</li>
        <li>Zuzana Fronková</li>
        <li>Jiří Galda</li>
        <li>Michal Gerža</li>
        <li>Marek Gonda</li>
        <li>Tomáš Grulich</li>
        <li>Michal Hájek</li>
        <li>Petra Hájková</li>
        <li>Jana Halúzová</li>
        <li>Petra Hanáková</li>
        <li>Handrij Härtel</li>
        <li>Helena Havránková</li>
        <li>Radim Hédl</li>
        <li>Monika Hejdová</li>
        <li>Aleš Hoffmann</li>
        <li>Viera Horáková</li>
        <li>Eliška Horodyská</li>
        <li>Lucie Hradilová</li>
        <li>Richard Hrivnák</li>
        <li>Zdenka Hroudová</li>
        <li>Jaroslav Hruban</li>
        <li>Monika Hrubanová</li>
        <li>Jindřich Chlapek</li>
        <li>Markéta Chudomelová</li>
        <li>Kryštof Chytrý</li>
        <li>Ivan Jindra</li>
        <li>Martin Jiroušek</li>
        <li>Blanka Jírů</li>
        <li>Jan Juřica</li>
        <li>Michal Juříček</li>
        <li>Jiří Juřička</li>
        <li>Kamila Juřičková</li>
        <li>Veronika Kalníková</li>
        <li>Veronika Kalusová</li>
        <li>Zdeněk Kaplan</li>
        <li>Katrin Karimová</li>
        <li>Petr Karlík</li>
        <li>Alexandra Klaudisová</li>
        <li>Leoš Klimeš</li>
        <li>Ilona Knollová</li>
        <li>Martin Kočí</li>
        <li>Tereza Koubková</li>
        <li>František Krahulec</li>
        <li>Lucie Kratochvílová</li>
        <li>Zdeněk Kropáč</li>
        <li>Pavel Křížek</li>
        <li>Tomáš Kučera</li>
        <li>Anna Kulíková</li>
        <li>Petr Kuneš</li>
        <li>Jana Kůrová</li>
        <li>Josef Kutlvašr</li>
        <li>Jitka Laburdová</li>
        <li>Flavia Landucci</li>
        <li>Deana Láníková</li>
        <li>Martin Lepší</li>
        <li>Zdeňka Lososová</li>
        <li>Hana Lukšíková</li>
        <li>Pavel Lustyk</li>
        <li>Samuel Lvončík</li>
        <li>Michal Mazák</li>
        <li>Kristina Merunková</li>
        <li>Dana Michalcová</li>
        <li>Zuzana Myšková</li>
        <li>Tereza Náhlíková</li>
        <li>Jana Navrátilová</li>
        <li>Lydie Navrátilová</li>
        <li>Martina Nejezchlebová</li>
        <li>Jiří Němec</li>
        <li>Zdenka Neuhäuslová</li>
        <li>Jana Nová</li>
        <li>Jan Novák</li>
        <li>Pavel Novák</li>
        <li>Ivan Ostrý</li>
        <li>Zdenka Otýpková</li>
        <li>Marcela Paloudová</li>
        <li>Petra Pavlíčková</li>
        <li>Sylvie Pecháčková</li>
        <li>Jan Pergl</li>
        <li>Tomáš Peterka</li>
        <li>Michaela Petrová</li>
        <li>Petr Petřík</li>
        <li>Kateřina Pišťková</li>
        <li>Zuzana Plesková</li>
        <li>Marie Popelářová</li>
        <li>Jan Prančl</li>
        <li>Helena Prokešová</li>
        <li>Petr Pyšek</li>
        <li>Marie Rafajová</li>
        <li>Frank Richter</li>
        <li>Ludmila Rivolová</li>
        <li>Jan Roleček</li>
        <li>Romana Roučková</li>
        <li>Zuzana Rozbrojová</li>
        <li>Jiří Rozehnal</li>
        <li>Eva Rozehnalová</li>
        <li>Marcela Řezníčková</li>
        <li>Jiří Sádlo</li>
        <li>Vojtěch Sedláček</li>
        <li>Hana Sekerková</li>
        <li>Martina Sojneková</li>
        <li>Zdeněk Soldán</li>
        <li>Zbyněk Sovík</li>
        <li>Lenka Sovíková</li>
        <li>Veronika Srnková</li>
        <li>Lenka Staňková</li>
        <li>Tomáš Svačina</li>
        <li>Milan Šenkýř</li>
        <li>Anna Šímová</li>
        <li>Petr Šmarda</li>
        <li>Eva Šmerdová (Hettenbergerová)</li>
        <li>Markéta Špelinová</li>
        <li>Petra Štěpánková</li>
        <li>Kateřina Šumberová</li>
        <li>Markéta Táborská</li>
        <li>Přemysl Tajek</li>
        <li>Lubomír Tichý</li>
        <li>Jana Tkačíková</li>
        <li>Adam Trčka</li>
        <li>Jarmila Urbánková</li>
        <li>Adam Veleba</li>
        <li>Jiří Velebil</li>
        <li>Jiří Vicherek</li>
        <li>Ondřej Vild</li>
        <li>Karla Vincenecová</li>
        <li>Richard Višňák</li>
        <li>Michaela Vítková</li>
        <li>Pavla Vlčková</li>
        <li>Martin Vojík</li>
        <li>Jaroslav Vojta</li>
        <li>Alena Vydrová</li>
        <li>Tomáš Vymyslický</li>
        <li>Petr Vysloužil</li>
        <li>Tomáš Zedínek</li>
        <li>David Zelený</li>
        <li>Iva Zítková</li>
        <li>Dominik Zukal</li>
        <li>Kristýna Žáková</li>
      </ul>
    </div>
  )
};

export const cz = {
  menu: [
    { name: "introduction", text: "Úvod" },
    { name: "dbState", text: "Stav centrální databáze" },
    { name: "turboweg", text: "Turboveg for Windows" },
    { name: "data", text: "Výměna a poskytování dat" },
    { name: "turbowegCheck", text: "Turboweg CHECK-UP" },
    { name: "literature", text: "Literatura" },
    { name: "acknowledgements", text: "Poděkování" }
  ],
  introduction: (
    <div>
      <p>
        <b>Česká národní fytocenologické databáze (ČNFD)</b> je úložiště pro
        digitalizované fytocenologické snímky zaznamenané v České republice,
        které jsou používány pro účely základního i aplikovaného ekologického
        výzkumu i v ochraně přírody. Tato činnost je součástí širších
        mezinárodních aktivit řízených pracovní skupinou European Vegetation
        Survey při Mezinárodní společnosti pro výzkum vegetace (
        <a href="http://iavs.org/">
          International Association for Vegetation Science
        </a>
        ). V rámci partnerství s časopisy
        <a href="http://www.preslia.cz/">Preslia</a> a
        <a href="https://botanospol.cz/cs/zpravy-cbs">
          Zprávy České botanické společnosti
        </a>
        slouží Česká národní fytocenologická databáze k archivaci
        fytocenologických snímků vztahujících se k publikovaným článkům.
        Fytocenologické snímky z České národní fytocenologické databáze jsou
        součástí EVA (<a href="#">European Vegetation Archive</a>) a sPlot (
        <a href="#">the Global Vegetation Database</a>) Floristická data z
        fytocenologických snímků uložených v České národní fytocenologické
        databázi jsou veřejně dostupná na webovém portálu{" "}
        <a href="#">PLADIAS</a> a <a href="#">DaLiBor</a>.
      </p>
      <p>
        Česká národní fytocenologická databáze je spravována na Ústavu botaniky
        a zoologie Masarykovy univerzity v Brně, kde jsou také data z lokálních
        databází shromažďována v tzv. centrální databázi. Hlavní koordinátoři
        databáze jsou Milan Chytrý (chytry_at_sci.muni.cz) a Ilona Knollová
        (ikuzel_at_sci.muni.cz), lokální koordinátoři jsou také na jiných
        pracovištích (viz seznam koordinátorů databáze). Součástí databázového
        projektu je také rozvoj metod pro analýzu dat.
      </p>
      <p>
        Základní údaje o České národní fytocenologické databázi lze najít
        v článku v časopise Preslia (<a href="#">Chytrý & Rafajová 2003</a>).
        Aktualizované údaje se nacházejí také v krátké zprávě publikované
        v časopise Biodiversity & Ecology (
        <a href="#">Chytrý & Michalcová 2012</a>). Databáze je registrována
        v celosvětovém přehledu vegetačních databází
        <a href="#">Global Index of Vegetation-plot Databases</a> (
        <a href="#">Dengler et al. 2011</a>) pod kódem EU-CZ-001.
      </p>
      <p>
        <strong>
          Doporučená citace ČNFD:
          <br />
          Chytrý M. & Rafajová M. (2003): Czech National Phytosociological
          database: basic statistics of the available vegetation-plot data.
          Preslia 75: 1–15.
        </strong>
      </p>
    </div>
  ),
  dbState: (
    <div>
      <p>
        Databáze v současné době obsahuje přibližně 113,6 tis. snímků (113 568,
        červenec 2019) z celého území České republiky (obr. 1) zapsané od roku
        1922 (obr. 2, dole) více než 1000 botaniky. Největší počet snímků byl
        zaznamenán ve vegetaci listnatých lesů (Querco-Fagetea), luk a pastvin
        (Molinio-Arrhenatheretea) nebo vysokých ostřic
        (Phragmito-Magno-Caricetea; obr. 2, nahoře). Fytocenologická
        bibliografie s vyznačením publikací excerpovaných v centrální databázi
        je k dispozici <a href="#">zde</a>.
      </p>
      Obr1. Rozmístění fytocenologických snímků do čtverců v České republice
      podle České národní fytocenologické databáze. Velikost symbolů = Natural
      Breaks (rozložení dat)
      <img
        width={"70%"}
        src={cnfdMap}
        alt="Rozmístění fytocenologických snímků do čtverců v České republice
      podle České národní fytocenologické databáze"
      />
      Obr. 2 <br />
      Obr.3 Interaktivní mapa
    </div>
  ),
  turboweg: (
    <div>
      <p>
        Program TURBOVEG (Hennekens & Schaminée 2001) je základním softwarem
        také pro Českou národní fytocenologickou databázi. V České republice
        může tento software zdarma získat každý amatérský i profesionální
        botanik, ekolog, student nebo pracovník ochrany přírody zabývající se
        studiem vegetace, pokud souhlasí s dodržováním níže stanovených podmínek
        pro práci s databází a je ochoten účastnit se výměny elektronických dat
        uložených v databázi. Pro získání přístupových práv kontaktujte Ilonu
        Knollovou (ikuzel_at_sci.muni.cz) nebo Milana Chytrého
        (chytry_at_sci.muni.cz). Pro zpracování fytocenologických dat uložených
        v programu TURBOVEG doporučujeme používat program JUICE (Tichý 2002),
        který lze zdarma stáhnout zde.
      </p>
      <ul>
        <li>
          <div>Instalace</div>
        </li>
        <li>
          <div>Aktualizace</div>
          <div>
            Pro optimální funkci programu Turboveg doporučujeme pravidelně
            kontrolovat dostupné aktualizace programu (<a href="#">zde</a> ,
            vždy stahovat vaiantu „International, single user version“).
          </div>
          <div>
            <h5>Aktualizované verze společných databází:</h5>
            <div>
              Aktuální verze seznamu druhů: <a href="#">species.zip</a> (19. 10.
              2018)
              {/* TODO: – datum se doplňuje samo po aktualizaci souboru na server, bylo by dobré to zachovat */}
            </div>
            <div>
              Aktuální verze společných databází, tzv. popup lists:{" "}
              <a href="#">popup.zip</a>
              (17. 05. 2019)
              {/* TODO: – datum se doplňuje samo po aktualizaci souboru na server, bylo by dobré to zachovat */}
            </div>
            <p>
              Soubor species.zip rozbalte a složku Czechia_Slovakia_2015 vložte
              do složky species (C:/Program Files/TURBOWIN/species). V Turbovegu
              připojte seznam druhů (species list) pomocí modify database
              attributes ke konkrétní databázi. Soubor popup.zip rozbalte a
              obsah vložte do složky popup (C:/Program Files/TURBOWIN/popup),
              při vkládání přepište všechny staré soubory.
            </p>
          </div>
        </li>
        <li>
          <div>Zásady práce</div>
          <p>
            Každý zadavatel smí zadávat fytocenologické snímky do databáze jen
            pod určitými čísly přidělenými lokálním koordinátorem. Tím získává
            jistotu, že pod stejnými čísly nezadává jiné snímky někdo jiný. V
            rámci stejného číselného rozsahu přiděleného lokálním koordinátorem
            se zadávají i citace literatury, pokud jsou zadávané snímky
            přebírány z publikovaných zdrojů.
          </p>
          <p>
            Autoři, kteří dosud nemají přidělen rozsah čísel, dostanou čísla
            přidělena při poskytnutí prvního souboru snímků do centrální
            databáze, tj. nejprve číslují své snímky od jedničky a pak celý
            soubor pošlou koordinátorovi centrální databáze, který snímkům
            přidělí volná čísla a přečísluje je. Pokud se zadavatel chystá své
            snímky publikovat, je kvůli odkazování vhodné mít již přidělená
            čísla z centrální databáze. Seznam rozsahů již přidělených čísel
            najdete <a href="#">zde</a>
            {/* TODO: (aktualizovat také). */}
          </p>
          <p>
            Pro začátečníky doporučujeme k prostudování <a href="#">manuál </a>
            popisující vytváření databází a zadávání dat do Turbovegu.
          </p>
          <p>
            Seznam druhů cévnatých rostlin používaný v TURBOVEGu je
            modifikovanou verzí díla Liste der Gefäßpflanzen Mitteleuropas
            (Ehrendorfer 1973) v němž lze najít také většinu synonym pro správný
            převod nomenklatury. Pokud přesto vzniknou pochybnosti při
            synonymizaci jmen rostlin uváděných v originálních zdrojích, je lépe
            nepsat daný druh do seznamu druhů ve snímku, ale do databázového
            pole Remarks, a to spolu s hodnotou pokryvnosti. Odtud bude po
            vyjasnění nomenklatorického problému možné kdykoliv v budoucnosti
            převést údaj do databáze. Tento seznam byl v roce 2015 aktualizován.
            Žádné nové druhy se oproti verzi z roku 2010 nepřidávaly, pouze u
            některých došlo k úpravě jména. Obě verze jsou kompatibilní. Jména
            mechorostů a lišejníků jsou v databázi sjednocena podle standardní
            literatury (Frey et al. 1995, Pišút et al. 1993). Druhový seznam
            používaný v České národní fytocenologické databázi, označovaný jako
            Czechia_Slovakia_2015, je shodný se seznamem používaným v Centrální
            databázi fytocenóz na Slovensku. Připomínky a návrhy k seznamu druhů
            prosím adresujte na ikuzel_at_sci.muni.cz. Seznam syntaxonů
            používaný v TURBOVEGu je vytvořen podle díla Rostlinná společenstva
            České republiky a jejich ohrožení (Moravec et al. 1995).
          </p>
        </li>
        <li>
          <div>Koordinátoři</div>
          <ul>
            <li>
              Centrální koordinace: Ilona Knollová a Milan Chytrý, e-mail:
              ikuzel_at_sci.muni.cz, chytry_at_sci.muni.cz
            </li>
            <li>
              Masarykova univerzita a jižní Morava Ilona Knollová, e-mail:
              ikuzel_at_sci.muni.cz
            </li>
            <li>
              Česká zemědělská univerzita, Botanický ústav Průhonice a
              Univerzita Karlova Tomáš Černý, e-mail: cernyt_at_fld.czu.cz
            </li>
            <li>
              Jihočeská univerzita a jižní Čechy Milan Štech, e-mail:
              stech_at_prf.jcu.cz
            </li>
          </ul>
        </li>
      </ul>
    </div>
  ),
  data: (
    <div>
      <p>
        Pro zajištění účinné výměny dat si dovolujeme požádat všechny uživatele
        TURBOVEGu, kteří do databáze zadali jakákoliv data, aby je poskytli do
        centrální databáze zasláním na adresu ikuzel_at_sci.muni.cz nebo
        chytry_at_sci.muni.cz. Data z centrální databáze mohou být podle přání
        jejich autora nebo dodavatele poskytována ostatním uživatelům ve třech
        režimech:
        <ul>
          <li>Veřejná data volně dostupná online z veřejné části databáze</li>
          {/* TODO: (odkaz nefunguje, takže ani nevím, co tam původně bylo, zeptat Dany) */}
          <li>
            Veřejná data dostupná na požádání od správce centrální databáze pro
            účely akademického výzkumu nebo aplikací v ochraně přírody, nikoliv
            však pro komerční využití. Žádosti o poskytnutí dat vyřizuje Dana
            Michalcová (dočasně zastupuje Ilona Knollová, ikuzel_at_sci.muni.cz)
            nebo Milan Chytrý (chytry_at_sci.muni.cz) na základě e-mailem
            doručeného vysvětlení, jak a k čemu budou data použita, a
            specifikace výběru a požadovaného formátu. Kritéria výběru
            fytocenologických snímků z databáze a formáty exportovaných snímků
            najdete <a href="#">zde</a>.
          </li>
          <li>
            Neveřejná data pouze uložená v centrální databázi, ale veřejně
            neposkytovaná, případně poskytovaná pouze pro účely specifikované
            dodavatelem
          </li>
          <p>
            Při použití dat vybraných z databáze v publikacích se uvádí tato
            standardní citace databáze:
          </p>
          <p>
            Chytrý M. & Rafajová M. (2003): Czech National Phytosociological
            database: basic statistics of the available vegetation-plot data.
            Preslia 75: 1–15.
          </p>
          <p>
            Současně se citují i publikace se zdrojem dat nebo autoři
            nepublikovaných dat. Tyto citace lze vynechat v případě použití
            fytocenologických snímků z velkého množství zdrojů, v nichž snímky
            z žádného zdroje výrazně nepřevažují, a to u publikací, jejichž
            charakter nedovoluje citovat všechny zdroje (např. články s omezeným
            počtem citací).
          </p>
        </ul>
      </p>
    </div>
  ),
  turbowegCheck: (
    <div>
      Speciálně upravená databáze v programu MS ACCESS slouží ke kontrole
      fytocenologických snímků zapsaných do programu TURBOVEG. Její hlavní
      funkcí je vyhledávání chyb v druhových a hlavičkových datech. V druhových
      datech jsou to například překlepy ve jménech druhů nebo chybně uvedená
      vegetační patra, v hlavičkových datech např. chybějící údaje v povinných
      polích nebo chybné souřadnice. Aplikace se ovládá pomocí jednoduchého
      rozhraní, a je proto možné ji používat i bez znalosti práce s MS ACCESS.
      Chyby nebo údaje ve formě souhrnů se zobrazují jako přehledné sestavy,
      které lze vytisknout. TURBOVEG CHECK-UP používá pro hledání chyb tabulky,
      které lze pravidelně aktualizovat z těchto webových stránek. Kromě toho se
      v aplikaci nacházejí odkazy na informace o České národní fytocenologické
      databázi. Bližší informace a odkazy na stažení aplikace najdete{" "}
      <a href="#">zde</a>.
    </div>
  ),
  literature: (
    <div>
      <li>
        Ehrendorfer F. (ed.) (1973): Liste der Gefäßpflanzen Mitteleuropas. Ed.
        2. G. Fischer, Stuttgart.{" "}
      </li>
      <li>
        Frey W., Frahm J. P., Fischer E. & Lobin W. (1995): Die Moos- und
        Farnpflanzen Europas. G. Fischer, Stuttgart. ⦁ Hennekens S.M. &
        Schaminée J.H.J. (2001): TURBOVEG, a comprehensive data base management
        system for vegetation data. Journal of Vegetation Science, 12: 589–591.{" "}
        <a href="#">[pdf]</a>
      </li>
      <li>
        Chytrý M. & Michalcová D. (2012): Czech National Phytosociological
        Database. In: Dengler J., Oldeland J., Jansen F., Chytrý M., Ewald J.,
        Finckh M., Glöckler F., Lopez-Gonzalez G., Peet R.K. & Schaminée J.H.J.,
        Vegetation databases for the 21st century, Biodiversity & Ecology, 4:
        345. <a href="#">[pdf]</a>
      </li>
      <li>
        Chytrý M. & Rafajová M. (2003): Czech National Phytosociological
        Database: basic statistics of the available vegetation plot-data.
        Preslia, 75: 1–15. <a href="#">[pdf]</a>
      </li>
      <li>
        Kubát K., Hrouda L., Chrtek J. jun., Kaplan Z., Kirschner J. & Štěpánek
        J. (eds.) (2002): Klíč ke květeně České Republiky. Academia, Praha.{" "}
      </li>
      <li>
        Moravec J., Balátová-Tuláčková E., Blažková D., Hadač E., Hejný S.,
        Husák Š., Jeník J., Kolbek J., Krahulec F., Kropáč Z., Neuhäusl R.,
        Rybníček K., Řehořek V. & Vicherek J. (1995): Rostlinná společenstva
        České republiky a jejich ohrožení (Red list of plant communities of the
        Czech Republic and their endangerment). Ed. 2. Severočes. Přír., Suppl.
        1995: 1–206.
      </li>
      <li>
        Pišút I., Lackovicová A. & Lisická E. (1993): Súpis lišajníkov
        Slovenska. Biológia, 48, Suppl. 1: 53–98. ⦁ Schaminée J.H.J., Hennekens
        S.M., Chytrý M. & Rodwell J.S. (2009): Vegetation-plot data and
        databases in Europe: an overview. Preslia, 81: 173–185.
        <a href="#">[pdf]</a>
      </li>
      <li>
        Tichý L. (2002): JUICE, software for vegetation classification. Journal
        of Vegetation Science, 13: 451–453. <a href="#">[pdf]</a>
      </li>
    </div>
  ),
  acknowledgements: (
    <div>
      <div>
        Dovolujeme si poděkovat všem, kteří dosud přispěli k tvorbě České
        národní fytocenologické databáze:
      </div>
      <ul>
        <li>Irena Axmanová</li>
        <li>Lucie Benediktová</li>
        <li>Denisa Blažková</li>
        <li>Karel Boublík</li>
        <li>Jana Božková</li>
        <li>Kateřina Bubíková</li>
        <li>Lucia Cachovanová</li>
        <li>Jaroslava Cieslarová</li>
        <li>David Cigánek</li>
        <li>Šárka Cimalová</li>
        <li>Jaroslav Čáp</li>
        <li>Alžběta Čejková</li>
        <li>Barbora Čepelová</li>
        <li>Martin Černý</li>
        <li>Tomáš Černý</li>
        <li>Pavel Daněk</li>
        <li>Jiří Danihelka</li>
        <li>Alice Dingová</li>
        <li>Daniel Dítě</li>
        <li>Ctibor Dolejší</li>
        <li>Jana Ďoubalová</li>
        <li>Jan Douda</li>
        <li>Pavel Dřevojan</li>
        <li>Martin Duchoslav</li>
        <li>Helena Dušková</li>
        <li>Jana Dvořáková</li>
        <li>Jitka Effmertová</li>
        <li>Libor Ekrt</li>
        <li>Viktoria Eltsova</li>
        <li>Martina Fabšičová</li>
        <li>Karel Fajmon</li>
        <li>Petr Filippov</li>
        <li>Jarmila Filippovová</li>
        <li>Zuzana Fronková</li>
        <li>Jiří Galda</li>
        <li>Michal Gerža</li>
        <li>Marek Gonda</li>
        <li>Tomáš Grulich</li>
        <li>Michal Hájek</li>
        <li>Petra Hájková</li>
        <li>Jana Halúzová</li>
        <li>Petra Hanáková</li>
        <li>Handrij Härtel</li>
        <li>Helena Havránková</li>
        <li>Radim Hédl</li>
        <li>Monika Hejdová</li>
        <li>Aleš Hoffmann</li>
        <li>Viera Horáková</li>
        <li>Eliška Horodyská</li>
        <li>Lucie Hradilová</li>
        <li>Richard Hrivnák</li>
        <li>Zdenka Hroudová</li>
        <li>Jaroslav Hruban</li>
        <li>Monika Hrubanová</li>
        <li>Jindřich Chlapek</li>
        <li>Markéta Chudomelová</li>
        <li>Kryštof Chytrý</li>
        <li>Ivan Jindra</li>
        <li>Martin Jiroušek</li>
        <li>Blanka Jírů</li>
        <li>Jan Juřica</li>
        <li>Michal Juříček</li>
        <li>Jiří Juřička</li>
        <li>Kamila Juřičková</li>
        <li>Veronika Kalníková</li>
        <li>Veronika Kalusová</li>
        <li>Zdeněk Kaplan</li>
        <li>Katrin Karimová</li>
        <li>Petr Karlík</li>
        <li>Alexandra Klaudisová</li>
        <li>Leoš Klimeš</li>
        <li>Ilona Knollová</li>
        <li>Martin Kočí</li>
        <li>Tereza Koubková</li>
        <li>František Krahulec</li>
        <li>Lucie Kratochvílová</li>
        <li>Zdeněk Kropáč</li>
        <li>Pavel Křížek</li>
        <li>Tomáš Kučera</li>
        <li>Anna Kulíková</li>
        <li>Petr Kuneš</li>
        <li>Jana Kůrová</li>
        <li>Josef Kutlvašr</li>
        <li>Jitka Laburdová</li>
        <li>Flavia Landucci</li>
        <li>Deana Láníková</li>
        <li>Martin Lepší</li>
        <li>Zdeňka Lososová</li>
        <li>Hana Lukšíková</li>
        <li>Pavel Lustyk</li>
        <li>Samuel Lvončík</li>
        <li>Michal Mazák</li>
        <li>Kristina Merunková</li>
        <li>Dana Michalcová</li>
        <li>Zuzana Myšková</li>
        <li>Tereza Náhlíková</li>
        <li>Jana Navrátilová</li>
        <li>Lydie Navrátilová</li>
        <li>Martina Nejezchlebová</li>
        <li>Jiří Němec</li>
        <li>Zdenka Neuhäuslová</li>
        <li>Jana Nová</li>
        <li>Jan Novák</li>
        <li>Pavel Novák</li>
        <li>Ivan Ostrý</li>
        <li>Zdenka Otýpková</li>
        <li>Marcela Paloudová</li>
        <li>Petra Pavlíčková</li>
        <li>Sylvie Pecháčková</li>
        <li>Jan Pergl</li>
        <li>Tomáš Peterka</li>
        <li>Michaela Petrová</li>
        <li>Petr Petřík</li>
        <li>Kateřina Pišťková</li>
        <li>Zuzana Plesková</li>
        <li>Marie Popelářová</li>
        <li>Jan Prančl</li>
        <li>Helena Prokešová</li>
        <li>Petr Pyšek</li>
        <li>Marie Rafajová</li>
        <li>Frank Richter</li>
        <li>Ludmila Rivolová</li>
        <li>Jan Roleček</li>
        <li>Romana Roučková</li>
        <li>Zuzana Rozbrojová</li>
        <li>Jiří Rozehnal</li>
        <li>Eva Rozehnalová</li>
        <li>Marcela Řezníčková</li>
        <li>Jiří Sádlo</li>
        <li>Vojtěch Sedláček</li>
        <li>Hana Sekerková</li>
        <li>Martina Sojneková</li>
        <li>Zdeněk Soldán</li>
        <li>Zbyněk Sovík</li>
        <li>Lenka Sovíková</li>
        <li>Veronika Srnková</li>
        <li>Lenka Staňková</li>
        <li>Tomáš Svačina</li>
        <li>Milan Šenkýř</li>
        <li>Anna Šímová</li>
        <li>Petr Šmarda</li>
        <li>Eva Šmerdová (Hettenbergerová)</li>
        <li>Markéta Špelinová</li>
        <li>Petra Štěpánková</li>
        <li>Kateřina Šumberová</li>
        <li>Markéta Táborská</li>
        <li>Přemysl Tajek</li>
        <li>Lubomír Tichý</li>
        <li>Jana Tkačíková</li>
        <li>Adam Trčka</li>
        <li>Jarmila Urbánková</li>
        <li>Adam Veleba</li>
        <li>Jiří Velebil</li>
        <li>Jiří Vicherek</li>
        <li>Ondřej Vild</li>
        <li>Karla Vincenecová</li>
        <li>Richard Višňák</li>
        <li>Michaela Vítková</li>
        <li>Pavla Vlčková</li>
        <li>Martin Vojík</li>
        <li>Jaroslav Vojta</li>
        <li>Alena Vydrová</li>
        <li>Tomáš Vymyslický</li>
        <li>Petr Vysloužil</li>
        <li>Tomáš Zedínek</li>
        <li>David Zelený</li>
        <li>Iva Zítková</li>
        <li>Dominik Zukal</li>
        <li>Kristýna Žáková</li>
      </ul>
    </div>
  )
};
