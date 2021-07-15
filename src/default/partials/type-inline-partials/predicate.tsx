import React from 'react';
export const component = props => <React.Fragment>
  {Boolean(props.asserts) && <React.Fragment>        <span className="tsd-signature-symbol">asserts </span>
  </React.Fragment>}    <span className="tsd-signature-type">{props.name}</span>
  {Boolean(props.targetType) && <React.Fragment>        <span className="tsd-signature-symbol"> is </span>
        <With superProps="props" props="targetType">
            {props.__partials__.type}
        </With>
  </React.Fragment>}</React.Fragment>;
