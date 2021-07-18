import {With, __partials__, Compact, IfCond, IfNotCond, Markdown} from '../../../lib';
import React from 'react';
export const component = (props, item = props) => <>
    <span className="tsd-signature-symbol">`</span>
  {Boolean(props.head) && <>        <span className="tsd-signature-type">{props.head}</span>
  </>}{props.tail.map((item, i) => <>        <span className="tsd-signature-symbol">${"{"}</span>
        { With(item, item.this[0], (superProps, props, item = props) => (<>
            {item.__partials__.type}
        </>)) }
        <span className="tsd-signature-symbol">{"}"}</span>
    {Boolean(item[1]) && <>            <span className="tsd-signature-type">{item[1]}</span>
    </>}</>)}    <span className="tsd-signature-symbol">`</span>
</>;
