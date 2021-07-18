import { With, __partials__, Compact, IfCond, IfNotCond, Markdown } from "../../../lib";
import React from "react";
export const component = (props, item = props) => (
    <>
        <span className="tsd-signature-symbol">[</span>
        {props.elements.map((item, i) => (
            <>
                {!Boolean(item.first) && (
                    <>
                        {" "}
                        <span className="tsd-signature-symbol">, </span>
                    </>
                )}{" "}
                {__partials__.type(item)}
            </>
        ))}{" "}
        <span className="tsd-signature-symbol">]</span>
    </>
);
