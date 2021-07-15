import React from 'react';
export const component = props => <>
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

    <With superProps="props" props="parameterType">
        {props.__partials__.type}
    </With>

    <With superProps="props" props="nameType">
        <span className="tsd-signature-symbol"> as </span>
        {props.__partials__.type}
    </With>

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

    <With superProps="props" props="templateType">
        {props.__partials__.type}
    </With>

    <span className="tsd-signature-symbol"> {"}"}</span>
</>;
