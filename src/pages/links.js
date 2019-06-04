import React from 'react'
import {Consumer} from '../layouts/Context'
import Links from '../components/links/Links'
import {mediaCz, mediaEn} from '../content/links'
import {resourcesCz, resourcesEn} from '../content/links'
import {cz, en} from '../content/general'

const LinksPage = () => (
      <Consumer>
        {({int}) => (
            <Links
              resourcesData={int === "en" ? resourcesEn : resourcesCz}
              mediaData={int === "en" ? mediaEn : mediaCz}
              data={int === "en" ? en : cz}
            />
        )}
      </Consumer>
)

Links.propTypes = {}

export default LinksPage
