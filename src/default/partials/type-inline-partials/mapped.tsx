import {With, __partials__, Compact, IfCond, IfNotCond, Markdown} from '../../../lib';
import React from 'react';
export const component = (props, item = props) => <>
    <span className="tsd-signature-symbol">{"{"}</span>
    <IfCond cond={props.readonlyModifier === '+'}>
        <span className="tsd-signature-symbol">readonly </span>
    </IfCond>
    <IfNotCond cond={props.readonlyModifier === '+'}>
        <IfCond cond={props.readonlyModifier === '-'}>
            <span className="tsd-signature-symbol">-readonly </span>
        </IfCond>
    </IfNotCond>

    <span className="tsd-signature-symbol">[ </span>
    <span className="tsd-signature-type">{props.parameter}</span>
    <span className="tsd-signature-symbol"> in </span>

    { With(item, item.parameterType, (superProps, props, item) => (<>
        {__partials__.type(props)}
    </>)) }

    { With(item, item.nameType, (superProps, props, item) => (<>
        <span className="tsd-signature-symbol"> as </span>
        {__partials__.type(props)}
    </>)) }

    <span className="tsd-signature-symbol">]</span>
    <IfCond cond={props.readonlyModifier === '+'}>
        <span className="tsd-signature-symbol">?: </span>
    </IfCond>
    <IfNotCond cond={props.readonlyModifier === '+'}>
        <IfCond cond={props.readonlyModifier === '-'}>
            <span className="tsd-signature-symbol">-?: </span>
        </IfCond>
        <IfNotCond cond={props.readonlyModifier === '-'}>
            <span className="tsd-signature-symbol">: </span>
        </IfNotCond>
    </IfNotCond>

    { With(item, item.templateType, (superProps, props, item) => (<>
        {__partials__.type(props)}
    </>)) }

    <span className="tsd-signature-symbol"> {"}"}</span>
</>;
