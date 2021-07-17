import {With, __partials__, Compact, IfCond, IfNotCond, Markdown} from '../../../lib';
import React from 'react';
export const component = (props, item = props) => <>
  {Boolean(props.asserts) && <>        <span className="tsd-signature-symbol">asserts </span>
  </>}    <span className="tsd-signature-type">{props.name}</span>
  {Boolean(props.targetType) && <>        <span className="tsd-signature-symbol"> is </span>
        { With(item, item.targetType, (superProps, props, item) => (<>
            {__partials__.type(props)}
        </>)) }
  </>}</>;
