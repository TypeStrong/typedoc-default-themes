import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = props => <>
    <span className="tsd-signature-symbol">`</span>
  {Boolean(props.head) && <>        <span className="tsd-signature-type">{props.head}</span>
  </>}{props.tail.map((item, i) => <>        <span className="tsd-signature-symbol">${"{"}</span>
        <With superProps="props" props="this.[0]">
            {item.__partials__.type}
        </With>
        <span className="tsd-signature-symbol">{"}"}</span>
    {Boolean(item.1) && <>            <span className="tsd-signature-type">{item.1}</span>
    </>}</>)}    <span className="tsd-signature-symbol">`</span>
</>;
