import React, { useState } from "react";
import styled from "styled-components";

import MainContainer from "../components/MainContainer";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/phytosociologicalDb";

const PhytosociologicalDbPage = () => {
  const [opened, setOpened] = useState("introduction");
  return (
    <MainContainer>
      <Consumer>
        {({ int }) => {
          const data = int === "en" ? en : cz;
          return (
            <Container>
              <Menu>
                {data.menu.map(i => (
                  <Li
                    key={i.name}
                    onClick={() => setOpened(i.name)}
                    className={opened === i.name && "active"}
                  >
                    {i.text}
                  </Li>
                ))}
              </Menu>
              <Content>{data[opened]}</Content>
            </Container>
          );
        }}
      </Consumer>
    </MainContainer>
  );
};

PhytosociologicalDbPage.propTypes = {};

export default PhytosociologicalDbPage;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1256px) {
    flex-direction: column;
  }
`;

const Menu = styled.div`
  flex: 1;
  margin-right: 2em;
`;

const Content = styled.div`
  flex: 3;
`;

export const Li = styled.li`
  height: 40px;
  cursor: pointer;
  color: ${props => props.theme.grey};
  &:hover {
    color: ${props => props.theme.main};
  }
  &.active {
    color: ${props => props.theme.darkMain};
  }
`;
