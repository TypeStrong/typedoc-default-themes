import React from 'react';
export const component = props => <React.Fragment>
  {Boolean(props.needsParens) && <React.Fragment>        <span className="tsd-signature-symbol">(</span>
  </React.Fragment>}    <With superProps="props" props="checkType">
        {props.__partials__.type}
    </With>
    <span className="tsd-signature-symbol"> extends </span>
    <With superProps="props" props="extendsType">
        {props.__partials__.type}
    </With>
    <span className="tsd-signature-symbol"> ? </span>
    <With superProps="props" props="trueType">
        {props.__partials__.type}
    </With>
    <span className="tsd-signature-symbol"> : </span>
    <With superProps="props" props="falseType">
        {props.__partials__.type}
    </With>
  {Boolean(props.needsParens) && <React.Fragment>        <span className="tsd-signature-symbol">)</span>
  </React.Fragment>}</React.Fragment>;
