import React, {Component} from 'react'
import PersonBox from './PersonBox'
import H2 from '../atoms/H2'
import PropTypes from 'prop-types'
import {Link, Element} from 'react-scroll'
import {Container as MenuContainer, Li} from '../../layouts/Navigation'
import styled from 'styled-components'

class People extends Component {
  render() {
    const {staffData, data} = this.props
    const people = staffData.map(i => <PersonBox personInfo={i} key={i.id} data={data}/>)
    return (
      <React.Fragment>
        <MenuContainer>
          <Li isVisible={true}>
            <StyledLink activeClass="active" to="staff" spy={true} smooth={true} duration={500}>
              Lidé
            </StyledLink>
          </Li>
          <Li isVisible={true}>
            <StyledLink activeClass="active" to="formerstaff" spy={true} smooth={true} duration={500}>
            Bývalí akademiční a výzkumní pracovníci
            </StyledLink>
          </Li>
        </MenuContainer>

        <Element name="staff" className="element">
          <H2>{data.staff}</H2>
        </Element>
        {people}
        {/* TODO */}

        <Element name="formerstaff" className="element">
          <H2>Bývalí akademiční a výzkumní pracovníci</H2>
        </Element>
         <div><strong  style={{color: "#C0C844"}}>Borja Jiménez-Alfaro</strong> - borja.jimenez-alfaro@botanik.uni-halle.de</div>
         <div><strong  style={{color: "#C0C844"}}>Martin Kočí</strong> - nitramicok@gmail.com</div>

      </React.Fragment>
    )
  }
}

export default People

People.propTypes = {
  data: PropTypes.object,
  studentsData: PropTypes.array,
  staffData: PropTypes.array,
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
