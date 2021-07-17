import { With, __partials__, Compact, IfCond, IfNotCond, Markdown } from "../../lib";
import React from "react";
export const memberSignatures = (props, item = props) => (
    <>
        <ul className={"tsd-signatures " + props.cssClasses}>
            {props.signatures.map((item, i) => (
                <>
                    {" "}
                    <li className="tsd-signature tsd-kind-icon">
                        <Compact>{item.__partials__.member.signature.title}</Compact>
                    </li>
                </>
            ))}
        </ul>

        <ul className="tsd-descriptions">
            {props.signatures.map((item, i) => (
                <>
                    {" "}
                    <li className="tsd-description">{item.__partials__.member.signature.body}</li>
                </>
            ))}
        </ul>
    </>
);
