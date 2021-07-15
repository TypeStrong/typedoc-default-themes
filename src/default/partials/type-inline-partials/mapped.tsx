import {With, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <>
    <span className="tsd-signature-symbol">{"{"}</span>
    <IfCond cond="readonlyModifier '===' '+'">
        <span className="tsd-signature-symbol">readonly </span>
    </IfCond>
    <IfNotCond cond="readonlyModifier '===' '+'">
        <IfCond cond="readonlyModifier '===' '-'">
            <span className="tsd-signature-symbol">-readonly </span>
        </IfCond>
    </IfNotCond>

    <span className="tsd-signature-symbol">[ </span>
    <span className="tsd-signature-type">{props.parameter}</span>
    <span className="tsd-signature-symbol"> in </span>

    { With(item || props, (item || props).parameterType, (superProps, props, item) => (<>
        {props.__partials__.type}
    </>)) }

    { With(item || props, (item || props).nameType, (superProps, props, item) => (<>
        <span className="tsd-signature-symbol"> as </span>
        {props.__partials__.type}
    </>)) }

    <span className="tsd-signature-symbol">]</span>
    <IfCond cond="readonlyModifier '===' '+'">
        <span className="tsd-signature-symbol">?: </span>
    </IfCond>
    <IfNotCond cond="readonlyModifier '===' '+'">
        <IfCond cond="readonlyModifier '===' '-'">
            <span className="tsd-signature-symbol">-?: </span>
        </IfCond>
        <IfNotCond cond="readonlyModifier '===' '-'">
            <span className="tsd-signature-symbol">: </span>
        </IfNotCond>
    </IfNotCond>

    { With(item || props, (item || props).templateType, (superProps, props, item) => (<>
        {props.__partials__.type}
    </>)) }

    <span className="tsd-signature-symbol"> {"}"}</span>
</>;
