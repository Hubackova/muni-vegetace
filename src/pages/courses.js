import React from "react";
import styled from "styled-components";
import { Consumer } from "../layouts/Context";
import MainContainer from "../components/MainContainer";
import { coursesCz, coursesEn } from "../content/courses";

const Courses = () => {
  const getCoursesList = courses =>
    courses.map(i => {
      return (
        <li key={i.name}>
          {i.link ? (
            <A target="_blank" rel="noopener noreferrer" href={i.link}>
              {i.name}
            </A>
          ) : (
            i.name
          )}
        </li>
      );
    });

  return (
    <MainContainer>
      <Consumer>
        {({ int }) => {
          return (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 1 }}>
                <h2>Výuka</h2>
                {int === "en" ? getCoursesList(coursesEn) : getCoursesList(coursesCz)}
              </div>
              <div style={{ flex: 1 }}>
                <h2>Témata prací (Výběr)</h2>
                <h3>Diplomové práce</h3>
                <div><A href="https://is.muni.cz/auth/th/yefy1/?lang=cs">
                  Flóra a vegetace povodí Bílé vody na Drahanské vrchovině
                </A></div>
                <div><A href="https://is.muni.cz/auth/th/oeak6/?lang=cs">
                  Lokální druhové bohatství přirozené vegetace hlubokých říčních údolí Českého masivu
                </A></div>
                <h3>Bakalářské práce</h3>
                <div><A href="https://is.muni.cz/auth/th/gkizc/?lang=cs">
                Vegetační charakteristika geograficky významných prvků květeny Zlínska
                </A></div>
              </div>
            </div>
          );
        }}
      </Consumer>
    </MainContainer>
  );
};

export default Courses;

const A = styled.a`
  color: ${props => props.theme.darkMain};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
