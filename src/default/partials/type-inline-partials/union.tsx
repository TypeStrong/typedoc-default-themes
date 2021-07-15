import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = props => <>
  {Boolean(props.needsParens) && <>        <span className="tsd-signature-symbol">(</span>
  </>}{props.types.map((item, i) => <>{!Boolean(item.first) && <>            <span className="tsd-signature-symbol"> | </span>
    </>}        {item.__partials__.type}
  </>)}{Boolean(props.needsParens) && <>        <span className="tsd-signature-symbol">)</span>
  </>}</>;
