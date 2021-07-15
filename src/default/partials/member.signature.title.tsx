import React from 'react';
export const component = props => <React.Fragment>{!Boolean(props.hideName) ? <React.Fragment>    {props.wbr}
  </React.Fragment> : <React.Fragment>    <IfCond cond="kindString '===' 'Constructor signature'">
      {Boolean(props.flags.isAbstract) && <React.Fragment>            <span className="tsd-signature-symbol">abstract </span>
      </React.Fragment>}        <span className="tsd-signature-symbol">new </span>
    </IfCond>
  </React.Fragment>}{Boolean(props.typeParameters) && <React.Fragment>    <
    {props.typeParameters.map((item, i) => <React.Fragment key={i}>        {Boolean(item.index) && ",\xA0"}
        {item.name}
    </React.Fragment>)}    >
  </React.Fragment>}<span className="tsd-signature-symbol">(</span>
  {props.parameters.map((item, i) => <React.Fragment key={i}>    {Boolean(item.index) && ",\xA0"}
    {Boolean(item.flags.isRest) && <span className="tsd-signature-symbol">...</span>}
    {item.name}
    <span className="tsd-signature-symbol">
        {Boolean(item.flags.isOptional) && "?"}
        {Boolean(item.defaultValue) && "?"}
        : 
    </span>
    <With superProps="props" props="type">{item.__partials__.type}</With>
  </React.Fragment>)}<span className="tsd-signature-symbol">)</span>
  {Boolean(props.type) && <React.Fragment>{Boolean(props.arrowStyle) ? <React.Fragment>        <span className="tsd-signature-symbol"> => </span>
    </React.Fragment> : <React.Fragment>        <span className="tsd-signature-symbol">: </span>
    </React.Fragment>}    <With superProps="props" props="type">
        {props.__partials__.type}
    </With>
  </React.Fragment>}</React.Fragment>;
