import * as React from "react";
import Anchor from './Anchor';
import * as Consts from "./Consts";

interface LinkProps {
  href: string;
  children?: React.ReactNode;
  isRoot?:boolean;
}

const _removeSlash = (href:string) => {
  if(href==="/" || href==="") {
    return "index";
  }
  return href.indexOf("/")===0?href.substr(1):href;
}

const Link: React.SFC<LinkProps> = ({ href, children }) => {
  let newHref = (Consts.OVERRIDE_URL ? ("./"+_removeSlash(href)+".html"): href);
  return (
    <React.Fragment>
      <Anchor href={newHref}>
        {children}
      </Anchor>
    </React.Fragment>
  )
}

export default Link;
