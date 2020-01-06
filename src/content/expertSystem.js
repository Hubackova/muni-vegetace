import React from "react";

export const en = {
  body: (
    <div>
      <h1>Expert system Vegetation of the Czech Republic</h1>
      <div>
        Expert system Vegetation of the Czech Republic enables automatic assignment of relevés to
        associations defined in the monograph Vegetation of the Czech Republic. Assignment of
        relevés proceeds in two steps:
      </div>
      <ol>
        <li>
          <b>Assignment using formal definitions (Cocktail method)</b>
          <br /> The Cocktail method creates unequivocal definitions of associations based on the
          presence of sociological species groups and dominance of selected species. Expert system
          evaluates individual relevés and assigns them to the associations. A detailed description
          of the process can be found in{" "}
          <a href="https://www.sci.muni.cz/botany/chytry/Vegetation-Czech-Rep-Summary.pdf">
            English Summary
          </a>{" "}
          of Vegetation of the Czech Republic or in{" "}
          <a href="https://www.sci.muni.cz/botany/chytry/JVS2003b.pdf" target="_blanc">
            Kočí et al. (2003)
          </a>
          .
        </li>
        <li>
          <b>Similarity-based assignment</b>
          <br /> Some relevés, especially those containing few ecologically specialized species, may
          remain unassigned using the formal definitions. From the phytosociological viewpoint,
          these relevés represent untypical stands. If necessary, these relevés may be assigned to
          associations based on their numerical similarity to relevés that fulfill requirements of
          formal definitions. This method of similarity-based assignment is described by{" "}
          <a href="https://www.sci.muni.cz/botany/chytry/JVS2003b.pdf">
            Kočí et al. (2003)
          </a> and{" "}
          <a href="https://link.springer.com/article/10.1007/s11258-004-5798-8">Tichý (2005)</a>.
        </li>
      </ol>

      <h3>Relevé assignment by expert system in the JUICE program</h3>
      <li>
        <b>
          Expert system – basic version (
          <a href="http://www.sci.muni.cz/botany/chytry/vegetace-cr/Expert-system-Vegetation-CR-basic.zip">
            download
          </a>
          )
        </b>{" "}
        <br />
        Basic version assigns relevés using formal definitions.
      </li>
      <li>
        <b>
          Expert system – full version (
          <a href="http://www.sci.muni.cz/botany/chytry/vegetace-cr/Expert-system-Vegetation-CR-full.zip">
            download
          </a>
          ){" "}
        </b>{" "}
        <br />
        Full version assigns relevés using formal definitions and similarity. The analysis with the
        full version is slower than the analysis with the basic version.
      </li>
      <h3>How to use the expert system in the JUICE program?</h3>
      <ol>
        <li>
          Unzip the expert system files from *.zip format to *.txt format and save them to a disk.
        </li>
        <li>
          Export relevés to be analysed from the TURBOVEG program to the JUICE program. TURBOVEG
          must contain the Czech-Slovak (formerly called Central European) species list, export must
          be in CC! file and species checklist{" "}
          <a href="http://www.sci.muni.cz/botany/juice/kubat9.txt">KUBAT9</a> must be used during
          relevé import to JUICE. Expert system for non-forest vegetation should be applied to
          non-forest vegetation only, and expert system for forest vegetation to forest vegetation
          only. Shrub vegetation can be identified using both expert systems.
        </li>
        <li>Select Analysis / Expert system in the JUICE program.</li>
        <li>Upload an expert system file by pressing Load ES File button.</li>
        <li>Modify species nomenclature by pressing Modify Species Names button.</li>
        <li>
          If there are juvenile species in the herb layer in the relevés to be analysed, they should
          be deleted by pressing Delete Juveniles button.
        </li>
        <li>
          In some cases, narrow species concepts were changed to broader concepts, resulting in
          repetitions of the same names in the tables. These must be merged using Merge Same Spec.
          Names button. This will also merge records of the same species in different vegetation
          layers, because expert system assumes that each species name is contained no more than
          once in the same relevé.
        </li>
        <li>
          Pokud je používána plná (Full) verze expertního systému, je potřeba v okénku vpravo dole
          nastavit prahovou hodnotu podobnosti pro přiřazování snímků k asociacím pomocí podobnosti.
          Čím vyšší hodnota, tím méně snímků se přiřadí, ale přiřadí se ty, které se dané asociaci
          více podobají. Při hodnotě 0 se přiřadí všechny snímky, ale některé budou dané asociaci
          velmi nepodobné.
        </li>
        <li>
          When using the full version of expert system, threshold similarity value for
          similarity-based assignment must be specified in a field in the bottom right part of the
          form. The higher the value, the fewer relevés will be assigned, while only those relevés
          will be assigned that have a high similarity to the association. If the threshold value is
          set to 0, all the relevés will be assigned, but some of them will be very dissimilar to
          the associations which they are assigned to.
        </li>
        <li>
          Run expert system using Classify Relevé button (a relevé marked by a previous mouse click
          will be identified) or Classify (colour) Relevés button (all relevés of a selected colour
          will be assigned).
        </li>
        <li>
          If a single relevé is classified, species groups present in this relevé and the assignment
          of the relevé to an association will be shown. No association will be shown if the relevé
          remains unclassified. Occasionally a relevé can be assigned to more than one association.
          If the full version of expert system is used, the table will contain a list of
          associations ranked by decreasing similarity with the relevé (in relevés unassigned to any
          association or those assigned to more than one association).
        </li>
        <li>
          If several relevés are classified, association codes will appear in the header of those
          relevés that were assigned based on the formal definitions. The legends for the codes can
          be found in the monograph Vegetation of the Czech Republic or in the expert system text
          file or <a href="https://pladias.cz/en/vegetation/">on Pladias</a> webpages. The header
          will remain empty in relevés unassigned to any association. Relevés assigned to more than
          one association will be marked with +. If the full version of expert system is used, the
          output will contain the most similar associations for those relevés which have remained
          unassigned to associations or were assigned to more than one association.
        </li>
        <li>
          Using formal definition, expert system normally assigns some relevés of a single stand to
          certain association while other relevés of the same stand remain unassigned. This means
          that the stand consists of patches with species composition typical of the given
          association and patches with a less typical species composition. If different relevés from
          a single relatively homogeneous stand are assigned to different association, it is
          appropriate to interpret a stand as transitional between these associations.
        </li>
        <li>
          Unlike the older versions of the expert system, which were separated for forest and
          non-forest vegetation, the current version has been integrated, working for all vegetation
          types.
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
          <b>Přiřazování pomocí formálních definic (metoda Cocktail)</b>
          <br /> Metoda Cocktail vytváří jednoznačné formální definice asociací založené na
          přítomnosti sociologických skupin druhů a na dominanci vybraných druhů. Expertní systém
          prochází jednotlivé fytocenologické snímky a pokud zjistí, že jejich druhové složení
          odpovídá formální definici některé asociace, přiřadí je k této asociaci. Proces je
          podrobně popsán v{" "}
          <a href="https://botzool-vegetation.netlify.com/vegetationCR/">1. dílu</a> Vegetace České
          republiky (Chytrý 2007) s doplňky ve{" "}
          <a href="https://botzool-vegetation.netlify.com/vegetationCR/">4. dílu</a> (Chytrý 2013) a
          v článku{" "}
          <a href="https://www.sci.muni.cz/botany/chytry/JVS2003b.pdf" target="_blanc">
            Kočí et al. (2003)
          </a>
          .
        </li>
        <li>
          <b>Přiřazování pomocí podobnosti</b>
          <br /> Některé fytocenologické snímky, obzvlášť ty, které obsahují málo ekologicky
          specializovaných druhů, nemusí být pomocí formálních definic přiřazeny k žádné asociaci.
          Tyto snímky reprezentují z fytocenologického hlediska porosty nevyhraněné nebo méně
          typické. Pokud existuje praktická potřeba přiřadit k asociacím všechny fytocenologické
          snímky, lze je následně přiřadit k asociacím na základě jejich numerické podobnosti ke
          snímkům jednoznačně splňujícím požadavky formálních definic. Metodiku tohoto následného
          přiřazení pomocí podobnosti popisují{" "}
          <a href="https://www.sci.muni.cz/botany/chytry/JVS2003b.pdf">Kočí et al. (2003)</a> a{" "}
          <a href="https://link.springer.com/article/10.1007/s11258-004-5798-8">Tichý (2005)</a>.
        </li>
      </ol>

      <h3>Přiřazování snímků expertním systémem v programu JUICE</h3>
      <li>
        <b>
          Expertní systém – základní verze (
          <a href="http://www.sci.muni.cz/botany/chytry/vegetace-cr/Expert-system-Vegetation-CR-basic.zip">
            download
          </a>
          )
        </b>{" "}
        <br />
        Základní verze obsahují všechny asociace nelesní a lesní vegetace, které byly v projektu
        Vegetace České republiky formálně definovány. Tato verze přiřazuje fytocenologické snímky
        jen pomocí formálních definic.
      </li>
      <li>
        <b>
          Expertní systém – plná verze (
          <a href="http://www.sci.muni.cz/botany/chytry/vegetace-cr/Expert-system-Vegetation-CR-full.zip">
            download
          </a>
          ){" "}
        </b>{" "}
        <br />
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
          <a href="http://www.sci.muni.cz/botany/juice/kubat9.txt">KUBAT9</a> (snímky z TURBOVEGu se
          exportují ve formátu CC! a při načítání se použije soubor KUBAT9 jako importní filtr).
          Pokud je používán expertní systém pro nelesní vegetaci, měly by být do výběru zařazeny
          pouze snímky nelesní vegetace. Naopak expertní systém pro lesní vegetaci by měl být
          používán pouze pro snímky lesní vegetace. Snímky křovinné vegetace mohou být analyzovány
          oběma expertními systémy
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
          přímo v textovém souboru expertního systému nebo přes{" "}
          <a href="https://pladias.cz/vegetation/">Přehled vegetace</a>. U snímků, které se
          nepřiřadily k žádné asociaci, zůstane záhlaví prázdné. U snímků přiřazených do více než
          jedné asociace se zobrazí znak +. Při použití plné verze expertního systému se do tabulky
          vypíší nejpodobnější asociace u těch snímků, které nebyly přiřazeny do žádné asociace nebo
          byly přiřazeny do více než jedné asociace.
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
          vizualizace druhů přes{" "}
          <a href="https://www.sci.muni.cz/botany/juice/jc06_manXX.htm">Botanickou fotogalerii.</a>
        </li>
        <li>
          Oproti starším verzím expertního systému, které byly oddělené pro lesní a nelesní
          vegetací, je současná verze integrovaná a funguje pro všechny typy vegetace.
        </li>
      </ol>
    </div>
  )
};
