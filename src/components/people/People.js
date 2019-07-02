import React, {Component} from 'react'
import PersonBox from './PersonBox'
import H2 from '../atoms/H2'
import PropTypes from 'prop-types'
import {Link, Element} from 'react-scroll'
import {Container as MenuContainer, Li} from '../../layouts/Navigation'
import styled from 'styled-components'

class People extends Component {
  render() {
    const {peopleData, data} = this.props
    const people = peopleData.map(i => <PersonBox personInfo={i} key={i.id} data={data}/>)
    return (
      <React.Fragment>
        <MenuContainer>
          <Li isVisible={true}>
            <StyledLink activeClass="active" to="people" spy={true} smooth={true} duration={500}>
              Lidé
            </StyledLink>
          </Li>
          <Li isVisible={true}>
            <StyledLink activeClass="active" to="formerpeople" spy={true} smooth={true} duration={500}>
            Bývalí akademičtí a výzkumní pracovníci
            </StyledLink>
          </Li>
        </MenuContainer>

        <Element name="people" className="element">
          <H2>{data.people}</H2>
        </Element>
        {people}
        {/* TODO */}

        <Element name="formerpeople" className="element">
          <H2>Bývalí akademičtí a výzkumní pracovníci</H2>
        </Element>
         <div><strong  style={{color: "#C0C844"}}>Borja Jiménez-Alfaro</strong> - borja.jimenez-alfaro@botanik.uni-halle.de</div>
         <div><strong  style={{color: "#C0C844"}}>Martin Kočí</strong> - nitramicok@gmail.com</div>
		 <div><strong  style={{color: "#C0C844"}}>Ching Feng Li</strong> - chingfeng.li@gmail.com</div>
		 <div><strong  style={{color: "#C0C844"}}>Kristina Merunkova</strong> - merunkova@sci.muni.cz</div>
		 <div><strong  style={{color: "#C0C844"}}>Salza Palpurina</strong> - salza.palpurina@gmail.com</div>
		 <div><strong  style={{color: "#C0C844"}}>Barbora Pelánková</strong> - 	bpelankova@gmail.com</div>
		 <div><strong  style={{color: "#C0C844"}}>Marie Vymazalová</strong> - meri@seznam.cz</div>
		 <div><strong  style={{color: "#C0C844"}}>Viktoria Wagner</strong> - wagner@sci.muni.cz</div>
		 <div><strong  style={{color: "#C0C844"}}>David Zelený</strong> - zeleny.david@gmail.com</div>
      </React.Fragment>
    )
  }
}

export default People

People.propTypes = {
  data: PropTypes.object,
  studentsData: PropTypes.array,
  peopleData: PropTypes.array,
}

const StyledLink = styled(Link)`
  color: ${props => props.theme.grey};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: ${props => props.theme.secondary};
  }
`
