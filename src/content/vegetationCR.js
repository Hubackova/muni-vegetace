import React from "react";
import vegetace1 from "../../static/images/vegetation/vegetace1.jpg";
import vegetace2 from "../../static/images/vegetation/vegetace2.jpg";
import vegetace3 from "../../static/images/vegetation/vegetace3.jpg";
import vegetace4 from "../../static/images/vegetation/vegetace4.jpg";

export const en = {
  title: "Vegetation of Czech Republic",
  introduction: (
    <div>
      <div>
        Vegetace České republiky je čtyřdílná monografie, která systematicky shrnuje diverzitu
        vegetačních typů na území České republiky. Česká vegetace je členěna do 39 fytocenologických
        tříd, které se dále dělí na 138 svazů a 496 asociací. Pro každou z těchto vegetačních
        jednotek je uveden podrobný popis struktury a druhového složení, ekologie, dynamiky,
        rozšíření a významu včetně map rozšíření a srovnávacích tabulek druhového složení. Asociace
        byly přesně vymezeny pomocí formálních definic a testovány na souboru asi 100 000
        fytocenologických snímků obsažených v České národní fytocenologické databázi. Klasifikaci
        vegetace doprovází počítačový expertní systém pro určování asociací. Monografii zpracoval
        tým botaniků z Ústavu botaniky a zoologie Přírodovědecké fakulty Masarykovy univerzity ve
        spolupráci s odborníky z Botanického ústavu AV ČR a dalších institucí. Projekt byl
        financován Grantovou agenturou České republiky (projekty 206/02/0957, 206/05/0200,
        206/06/0659 a 206/09/0329) a Ministerstvem školství, mládeže a tělovýchovy (výzkumný záměr
        MŠM0021622416). Projektu byla udělena Cena předsedy Grantové agentury ČR za rok 2012.
      </div>

      <div>
        <b>Editor:</b> Milan Chytrý
      </div>

      <div>
        <b>Autoři textů:</b> Petr Bauer, Denisa Blažková, Karel Boublík, Tomáš Černý, Martina
        Čtvrtlíková, Jan Douda, Libor Ekrt, Ester Ekrtová, Michal Hájek, Petra Hájková, Petra
        Hanáková, Handrij Härtel, Radim Hédl, Aleš Hoffmann, Richard Hrivnák, Zdenka Hroudová, Milan
        Chytrý, Martin Kočí, Jiří Kolbek, František Krahulec, Tomáš Kučera, Deana Láníková
        (Simonová), Zdeňka Lososová, Jana Navrátilová, Zdenka Neuhäuslová, Jan Novák, Zdenka
        Otýpková, Helena Oťaheľová, Petr Petřík, Jan Roleček, Jaroslav Rydlo, Marcela Řezníčková,
        Jiří Sádlo, Kateřina Šumberová, Michaela Vítková a David Zelený
      </div>

      <div>
        <b>Technická spolupráce:</b> Jiří Danihelka, Ondřej Hájek, Katrin Karimová, Ilona Knollová,
        Štěpánka Králová, Klára Kubošová, Dana Michalcová, Jiří Rozehnal, Lubomír Tichý, Václav
        Zouhar a Kristýna Žáková
      </div>
    </div>
  ),
  books: [
    {
      title: "1. díl – Travinná a keříčková vegetace",
      year: "2007, druhé vydání 2010",
      link:
        "Chytrý M. (ed.) (2007): Vegetace České republiky 1. Travinná a keříčková vegetace / Vegetation of the Czech Republic 1. Grassland and Heathland Vegetation. Academia, Praha, 525 pp.",
      authors:
        "Autoři textů: Jiří Danihelka, Ondřej Hájek, Katrin Karimová, Ilona Knollová, Štěpánka Králová, Klára Kubošová, Dana Michalcová, Jiří Rozehnal, Lubomír Tichý, Václav Zouhar a Kristýna Žáková",
      technical:
        "Technická spolupráce: L. Tichý, I. Knollová, Z. Otýpková, J. Danihelka, O. Hájek, K. Kubošová, K. Karimová a J. Rozehnal",
      pdfLowRes: "PDF hrubé rozlišení (1. vydání 2007)",
      pdfLowResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-1-2007-low-resolution.pdf",
      pdfHighRes: "PDF jemné rozlišení (2. vydání 2010)",
      pdfHighResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-1-2007-2nd-edition-2010-high-resolution.pdf",
      img: vegetace1,
      review: (
        <div>
          <b>Recenze:</b>
          <li><a href="https://www.sci.muni.cz/botany/vegsci/include/review/Book-review_Vegetace-CR-1_Apostolova2008_Phytol-Balc.pdf">Iva Apostolova in Phytologia Balcanica 14: 149 (2008) </a></li>
          <li>Adolf Češka in Botanical Electronic News 394 (2008) </li>
          <li>Jürgen Dengler in Kieler Notizen zur Pflanzenkunde 35: 121–122 (2007) </li>
          <li>Hartmut Dierschke in Tuexenia 28: 279–293 (2008) </li>
          <li>
            {`Valentin B. Golub & L. F. Nikolaychuk in Rastitel'nost' Rossii 12: 152–155 (2008)`}
          </li>
          <li>Radim Hédl in Živa 2007(6): LXXXVIII (2007) </li>
          <li>
            Barbara Juskiewicz-Swaczyna in Bulletin of the European Dry Grassland Group 3: 28 (2009)
          </li>
          <li>Anna A. Kuzemko in Ukrainskii Botanichnii Zhurnal 66: 307–314 (2009) </li>
          <li>Detlef Mahn in Botanik und Naturschutz in Hessen 24: 135–143 (2012) </li>
          <li>Milan Valachovič in Zprávy České botanické společnosti 42: 358–360 (2007) </li>
          <li>Wofgang Willner in Neilreichia 5: 339–341 (2008) </li>
        </div>
      )
    },
    {
      title: "2. díl – Ruderální, plevelová, skalní a suťová vegetace",
      year: "2009",
      link:
        "Chytrý M. (ed.) (2009): Vegetace České republiky 2. Ruderální, plevelová, skalní a suťová vegetace / Vegetation of the Czech Republic 2. Ruderal, Weed, Rock and Scree vegetation. Academia, Praha, 520 pp.",
      authors:
        "Autoři textů: D. Láníková, Z. Lososová, J. Sádlo, M. Chytrý, Z. Otýpková, M. Kočí, P. Petřík, K. Šumberová, Z. Neuhäuslová, P. Hájková a M. Hájek",
      technical:
        "Technická spolupráce: Š. Králová, K. Karimová, J. Danihelka, L. Tichý, D. Michalcová, O. Hájek a K. Kubošová",
      pdfLowRes: "PDF hrubé rozlišení",
      pdfLowResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-2-2009-low-resolution.pdf",
      pdfHighRes: "PDF jemné rozlišení",
      pdfHighResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-2-2009-high-resolution.pdf",
      img: vegetace2,
      review: (
        <div>
          <b>Recenze:</b>
          <li>Iva Apostolova in Phytologia Balcanica 16: 169–170 (2010)</li>
          <li>
            {`Valentin B. Golub, Aleksei N. Sorokin & L. F. Nikolaychuk in Rastitel'nost' Rossii 16:
            73–76 (2010)`}
          </li>
          <li>Jürgen Dengler in Bulletin of the European Dry Grassland Group 13: 28–29 (2011) </li>
          <li>Radim Hédl in Živa 2007(4): LIX-LX (2010) </li>
          <li>
            Richard Hrivnák in Bulletin Slovenskej botanickej spoločnosti 32: 136, 146 (2010)
          </li>
          <li>Ján Kliment & Ivan Jarolímek in Folia Geobotanica 47: 105–115 (2012) </li>
          <li>Detlef Mahn in Botanik und Naturschutz in Hessen 24: 135–143 (2012) </li>
          <li>Milan Valachovič in Zprávy České botanické společnosti 45: 133-134 (2010) </li>
        </div>
      )
    },
    {
      title: "3. díl – Vodní a mokřadní vegetace",
      year: "2011",
      link:
        "Chytrý M. (ed.) (2011): Vegetace České republiky 3. Vodní a mokřadní vegetace / Vegetation of the Czech Republic 3. Aquatic and Wetland Vegetation. Academia, Praha, 827 pp.",
      authors:
        "Autoři textů: K. Šumberová, P. Hájková, M. Hájek, M. Chytrý, Z. Hroudová, J. Navrátilová, M. Čtvrtlíková, J. Sádlo, Z. Lososová, R. Hrivnák, J. Rydlo, H. Oťaheľová, P. Bauer, P. Hanáková, L. Ekrt a E. Ekrtová",
      technical:
        "Technická spolupráce: D. Michalcová, K. Žáková, J. Danihelka, Š. Králová, K. Karimová, L. Tichý, O. Hájek a M. Kočí",
      pdfLowRes: "PDF hrubé rozlišení",
      pdfLowResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-3-2011-low-resolution.pdf",
      pdfHighRes: "PDF jemné rozlišení",
      pdfHighResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-3-2011-high-resolution.pdf",
      img: vegetace3,
      review: (
        <div>
          <b>Recenze:</b>
          <li>Anonymous in Živa 2012: 24 (2012) </li>
          <li>János Csiky in Kitaibelia 18: 187–196 (2013) </li>
          <li>Adolf Češka in Botanical Electronic News 449 (2012) </li>
          <li>Hartmut Dierschke in Tuexenia 32: 372 (2012) </li>
          <li>Jürgen Dengler in Bulletin of the European Dry Grassland Group 13: 28–29 (2011) </li>
          <li>Daniel Dítě in Bryonora 48: 68–70 (2012) </li>
          <li>{`Valentin B. Golub, Aleksei N. Sorokin & L. F. Nikolaychuk in Rastitel´nost´ Rossii 20: 139–142 (2012)`}</li>
          <li>Ján Kliment in Zprávy České botanické společnosti 46: 394–396 (2011) </li>
          <li>Detlef Mahn in Botanik und Naturschutz in Hessen 24: 135–143 (2012) </li>
          <li>Jan Pergl in Folia Geobotanica 49 (2014) </li>
          <li>Joop Schaminée in Preslia 84: 325–326 (2012) </li>
          <li>Jozef Šibík in Bulletin Slovenskej botanickej spoločnosti 34: 124–126 (2012) </li>
          <li>Rossen Tzonev in Phytologia Balcanica 17: 385–386 (2011) </li>
        </div>
      )
    },
    {
      title: "4. díl – Lesní a křovinná vegetace",
      year: "2013",
      link:
        "Chytrý M. (ed.) (2013): Vegetace České republiky 4. Lesní a křovinná vegetace / Vegetation of the Czech Republic 4. Forest and Scrub Vegetation. Academia, Praha, 552 pp.",
      authors:
        "Autoři textů: M. Chytrý, J. Douda, J. Roleček, J. Sádlo, K. Boublík, R. Hédl, M. Vítková, D. Zelený, J. Navrátilová, Z. Neuhäuslová, P. Petřík, J. Kolbek, Z. Lososová, K. Šumberová a R. Hrivnák",
      technical:
        "Technická spolupráce: D. Michalcová, K. Žáková, J. Danihelka, L. Tichý, V. Zouhar, O. Hájek a M. Kočí",
      pdfLowRes: "PDF hrubé rozlišení",
      pdfLowResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-4-2013-low-resolution.pdf",
      pdfHighRes: "PDF jemné rozlišení",
      pdfHighResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-4-2013-high-resolution.pdf",
      img: vegetace4,
      review: (
        <div>
          <b>Recenze:</b>
          <li>Hartmut Dierschke in Tuexenia 34: 491–499 (2014) </li>
          <li>{`Valentin B. Golub in Rastitel'nost' Rossii 24: 154–160 (2014)`}</li>
          <li>Jaroslav Vojta in Živa 2015: XV (2015)</li>
        </div>
      )
    }
  ]
};

export const cz = {
  title: "Vegetace České Republiky",
  introduction: (
    <div>
      <div>
        Vegetace České republiky je čtyřdílná monografie, která systematicky shrnuje diverzitu
        vegetačních typů na území České republiky. Česká vegetace je členěna do 39 fytocenologických
        tříd, které se dále dělí na 138 svazů a 496 asociací. Pro každou z těchto vegetačních
        jednotek je uveden podrobný popis struktury a druhového složení, ekologie, dynamiky,
        rozšíření a významu včetně map rozšíření a srovnávacích tabulek druhového složení. Asociace
        byly přesně vymezeny pomocí formálních definic a testovány na souboru asi 100 000
        fytocenologických snímků obsažených v České národní fytocenologické databázi. Klasifikaci
        vegetace doprovází počítačový expertní systém pro určování asociací. Monografii zpracoval
        tým botaniků z Ústavu botaniky a zoologie Přírodovědecké fakulty Masarykovy univerzity ve
        spolupráci s odborníky z Botanického ústavu AV ČR a dalších institucí. Projekt byl
        financován Grantovou agenturou České republiky (projekty 206/02/0957, 206/05/0200,
        206/06/0659 a 206/09/0329) a Ministerstvem školství, mládeže a tělovýchovy (výzkumný záměr
        MŠM0021622416). Projektu byla udělena Cena předsedy Grantové agentury ČR za rok 2012.
      </div>
      <div>
        <b>Editor:</b> Milan Chytrý
      </div>
      <div>
        <b>Autoři textů:</b> Petr Bauer, Denisa Blažková, Karel Boublík, Tomáš Černý, Martina
        Čtvrtlíková, Jan Douda, Libor Ekrt, Ester Ekrtová, Michal Hájek, Petra Hájková, Petra
        Hanáková, Handrij Härtel, Radim Hédl, Aleš Hoffmann, Richard Hrivnák, Zdenka Hroudová, Milan
        Chytrý, Martin Kočí, Jiří Kolbek, František Krahulec, Tomáš Kučera, Deana Láníková
        (Simonová), Zdeňka Lososová, Jana Navrátilová, Zdenka Neuhäuslová, Jan Novák, Zdenka
        Otýpková, Helena Oťaheľová, Petr Petřík, Jan Roleček, Jaroslav Rydlo, Marcela Řezníčková,
        Jiří Sádlo, Kateřina Šumberová, Michaela Vítková a David Zelený
      </div>
      <div>
        <b>Technická spolupráce:</b> Jiří Danihelka, Ondřej Hájek, Katrin Karimová, Ilona Knollová,
        Štěpánka Králová, Klára Kubošová, Dana Michalcová, Jiří Rozehnal, Lubomír Tichý, Václav
        Zouhar a Kristýna Žáková
      </div>
    </div>
  ),
  books: [
    {
      title: "1. díl – Travinná a keříčková vegetace",
      year: "2007, druhé vydání 2010",
      link:
        "Chytrý M. (ed.) (2007): Vegetace České republiky 1. Travinná a keříčková vegetace / Vegetation of the Czech Republic 1. Grassland and Heathland Vegetation. Academia, Praha, 525 pp.",
      authors:
        "Autoři textů: Jiří Danihelka, Ondřej Hájek, Katrin Karimová, Ilona Knollová, Štěpánka Králová, Klára Kubošová, Dana Michalcová, Jiří Rozehnal, Lubomír Tichý, Václav Zouhar a Kristýna Žáková",
      technical:
        "Technická spolupráce: L. Tichý, I. Knollová, Z. Otýpková, J. Danihelka, O. Hájek, K. Kubošová, K. Karimová a J. Rozehnal",
      pdfLowRes: "PDF hrubé rozlišení (1. vydání 2007)",
      pdfLowResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-1-2007-low-resolution.pdf",
      pdfHighRes: "PDF jemné rozlišení (2. vydání 2010)",
      pdfHighResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-1-2007-2nd-edition-2010-high-resolution.pdf",
      img: vegetace1,
      review: (
        <div>
          <b>Recenze:</b>
          <li>Iva Apostolova in Phytologia Balcanica 14: 149 (2008) </li>
          <li>Adolf Češka in Botanical Electronic News 394 (2008) </li>
          <li>Jürgen Dengler in Kieler Notizen zur Pflanzenkunde 35: 121–122 (2007) </li>
          <li>Hartmut Dierschke in Tuexenia 28: 279–293 (2008) </li>
          <li>
            {`Valentin B. Golub & L. F. Nikolaychuk in Rastitel'nost' Rossii 12: 152–155 (2008)`}
          </li>
          <li>Radim Hédl in Živa 2007(6): LXXXVIII (2007) </li>
          <li>
            Barbara Juskiewicz-Swaczyna in Bulletin of the European Dry Grassland Group 3: 28 (2009)
          </li>
          <li>Anna A. Kuzemko in Ukrainskii Botanichnii Zhurnal 66: 307–314 (2009) </li>
          <li>Detlef Mahn in Botanik und Naturschutz in Hessen 24: 135–143 (2012) </li>
          <li>Milan Valachovič in Zprávy České botanické společnosti 42: 358–360 (2007) </li>
          <li>Wofgang Willner in Neilreichia 5: 339–341 (2008) </li>
        </div>
      )
    },
    {
      title: "2. díl – Ruderální, plevelová, skalní a suťová vegetace",
      year: "2009",
      link:
        "Chytrý M. (ed.) (2009): Vegetace České republiky 2. Ruderální, plevelová, skalní a suťová vegetace / Vegetation of the Czech Republic 2. Ruderal, Weed, Rock and Scree vegetation. Academia, Praha, 520 pp.",
      authors:
        "Autoři textů: D. Láníková, Z. Lososová, J. Sádlo, M. Chytrý, Z. Otýpková, M. Kočí, P. Petřík, K. Šumberová, Z. Neuhäuslová, P. Hájková a M. Hájek",
      technical:
        "Technická spolupráce: Š. Králová, K. Karimová, J. Danihelka, L. Tichý, D. Michalcová, O. Hájek a K. Kubošová",
      pdfLowRes: "PDF hrubé rozlišení",
      pdfLowResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-2-2009-low-resolution.pdf",
      pdfHighRes: "PDF jemné rozlišení",
      pdfHighResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-2-2009-high-resolution.pdf",
      img: vegetace2,
      review: (
        <div>
          <b>Recenze:</b>
          <li>Iva Apostolova in Phytologia Balcanica 16: 169–170 (2010)</li>
          <li>
            {`Valentin B. Golub, Aleksei N. Sorokin & L. F. Nikolaychuk in Rastitel'nost' Rossii 16:
            73–76 (2010)`}
          </li>
          <li>Jürgen Dengler in Bulletin of the European Dry Grassland Group 13: 28–29 (2011) </li>
          <li>Radim Hédl in Živa 2007(4): LIX-LX (2010) </li>
          <li>
            Richard Hrivnák in Bulletin Slovenskej botanickej spoločnosti 32: 136, 146 (2010)
          </li>
          <li>Ján Kliment & Ivan Jarolímek in Folia Geobotanica 47: 105–115 (2012) </li>
          <li>Detlef Mahn in Botanik und Naturschutz in Hessen 24: 135–143 (2012) </li>
          <li>Milan Valachovič in Zprávy České botanické společnosti 45: 133-134 (2010) </li>
        </div>
      )
    },
    {
      title: "3. díl – Vodní a mokřadní vegetace",
      year: "2011",
      link:
        "Chytrý M. (ed.) (2011): Vegetace České republiky 3. Vodní a mokřadní vegetace / Vegetation of the Czech Republic 3. Aquatic and Wetland Vegetation. Academia, Praha, 827 pp.",
      authors:
        "Autoři textů: K. Šumberová, P. Hájková, M. Hájek, M. Chytrý, Z. Hroudová, J. Navrátilová, M. Čtvrtlíková, J. Sádlo, Z. Lososová, R. Hrivnák, J. Rydlo, H. Oťaheľová, P. Bauer, P. Hanáková, L. Ekrt a E. Ekrtová",
      technical:
        "Technická spolupráce: D. Michalcová, K. Žáková, J. Danihelka, Š. Králová, K. Karimová, L. Tichý, O. Hájek a M. Kočí",
      pdfLowRes: "PDF hrubé rozlišení",
      pdfLowResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-3-2011-low-resolution.pdf",
      pdfHighRes: "PDF jemné rozlišení",
      pdfHighResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-3-2011-high-resolution.pdf",
      img: vegetace3,
      review: (
        <div>
          <b>Recenze:</b>
          <li>Anonymous in Živa 2012: 24 (2012) </li>
          <li>János Csiky in Kitaibelia 18: 187–196 (2013) </li>
          <li>Adolf Češka in Botanical Electronic News 449 (2012) </li>
          <li>Hartmut Dierschke in Tuexenia 32: 372 (2012) </li>
          <li>Jürgen Dengler in Bulletin of the European Dry Grassland Group 13: 28–29 (2011) </li>
          <li>Daniel Dítě in Bryonora 48: 68–70 (2012) </li>
          <li>{`Valentin B. Golub, Aleksei N. Sorokin & L. F. Nikolaychuk in Rastitel´nost´ Rossii 20: 139–142 (2012)`}</li>
          <li>Ján Kliment in Zprávy České botanické společnosti 46: 394–396 (2011) </li>
          <li>Detlef Mahn in Botanik und Naturschutz in Hessen 24: 135–143 (2012) </li>
          <li>Jan Pergl in Folia Geobotanica 49 (2014) </li>
          <li>Joop Schaminée in Preslia 84: 325–326 (2012) </li>
          <li>Jozef Šibík in Bulletin Slovenskej botanickej spoločnosti 34: 124–126 (2012) </li>
          <li>Rossen Tzonev in Phytologia Balcanica 17: 385–386 (2011) </li>
        </div>
      )
    },
    {
      title: "4. díl – Lesní a křovinná vegetace",
      year: "2013",
      link:
        "Chytrý M. (ed.) (2013): Vegetace České republiky 4. Lesní a křovinná vegetace / Vegetation of the Czech Republic 4. Forest and Scrub Vegetation. Academia, Praha, 552 pp.",
      authors:
        "Autoři textů: M. Chytrý, J. Douda, J. Roleček, J. Sádlo, K. Boublík, R. Hédl, M. Vítková, D. Zelený, J. Navrátilová, Z. Neuhäuslová, P. Petřík, J. Kolbek, Z. Lososová, K. Šumberová a R. Hrivnák",
      technical:
        "Technická spolupráce: D. Michalcová, K. Žáková, J. Danihelka, L. Tichý, V. Zouhar, O. Hájek a M. Kočí",
      pdfLowRes: "PDF hrubé rozlišení",
      pdfLowResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-4-2013-low-resolution.pdf",
      pdfHighRes: "PDF jemné rozlišení",
      pdfHighResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-4-2013-high-resolution.pdf",
      img: vegetace4,
      review: (
        <div>
          <b>Recenze:</b>
          <li>Hartmut Dierschke in Tuexenia 34: 491–499 (2014) </li>
          <li>{`Valentin B. Golub in Rastitel'nost' Rossii 24: 154–160 (2014)`}</li>
          <li>Jaroslav Vojta in Živa 2015: XV (2015)</li>
        </div>
      )
    }
  ]
};
