import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <>
    <span className="tsd-signature-symbol">{props.operator} </span>
    { With(item || props, (item || props).target, (superProps, props, item) => (<>
        {props.__partials__.type}
    </>)) }
</>;
