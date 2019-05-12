import React from 'react'
import {Consumer} from '../layouts/Context'
import Links from '../components/links/Links'
import {media} from '../content/links'
import {resources} from '../content/links'
import {cz, en} from '../content/general'

const LinksPage = () => (
      <Consumer>
        {({int}) => (
            <Links
              resourcesData={resources}
              mediaData={media}
              data={int === "en" ? en : cz}
            />
        )}
      </Consumer>
)

Links.propTypes = {}

export default LinksPage
