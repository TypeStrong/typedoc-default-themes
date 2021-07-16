import {With, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <>
  {Boolean(props.getReflection) ? <>    { With(item, item.getReflection, (superProps, props, item) => (<>
        <a href={props.relativeURL} className="tsd-signature-type" data-tsd-kind={props.kindString}>
            {props.name}
        </a>
    </>)) }
  </> : <>        <span className="tsd-signature-type">{props.name}</span>
  </>}{Boolean(props.typeArguments) && <>        <span className="tsd-signature-symbol"><</span>
    {props.typeArguments.map((item, i) => <>{!Boolean(item.first) && <>                <span className="tsd-signature-symbol">, </span>
      </>}            {item.__partials__.type}
    </>)}        <span className="tsd-signature-symbol">></span>
  </>}</>;
