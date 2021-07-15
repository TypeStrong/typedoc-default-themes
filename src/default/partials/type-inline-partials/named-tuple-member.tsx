import React from 'react';
export const component = props => <React.Fragment>
    {props.name}
  {Boolean(props.isOptional) ? <React.Fragment>        <span className="tsd-signature-symbol">?: </span>
  </React.Fragment> : <React.Fragment>        <span className="tsd-signature-symbol">: </span>
  </React.Fragment>}    <With superProps="props" props="element">
        {props.__partials__.type}
    </With>
</React.Fragment>;
