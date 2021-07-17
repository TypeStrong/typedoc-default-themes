import { With, __partials__, Compact, IfCond, IfNotCond, Markdown } from "../../lib";
import React from "react";
export const memberGetterSetter = (props, item = props) => (
    <>
        <ul className={"tsd-signatures " + props.cssClasses}>
            {Boolean(props.getSignature) && (
                <>
                    {" "}
                    {With(item, item.getSignature, (superProps, props, item = props) => (
                        <>
                            <li className="tsd-signature tsd-kind-icon">
                                <Compact>
                                    <span className="tsd-signature-symbol">get</span>
                                    {props.superProps.name}
                                    {__partials__["memberSignatureTitle"](props, { hideName: true })}
                                </Compact>
                            </li>
                        </>
                    ))}
                </>
            )}
            {Boolean(props.setSignature) && (
                <>
                    {" "}
                    {With(item, item.setSignature, (superProps, props, item = props) => (
                        <>
                            <li className="tsd-signature tsd-kind-icon">
                                <Compact>
                                    <span className="tsd-signature-symbol">set</span>
                                    {props.superProps.name}
                                    {__partials__["memberSignatureTitle"](props, { hideName: true })}
                                </Compact>
                            </li>
                        </>
                    ))}
                </>
            )}
        </ul>

        <ul className="tsd-descriptions">
            {Boolean(props.getSignature) && (
                <>
                    {" "}
                    {With(item, item.getSignature, (superProps, props, item = props) => (
                        <>
                            <li className="tsd-description">{__partials__["memberSignatureBody"](props)}</li>
                        </>
                    ))}
                </>
            )}
            {Boolean(props.setSignature) && (
                <>
                    {" "}
                    {With(item, item.setSignature, (superProps, props, item = props) => (
                        <>
                            <li className="tsd-description">{__partials__["memberSignatureBody"](props)}</li>
                        </>
                    ))}
                </>
            )}
        </ul>
    </>
);
