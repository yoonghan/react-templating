import * as React from "react";
import Anchor from './Anchor';
import * as Consts from "./Consts";

interface LinkProps {
  href: string;
  children?: React.ReactNode;
  isRoot?:boolean;
}

const Link: React.SFC<LinkProps> = ({ href, children, isRoot }) => {
  let newHref = (Consts.OVERRIDE_URL? ((isRoot?"./":"../") +`${href}/index.html`): href);
  return (
    <React.Fragment>
      <Anchor href={newHref}>
        {children}
      </Anchor>
    </React.Fragment>
  )
}

export default Link;
