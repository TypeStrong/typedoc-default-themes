import React from 'react';
export const component = props => <React.Fragment>
  {Boolean(props.getReflection) ? <React.Fragment>    <With superProps="props" props="getReflection">
        <a href={props.relativeURL} className="tsd-signature-type" data-tsd-kind={props.kindString}>
            {props.name}
        </a>
    </With>
  </React.Fragment> : <React.Fragment>        <span className="tsd-signature-type">{props.name}</span>
  </React.Fragment>}{Boolean(props.typeArguments) && <React.Fragment>        <span className="tsd-signature-symbol"><</span>
    {props.typeArguments.map((item, i) => <React.Fragment key={i}>{!Boolean(item.first) && <React.Fragment>                <span className="tsd-signature-symbol">, </span>
      </React.Fragment>}            {item.__partials__.type}
    </React.Fragment>)}        <span className="tsd-signature-symbol">></span>
  </React.Fragment>}</React.Fragment>;
