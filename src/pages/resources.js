import React from "react";
import { Consumer } from "../layouts/Context";
import Links from "../components/links/Links";
import { media } from "../content/links";
import { resources } from "../content/links";
import { cz, en } from "../content/general";

const ResourcesPage = () => <Consumer>{({ int }) => <span style={{margin: "50%"}}>zdroje</span>}</Consumer>;

ResourcesPage.propTypes = {};

export default ResourcesPage;
