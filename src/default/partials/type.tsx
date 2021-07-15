import React from 'react';
export const component = props => <React.Fragment>{
    /* Each type gets its own inline helper to determine how it is rendered. */
  }{
    /* The name of the helper is the value of the 'type' property on the type.*/
  }
  {
    /*
    The type helper accepts an optional needsParens parameter that is checked
    if an inner type may result in invalid output without them. For example:
    1 | 2[] !== (1 | 2)[]
    () => 1 | 2 !== (() => 1) | 2
    */
  }
  {Boolean(props) ? <React.Fragment>    {props.__partials__.lookup.dot.typeString}
  </React.Fragment> : <React.Fragment>    <span className="tsd-signature-type">void</span>
  </React.Fragment>}</React.Fragment>;
