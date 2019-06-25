import NextLink from 'next/link';
import Anchor from './Anchor';
import * as Consts from "./Consts";

export default ({ href, onClick, children, isRoot }) => {
  let newHref = Consts.OVERRIDE_URL? ((isRoot?"./":"../")+`${href}/index.html`): href;

  return (
    <React.Fragment>
      <Anchor href={newHref}>
        {children}
      </Anchor>
    </React.Fragment>
  )
}
