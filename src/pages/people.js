import React, { Component } from "react";
import { Consumer } from "../layouts/Context";
import styled from "styled-components";
import People from "../components/people/People";
import { peopleCz, peopleEn, formerPeople } from "../content/people";
import { cz, en } from "../content/general";

class people extends Component {
  render() {
    return (
      <Consumer>
        {({int}) => (
          <Container>
            <People
              peopleData={int === "en" ? peopleEn : peopleCz}
              formerPeopleData={formerPeople}
              msg={int === "en" ? en : cz}
            />
          </Container>
        )}
      </Consumer>
    );
  }
}

export default people;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`;
