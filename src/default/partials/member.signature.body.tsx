import { With, __partials__, Compact, IfCond, IfNotCond, Markdown } from "../../lib";
import React from "react";
export const memberSignatureBody = (props, item = props) => (
    <>
        {!Boolean(props.hideSources) && <> {__partials__["memberSources"](props)}</>}
        {__partials__.comment(props)}

        {Boolean(props.typeParameters) && (
            <>
                {" "}
                <h4 className="tsd-type-parameters-title">Type parameters</h4>
                {__partials__.typeParameters(props)}
            </>
        )}
        {Boolean(props.parameters) && (
            <>
                {" "}
                <h4 className="tsd-parameters-title">Parameters</h4>
                <ul className="tsd-parameters">
                    {props.parameters.map((item, i) => (
                        <>
                            {" "}
                            <li>
                                <h5>
                                    <Compact>
                                        {item.flags.map((item, i) => (
                                            <>
                                                {" "}
                                                <span className={"tsd-flag ts-flag" + item}>{item}</span>
                                            </>
                                        ))}{" "}
                                        {Boolean(item.flags.isRest) && (
                                            <span className="tsd-signature-symbol">...</span>
                                        )}
                                        {item.name}:
                                        {With(item, item.type, (superProps, props, item = props) => (
                                            <>{__partials__.type(item)}</>
                                        ))}
                                        {Boolean(item.defaultValue) && (
                                            <>
                                                {" "}
                                                <span className="tsd-signature-symbol">
                                                     =
                                                    {item.defaultValue}
                                                </span>
                                            </>
                                        )}{" "}
                                    </Compact>
                                </h5>
                                {__partials__.comment(item)}
                                {Boolean(item.type.declaration) && (
                                    <>
                                        {" "}
                                        {With(item, item.type.declaration, (superProps, props, item = props) => (
                                            <>{__partials__.parameter(item)}</>
                                        ))}
                                    </>
                                )}{" "}
                            </li>
                        </>
                    ))}{" "}
                </ul>
            </>
        )}
        {Boolean(props.type) && (
            <>
                {" "}
                <h4 className="tsd-returns-title">
                    Returns{" "}
                    <Compact>
                        {With(item, item.type, (superProps, props, item = props) => (
                            <>{__partials__.type(props)}</>
                        ))}
                    </Compact>
                </h4>
                {Boolean(props.comment.returns) && (
                    <>
                        {" "}
                        <Markdown>{props.comment.returns}</Markdown>
                    </>
                )}
                {Boolean(props.type.declaration) && (
                    <>
                        {" "}
                        {With(item, item.type.declaration, (superProps, props, item = props) => (
                            <>{__partials__.parameter(props)}</>
                        ))}
                    </>
                )}
            </>
        )}
    </>
);
