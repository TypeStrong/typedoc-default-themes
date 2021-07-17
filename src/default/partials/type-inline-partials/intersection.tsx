import {With, __partials__, Compact, IfCond, IfNotCond, Markdown} from '../../../lib';
import React from 'react';
export const component = (props, item = props) => <>
  {Boolean(props.needsParens) && <>        <span className="tsd-signature-symbol">(</span>
  </>}{props.types.map((item, i) => <>{!Boolean(item.first) && <>            <span className="tsd-signature-symbol"> & </span>
    </>}        {__partials__.type(props, {needsParens: true})}
  </>)}{Boolean(props.needsParens) && <>        <span className="tsd-signature-symbol">)</span>
  </>}</>;
