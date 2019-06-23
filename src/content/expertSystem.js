import React from "react";

export const en = {
  body: (
    <div>
      <h1>
        Expertní systém Vegetace České republiky pro automatickou klasifikaci fytocenologických
        snímků
      </h1>
      <div>
        Expertní systém Vegetace České republiky umožňuje automatické přiřazování fytocenologických
        snímků k asociacím vymezeným v monografii Vegetace České republiky. Přiřazování
        fytocenologických snímků do asociací probíhá ve dvou stupních:
      </div>
      <ol>
        <li>
          <b>Přiřazování pomocí formálních definic (metoda Cocktail)</b><br/> Metoda Cocktail vytváří
          jednoznačné formální definice asociací založené na přítomnosti sociologických skupin druhů
          a na dominanci vybraných druhů. Expertní systém prochází jednotlivé fytocenologické snímky
          a pokud zjistí, že jejich druhové složení odpovídá formální definici některé asociace,
          přiřadí je k této asociaci. Proces je podrobně popsán v 1. dílu Vegetace České republiky
          (Chytrý 2007) s doplňky ve 4. dílu (Chytrý 2013) a v článku <a href="https://www.sci.muni.cz/botany/chytry/JVS2003b.pdf" target="_blanc">Kočí et al. (2003)</a>.
        </li>
        <li>
        <b>Přiřazování pomocí podobnosti</b><br/> Některé fytocenologické snímky, obzvlášť ty, které obsahují
          málo ekologicky specializovaných druhů, nemusí být pomocí formálních definic přiřazeny k
          žádné asociaci. Tyto snímky reprezentují z fytocenologického hlediska porosty nevyhraněné
          nebo méně typické. Pokud existuje praktická potřeba přiřadit k asociacím všechny
          fytocenologické snímky, lze je následně přiřadit k asociacím na základě jejich numerické
          podobnosti ke snímkům jednoznačně splňujícím požadavky formálních definic. Metodiku tohoto
          následného přiřazení pomocí podobnosti popisují Kočí et al. (2003) a Tichý (2005).
        </li>
      </ol>

      <h3>Přiřazování snímků expertním systémem v programu JUICE</h3>
      <li>
        <b>Expertní systém – základní verze (<a href="http://www.sci.muni.cz/botany/chytry/vegetace-cr/Expert-system-Vegetation-CR-basic.zip">download</a>)</b> <br />
        Základní verze obsahují všechny asociace nelesní a lesní vegetace, které byly v projektu
        Vegetace České republiky formálně definovány. Tato verze přiřazuje fytocenologické snímky
        jen pomocí formálních definic.
      </li>
      <li>
        <b>Expertní systém – plná verze (<a href="http://www.sci.muni.cz/botany/chytry/vegetace-cr/Expert-system-Vegetation-CR-full.zip">download</a>) </b> <br />
        Plná verze obsahuje stejné asociace jako základní verze, ale umožňuje přiřadit
        fytocenologické snímky do asociací jak pomocí formálních definic, tak i na základě
        podobnosti. Při zpracovávání velkých souborů fytocenologických snímků však tato verze může
        pracovat pomalu.
      </li>
      <h3>Jak používat expertní systém v programu JUICE?</h3>
      <ol>
        <li>
          Soubory expertního systému se rozbalí z formátu *.zip do formátu *.txt a uloží na disk.
        </li>
        <li>
          Fytocenologické snímky určené k analýze se exportují z databáze v programu TURBOVEG do
          programu JUICE. Při převodu snímků do programu JUICE je potřeba použít druhový seznam
          KUBAT9 (snímky z TURBOVEGu se exportují ve formátu CC! a při načítání se použije soubor
          KUBAT9 jako importní filtr). Pokud je používán expertní systém pro nelesní vegetaci, měly
          by být do výběru zařazeny pouze snímky nelesní vegetace. Naopak expertní systém pro lesní
          vegetaci by měl být používán pouze pro snímky lesní vegetace. Snímky křovinné vegetace
          mohou být analyzovány oběma expertními systémy
        </li>
        <li>V programu JUICE se zvolí menu Analysis / Expert system.</li>
        <li>
          Tlačítkem Load ES File se nahraje do paměti soubor s příslušným expertním systémem z
          disku.
        </li>
        <li>
          Tlačítkem Modify Species Names se upraví nomenklatura druhů tak, aby odpovídala
          nomenklatuře používané expertním systémem.
        </li>
        <li>
          Obsahují-li snímky určené k analýze juvenilní dřeviny v bylinném patru, je potřeba je
          vymazat tlačítkem Delete Juveniles.
        </li>
        <li>
          Při převodu nomenklatury se v některých případech převedlo užší pojetí druhů na širší,
          čímž vznikly v tabulce druhové údaje vedené pod stejnými jmény. Ty je potřeba sloučit
          tlačítkem Merge Same Spec. Names. Přitom se sloučí i údaje stejného druhu v různých
          patrech, protože expertní systém předpokládá jen jeden výskyt stejného druhového jména v
          jednom snímku.
        </li>
        <li>
          Pokud je používána plná (Full) verze expertního systému, je potřeba v okénku vpravo dole
          nastavit prahovou hodnotu podobnosti pro přiřazování snímků k asociacím pomocí podobnosti.
          Čím vyšší hodnota, tím méně snímků se přiřadí, ale přiřadí se ty, které se dané asociaci
          více podobají. Při hodnotě 0 se přiřadí všechny snímky, ale některé budou dané asociaci
          velmi nepodobné.
        </li>
        <li>
          Spustí se běh expertního systému, a to buď tlačítkem Classify Relevé (bude se přiřazovat
          jeden snímek, na který se předtím kliklo myší) nebo Classify (colour) Relevés (budou se
          přiřazovat všechny snímky vybrané barvy).
        </li>
        <li>
          Při klasifikaci jednoho snímku se zobrazí v tabulce druhové skupiny, jejich zastoupení v
          daném snímku a asociace, do které je snímek přiřazen pomocí formální definice. Pokud není
          přiřazen, nezobrazí se žádná asociace. Snímek může být přiřazen i do více než jedné
          asociace.
        </li>
        <li>
          Při použití plné verze expertního systému se do tabulky vypíší asociace v pořadí klesající
          podobnosti se snímkem, a to u těch snímků, které nebyly přiřazeny do žádné asociace nebo
          byly přiřazeny do více než jedné asociace. Při klasifikaci více snímků se do záhlaví
          tabulky vepíší kódy asociací u těch snímků, které se přiřadily na základě formálních
          definic. Převod kódů na jména asociací lze dohledat v monografii Vegetace České republiky,
          přímo v textovém souboru expertního systému nebo přes <a href="https://www.sci.muni.cz/botany/vegsci/vegetace.php?lang=cz">Přehled vegetace.</a>
          U snímků, které se nepřiřadily k žádné asociaci, zůstane záhlaví prázdné. U snímků
          přiřazených do více než jedné asociace se zobrazí znak +. Při použití plné verze
          expertního systému se do tabulky vypíší nejpodobnější asociace u těch snímků, které nebyly
          přiřazeny do žádné asociace nebo byly přiřazeny do více než jedné asociace.
        </li>
        <li>
          Expertní systém běžně přiřazuje pomocí formálních definic některé snímky v porostu nebo
          lokálně rozlišeném společenstvu do určité asociace a jiné do žádné asociace, což znamená,
          že se porost skládá z míst s druhovým složením typickým pro danou asociaci a míst s méně
          typickým druhovým složením. Pokud expertní systém přiřadí různé snímky z jednoho relativně
          homogenního porostu k různým asociacím, je vhodné porost interpretovat jako přechodný mezi
          těmito asociacemi.
        </li>
        <li>
          Po přiřazení snímků do asociací expertním systémem doporučujeme vyzkoušet funkci
          vizualizace druhů přes <a href="https://www.sci.muni.cz/botany/juice/jc06_manXX.htm">Botanickou fotogalerii.</a>
        </li>
        <li>
          Oproti starším verzím expertního systému, které byly oddělené pro lesní a nelesní
          vegetací, je současná verze integrovaná a funguje pro všechny typy vegetace.
        </li>
      </ol>
    </div>
  )
};

export const cz = {
  body: (
    <div>
      <h1>
        Expertní systém Vegetace České republiky pro automatickou klasifikaci fytocenologických
        snímků
      </h1>
      <div>
        Expertní systém Vegetace České republiky umožňuje automatické přiřazování fytocenologických
        snímků k asociacím vymezeným v monografii Vegetace České republiky. Přiřazování
        fytocenologických snímků do asociací probíhá ve dvou stupních:
      </div>
      <ol>
        <li>
          <b>Přiřazování pomocí formálních definic (metoda Cocktail)</b><br/> Metoda Cocktail vytváří
          jednoznačné formální definice asociací založené na přítomnosti sociologických skupin druhů
          a na dominanci vybraných druhů. Expertní systém prochází jednotlivé fytocenologické snímky
          a pokud zjistí, že jejich druhové složení odpovídá formální definici některé asociace,
          přiřadí je k této asociaci. Proces je podrobně popsán v 1. dílu Vegetace České republiky
          (Chytrý 2007) s doplňky ve 4. dílu (Chytrý 2013) a v článku <a href="https://www.sci.muni.cz/botany/chytry/JVS2003b.pdf" target="_blanc">Kočí et al. (2003)</a>.
        </li>
        <li>
        <b>Přiřazování pomocí podobnosti</b><br/> Některé fytocenologické snímky, obzvlášť ty, které obsahují
          málo ekologicky specializovaných druhů, nemusí být pomocí formálních definic přiřazeny k
          žádné asociaci. Tyto snímky reprezentují z fytocenologického hlediska porosty nevyhraněné
          nebo méně typické. Pokud existuje praktická potřeba přiřadit k asociacím všechny
          fytocenologické snímky, lze je následně přiřadit k asociacím na základě jejich numerické
          podobnosti ke snímkům jednoznačně splňujícím požadavky formálních definic. Metodiku tohoto
          následného přiřazení pomocí podobnosti popisují Kočí et al. (2003) a Tichý (2005).
        </li>
      </ol>

      <h3>Přiřazování snímků expertním systémem v programu JUICE</h3>
      <li>
        <b>Expertní systém – základní verze (<a href="http://www.sci.muni.cz/botany/chytry/vegetace-cr/Expert-system-Vegetation-CR-basic.zip">download</a>)</b> <br />
        Základní verze obsahují všechny asociace nelesní a lesní vegetace, které byly v projektu
        Vegetace České republiky formálně definovány. Tato verze přiřazuje fytocenologické snímky
        jen pomocí formálních definic.
      </li>
      <li>
        <b>Expertní systém – plná verze (<a href="http://www.sci.muni.cz/botany/chytry/vegetace-cr/Expert-system-Vegetation-CR-full.zip">download</a>) </b> <br />
        Plná verze obsahuje stejné asociace jako základní verze, ale umožňuje přiřadit
        fytocenologické snímky do asociací jak pomocí formálních definic, tak i na základě
        podobnosti. Při zpracovávání velkých souborů fytocenologických snímků však tato verze může
        pracovat pomalu.
      </li>
      <h3>Jak používat expertní systém v programu JUICE?</h3>
      <ol>
        <li>
          Soubory expertního systému se rozbalí z formátu *.zip do formátu *.txt a uloží na disk.
        </li>
        <li>
          Fytocenologické snímky určené k analýze se exportují z databáze v programu TURBOVEG do
          programu JUICE. Při převodu snímků do programu JUICE je potřeba použít druhový seznam
          KUBAT9 (snímky z TURBOVEGu se exportují ve formátu CC! a při načítání se použije soubor
          KUBAT9 jako importní filtr). Pokud je používán expertní systém pro nelesní vegetaci, měly
          by být do výběru zařazeny pouze snímky nelesní vegetace. Naopak expertní systém pro lesní
          vegetaci by měl být používán pouze pro snímky lesní vegetace. Snímky křovinné vegetace
          mohou být analyzovány oběma expertními systémy
        </li>
        <li>V programu JUICE se zvolí menu Analysis / Expert system.</li>
        <li>
          Tlačítkem Load ES File se nahraje do paměti soubor s příslušným expertním systémem z
          disku.
        </li>
        <li>
          Tlačítkem Modify Species Names se upraví nomenklatura druhů tak, aby odpovídala
          nomenklatuře používané expertním systémem.
        </li>
        <li>
          Obsahují-li snímky určené k analýze juvenilní dřeviny v bylinném patru, je potřeba je
          vymazat tlačítkem Delete Juveniles.
        </li>
        <li>
          Při převodu nomenklatury se v některých případech převedlo užší pojetí druhů na širší,
          čímž vznikly v tabulce druhové údaje vedené pod stejnými jmény. Ty je potřeba sloučit
          tlačítkem Merge Same Spec. Names. Přitom se sloučí i údaje stejného druhu v různých
          patrech, protože expertní systém předpokládá jen jeden výskyt stejného druhového jména v
          jednom snímku.
        </li>
        <li>
          Pokud je používána plná (Full) verze expertního systému, je potřeba v okénku vpravo dole
          nastavit prahovou hodnotu podobnosti pro přiřazování snímků k asociacím pomocí podobnosti.
          Čím vyšší hodnota, tím méně snímků se přiřadí, ale přiřadí se ty, které se dané asociaci
          více podobají. Při hodnotě 0 se přiřadí všechny snímky, ale některé budou dané asociaci
          velmi nepodobné.
        </li>
        <li>
          Spustí se běh expertního systému, a to buď tlačítkem Classify Relevé (bude se přiřazovat
          jeden snímek, na který se předtím kliklo myší) nebo Classify (colour) Relevés (budou se
          přiřazovat všechny snímky vybrané barvy).
        </li>
        <li>
          Při klasifikaci jednoho snímku se zobrazí v tabulce druhové skupiny, jejich zastoupení v
          daném snímku a asociace, do které je snímek přiřazen pomocí formální definice. Pokud není
          přiřazen, nezobrazí se žádná asociace. Snímek může být přiřazen i do více než jedné
          asociace.
        </li>
        <li>
          Při použití plné verze expertního systému se do tabulky vypíší asociace v pořadí klesající
          podobnosti se snímkem, a to u těch snímků, které nebyly přiřazeny do žádné asociace nebo
          byly přiřazeny do více než jedné asociace. Při klasifikaci více snímků se do záhlaví
          tabulky vepíší kódy asociací u těch snímků, které se přiřadily na základě formálních
          definic. Převod kódů na jména asociací lze dohledat v monografii Vegetace České republiky,
          přímo v textovém souboru expertního systému nebo přes <a href="https://www.sci.muni.cz/botany/vegsci/vegetace.php?lang=cz">Přehled vegetace.</a>
          U snímků, které se nepřiřadily k žádné asociaci, zůstane záhlaví prázdné. U snímků
          přiřazených do více než jedné asociace se zobrazí znak +. Při použití plné verze
          expertního systému se do tabulky vypíší nejpodobnější asociace u těch snímků, které nebyly
          přiřazeny do žádné asociace nebo byly přiřazeny do více než jedné asociace.
        </li>
        <li>
          Expertní systém běžně přiřazuje pomocí formálních definic některé snímky v porostu nebo
          lokálně rozlišeném společenstvu do určité asociace a jiné do žádné asociace, což znamená,
          že se porost skládá z míst s druhovým složením typickým pro danou asociaci a míst s méně
          typickým druhovým složením. Pokud expertní systém přiřadí různé snímky z jednoho relativně
          homogenního porostu k různým asociacím, je vhodné porost interpretovat jako přechodný mezi
          těmito asociacemi.
        </li>
        <li>
          Po přiřazení snímků do asociací expertním systémem doporučujeme vyzkoušet funkci
          vizualizace druhů přes <a href="https://www.sci.muni.cz/botany/juice/jc06_manXX.htm">Botanickou fotogalerii.</a>
        </li>
        <li>
          Oproti starším verzím expertního systému, které byly oddělené pro lesní a nelesní
          vegetací, je současná verze integrovaná a funguje pro všechny typy vegetace.
        </li>
      </ol>
    </div>
  )
};
