import { With, Compact, IfCond, IfNotCond, Markdown, __partials__ } from "../../lib";
import React from "react";
export const type = (props, item = props) => (
    <>
        {/* Each type gets its own inline helper to determine how it is rendered. */}
        {/* The name of the helper is the value of the 'type' property on the type.*/}
        {/*
    The type helper accepts an optional needsParens parameter that is checked
    if an inner type may result in invalid output without them. For example:
    1 | 2[] !== (1 | 2)[]
    () => 1 | 2 !== (() => 1) | 2
    */}
        {Boolean(props) ? (
            <> {__partials__[props.type](props)}</>
        ) : (
            <>
                {" "}
                <span className="tsd-signature-type">void</span>
            </>
        )}
    </>
);
