import React from 'react'
import {Consumer} from '../layouts/Context'
import Links from '../components/links/Links'
import {mediaCz, mediaEn} from '../content/links'
import {popularizationCz, popularizationEn} from '../content/links'
import {cz, en} from '../content/general'

const LinksPage = () => (
      <Consumer>
        {({int}) => (
            <Links
              popularizationData={int === "en" ? popularizationEn : popularizationCz}
              mediaData={int === "en" ? mediaEn : mediaCz}
              data={int === "en" ? en : cz}
            />
        )}
      </Consumer>
)

Links.propTypes = {}

export default LinksPage
