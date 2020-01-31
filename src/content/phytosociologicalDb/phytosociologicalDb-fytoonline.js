import React from "react";

export const en = {
  body: (
    <div>
      <h3>Fytocenologická data online</h3>
      <p>
        Tato stránka obsahuje veřejně dostupná fytocenologická data z České republiky. Jde o datové
        soubory publikované v konkrétních článcích a jiných dokumentech, případně nepublikovaná data
        poskytnutá jejich autory. Všem poskytovatelům veřejných dat děkujeme za jejich zpřístupnění
        online. Online data jsou dostupná ve dvou formátech:
      </p>
      <ul>
        <li>
          TURBOVEG XML – formát pro použití v programech TURBOVEG nebo JUICE. V TURBOVEGu je potřeba
          vytvořit novou databázi a importovat data přes nabídku Import. V programu JUICE lze soubor
          otevřít v nabídce Import / Table / from TURBOVEG XML Format File.
        </li>
        <li>
          CSV soubor – formát pro použití v programu MS EXCEL a dalších tabulkových editorech. Jde o
          textový soubor s poli tabulky oddělenými středníkem.
        </li>
        <li>TXT – prostý text</li>
      </ul>
      <h4>Online data</h4>
      <div className="fyto-item">
        <span>
          Fytocenologické snímky z mapování biotopů (Natura 2000). Koordinace mapování: Agentura
          ochrany přírody a krajiny ČR. Digitalizace dat: Česká národní fytocenologická databáze,
          Masarykova univerzita, Brno.
        </span>
        <a href="https://www.sci.muni.cz/botany/vegsci/fytonline/natura-2000.xml">XML</a>
        <a href="https://www.sci.muni.cz/botany/vegsci/fytonline/natura-2000.csv">CSV</a>
        <a href="https://www.sci.muni.cz/botany/vegsci/fytonline/natura-2000.txt">TXT</a>
      </div>
      
      <div className="fyto-item">
        <span>
          Ambrozek L. & Chytrý M. (1990): Die Vegetation der Zwergstrauchheiden im xerothermen Bereich am Südostrand des Böhmischen Massivs. Čas. Morav. Muz. Brno 75: 169-184.
        </span>
        <a href="https://www.sci.muni.cz/botany/vegsci/fytonline/ambrozek-chytry-1990-cas-morav-muz-brno.xml">XML</a>
        <a href="https://www.sci.muni.cz/botany/vegsci/fytonline/ambrozek-chytry-1990-cas-morav-muz-brno.csv">CSV</a>
        <a href="https://www.sci.muni.cz/botany/vegsci/fytonline/ambrozek-chytry-1990-cas-morav-muz-brno.txt">TXT</a>
      </div>
    </div>
  )
};

export const cz = {
  body: (
    <div>
      <h3>Fytocenologická data online</h3>
      <p>
        Tato stránka obsahuje veřejně dostupná fytocenologická data z České republiky. Jde o datové
        soubory publikované v konkrétních článcích a jiných dokumentech, případně nepublikovaná data
        poskytnutá jejich autory. Všem poskytovatelům veřejných dat děkujeme za jejich zpřístupnění
        online. Online data jsou dostupná ve dvou formátech:
      </p>
      <ul>
        <li>
          TURBOVEG XML – formát pro použití v programech TURBOVEG nebo JUICE. V TURBOVEGu je potřeba
          vytvořit novou databázi a importovat data přes nabídku Import. V programu JUICE lze soubor
          otevřít v nabídce Import / Table / from TURBOVEG XML Format File.
        </li>
        <li>
          CSV soubor – formát pro použití v programu MS EXCEL a dalších tabulkových editorech. Jde o
          textový soubor s poli tabulky oddělenými středníkem.
        </li>
        <li>TXT – prostý text</li>
      </ul>
      <h4>Online data</h4>

      <div className="fyto-item">
        <span>
          Fytocenologické snímky z mapování biotopů (Natura 2000). Koordinace mapování: Agentura
          ochrany přírody a krajiny ČR. Digitalizace dat: Česká národní fytocenologická databáze,
          Masarykova univerzita, Brno.
        </span>
        <a href="https://www.sci.muni.cz/botany/vegsci/fytonline/natura-2000.xml">XML</a>
        <a href="https://www.sci.muni.cz/botany/vegsci/fytonline/natura-2000.csv">CSV</a>
        <a href="https://www.sci.muni.cz/botany/vegsci/fytonline/natura-2000.txt">TXT</a>
      </div>

      <div className="fyto-item">
        <span>
          Ambrozek L. & Chytrý M. (1990): Die Vegetation der Zwergstrauchheiden im xerothermen Bereich am Südostrand des Böhmischen Massivs. Čas. Morav. Muz. Brno 75: 169-184.
        </span>
        <a href="https://www.sci.muni.cz/botany/vegsci/fytonline/ambrozek-chytry-1990-cas-morav-muz-brno.xml">XML</a>
        <a href="https://www.sci.muni.cz/botany/vegsci/fytonline/ambrozek-chytry-1990-cas-morav-muz-brno.csv">CSV</a>
        <a href="https://www.sci.muni.cz/botany/vegsci/fytonline/ambrozek-chytry-1990-cas-morav-muz-brno.txt">TXT</a>
      </div>
    </div>
  )
};
