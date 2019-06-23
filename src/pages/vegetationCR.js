import React, {useState} from "react";
import styled from "styled-components";

import MainContainer from "../components/MainContainer";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/vegetationCR";

const VegetationCRPage = () => {
  const [opened, setOpened] = useState(0);
  return (
  <MainContainer>
    <Consumer>
      {({ int }) => {
        const data = int === "en" ? en : cz;
        return (
          <Container>
            <h3>{data.title}</h3>
            {data.introduction}
            <br />
            {data.books.map((i, index) => (
              <BookImg src={i.img} key={i.title} onClick={() => setOpened(index)} className={opened === index && "active"}/>
            ))}
            {data.books.map((i, index) => (
              <BookBox book={i} key={i.title} isActive={opened === index}/>
            ))}
          </Container>
        );
      }}
    </Consumer>
  </MainContainer>
)};

VegetationCRPage.propTypes = {};

export default VegetationCRPage;
const Container = styled.div`
  margin: 0 auto;
  width: 84vw;
`;

const BookBox = ({ book, isActive }) => {
  if (!isActive) return null;
  return (
    <React.Fragment>
      <h3>
        <b>{book.title}</b>
        {` (${book.year})`}
      </h3>
      <BookContainer>
        <BookContainerPart>
          <BookBlock>
            <i>{book.link}</i>
          </BookBlock>
          <BookBlock>{book.authors}</BookBlock>
          <BookBlock>{book.technical}</BookBlock>
          <BookBlock>
            <A href={book.pdfLowResLink} target="_blanc">
              {book.pdfLowRes}
            </A>
            <A href={book.pdfHighResLink} target="_blanc">
              {book.pdfHighRes}
            </A>
          </BookBlock>
        </BookContainerPart>
        <BookContainerPart style={{color: "grey"}}>{book.review}</BookContainerPart>
      </BookContainer>
    </React.Fragment>
  );
};
const BookContainer = styled.div`
  display: flex;
  margin: 20px 0;
  @media (max-width: ${props => props.theme.extraLargeDevice}) {
    flex-direction: column;
  }
`;

const BookContainerPart = styled.div`
  flex: 1;
  margin-right: 3vw;
`;

const BookBlock = styled.div`
  margin-bottom: 10px;
  li {
    color: grey;
  }
`;

const BookImg = styled.img`
  width: 12vw;
  min-width: 100px;
  margin-right: 20px;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(50%);
  }
  &.active {
    filter: grayscale(0%);
    width: 15vw;
  }
`;

const A = styled.a`
  cursor: pointer;
  text-decoration: none;
  margin-right: 20px;
  &:hover {
    text-decoration: underline;
  }
`;
