import {With, __partials__, Compact, IfCond, IfNotCond, Markdown} from '../../../lib';
import React from 'react';
export const component = (props, item = props) => <>
    <span className="tsd-signature-symbol">typeof </span>
    { With(item, item.queryType, (superProps, props, item) => (<>
        {__partials__.type(props)}
    </>)) }
</>;
