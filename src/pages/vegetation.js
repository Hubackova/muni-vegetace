import React from "react";
import { Consumer } from "../layouts/Context";
import vegetace_cr_databaze from "../images/vegetace_cr_databaze.jpg";
import vegetace_cr_expertsystem from "../images/vegetace_cr_expertsystem.jpg";
import vegetace_cr_monografie from "../images/vegetace_cr_monografie.jpg";
import { cz, en } from "../content/general";

const VegetationPage = () => (
  <Consumer>
    {({ int }) => (
      <div style={{ marginLeft: 30, display: "flex" }}>
        <div style={{ marginLeft: 30, flex: 1, paddingRight: 30 }}>
          <div>
            <h3>Česká národní fytocenologická databáze</h3>
            <img src={vegetace_cr_databaze} width={300} height={150} />
          </div>
          <div>
            <h3>Expertní system</h3>
            <img src={vegetace_cr_expertsystem} width={300} height={150} />
          </div>
          <div>
            <h3>Monografie</h3>
            <img src={vegetace_cr_monografie} width={300} height={150} />
          </div>
        </div>
        <div style={{ paddingLeft: 30, flex: 4, borderLeft: "1px solid black" }}>
          <b>Tady by se přepínaly příslušné sekce...po kliku na odkaz v sekci vlevo</b> - obrázky jsou jen provizorně narychlo <br /> 
          Vymyslet co s bibliografií - co se má stát  po odeslání tabulky <br /> 
          A co tohle?
          http://www.sci.muni.cz/botany/vegsci/vegetace.php?lang=cz)
          <br />
          <br />
          Další poznámky (viz email):
          <br />
          - Obecné - máte nějaký logo skupiny, co byste chtěli dát tam, kde je logo? <br />
          - Obecné -v navigaci má být Odkazy na média nebo jen Odkazy? <br />
          - Homepage - Dořešit pravý sloupec na homepage - databáze - co tam má všechno být?; odkaz
          na publikace povede na ty starý stránky? (design pak domyslím, podle toho, kolik tam toho
          bude, nebo klidně si ho vymyslete vy  <br />
          - Lidé - Bývalí akademiční a výzkumní pracovníci - budou i s fotkou, nebo jen jméno a
          mail? <br />
          - Lidé - takže zaměstnanci i studenti dohromady? nebo budou jen zaměstnanci? jak je to
          teď v tabulce? <br />
          - Resources - ty externí odkazy bých nechala v odkazech.
          <br />
          <br />
        </div>
      </div>
    )}
  </Consumer>
);

VegetationPage.propTypes = {};

export default VegetationPage;
