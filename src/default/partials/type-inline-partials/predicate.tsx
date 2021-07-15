import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = props => <>
  {Boolean(props.asserts) && <>        <span className="tsd-signature-symbol">asserts </span>
  </>}    <span className="tsd-signature-type">{props.name}</span>
  {Boolean(props.targetType) && <>        <span className="tsd-signature-symbol"> is </span>
        <With superProps="props" props="targetType">
            {props.__partials__.type}
        </With>
  </>}</>;
