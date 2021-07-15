import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = props => <>
  {Boolean(props.getReflection) ? <>    <With superProps="props" props="getReflection">
        <a href={props.relativeURL} className="tsd-signature-type" data-tsd-kind={props.kindString}>
            {props.name}
        </a>
    </With>
  </> : <>        <span className="tsd-signature-type">{props.name}</span>
  </>}{Boolean(props.typeArguments) && <>        <span className="tsd-signature-symbol"><</span>
    {props.typeArguments.map((item, i) => <>{!Boolean(item.first) && <>                <span className="tsd-signature-symbol">, </span>
      </>}            {item.__partials__.type}
    </>)}        <span className="tsd-signature-symbol">></span>
  </>}</>;
