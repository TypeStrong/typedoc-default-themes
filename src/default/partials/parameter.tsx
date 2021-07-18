import { With, __partials__, Compact, IfCond, IfNotCond, Markdown } from "../../lib";
import React from "react";
export const parameter = (props, item = props) => (
    <>
        <ul className="tsd-parameters">
            {Boolean(props.signatures) && (
                <>
                    {" "}
                    <li className="tsd-parameter-signature">
                        <ul className={"tsd-signatures " + props.cssClasses}>
                            {props.signatures.map((item, i) => (
                                <>
                                    {" "}
                                    <li className="tsd-signature tsd-kind-icon">
                                        <Compact>
                                            {__partials__["memberSignatureTitle"](item, { hideName: true })}
                                        </Compact>
                                    </li>
                                </>
                            ))}{" "}
                        </ul>

                        <ul className="tsd-descriptions">
                            {props.signatures.map((item, i) => (
                                <>
                                    {" "}
                                    <li className="tsd-description">
                                        {__partials__["memberSignatureBody"](item, { hideSources: true })}
                                    </li>
                                </>
                            ))}{" "}
                        </ul>
                    </li>
                </>
            )}
            {Boolean(props.indexSignature) && (
                <>
                    {" "}
                    <li className="tsd-parameter-index-signature">
                        <h5>
                            <Compact>
                                <span className="tsd-signature-symbol">[</span>
                                {props.indexSignature.parameters.map((item, i) => (
                                    <>
                                        {" "}
                                        {Boolean(item.flags.isRest) && (
                                            <span className="tsd-signature-symbol">...</span>
                                        )}
                                        {item.name}:
                                        {With(item, item.type, (superProps, props, item = props) => (
                                            <>{__partials__.type(item)}</>
                                        ))}
                                    </>
                                ))}{" "}
                                <span className="tsd-signature-symbol">]: </span>
                                {With(item, item.indexSignature.type, (superProps, props, item = props) => (
                                    <>{__partials__.type(props)}</>
                                ))}
                            </Compact>
                        </h5>
                        {With(item, item.indexSignature, (superProps, props, item = props) => (
                            <>{__partials__.comment(props)}</>
                        ))}
                        {Boolean(props.indexSignature.type.declaration) && (
                            <>
                                {" "}
                                {With(item, item.indexSignature.type.declaration, (superProps, props, item = props) => (
                                    <>{__partials__.parameter(props)}</>
                                ))}
                            </>
                        )}{" "}
                    </li>
                </>
            )}
            {props.children.map((item, i) => (
                <>
                    {Boolean(item.signatures) ? (
                        <>
                            {" "}
                            <li className="tsd-parameter">
                                <h5>
                                    <Compact>
                                        {Boolean(item.flags.isRest) && (
                                            <span className="tsd-signature-symbol">...</span>
                                        )}
                                        {item.wbr}
                                        <span className="tsd-signature-symbol">{Boolean(item.isOptional) && "?"}:</span>
                                        function
                                    </Compact>
                                </h5>

                                {__partials__.memberSignatures(item)}
                            </li>
                        </>
                    ) : Boolean(item.type) ? (
                        <>
                            {" "}
                            {/* standard type */}
                            <li className="tsd-parameter">
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
                                        {With(item, item.type, (superProps, props, item = props) => (
                                            <>
                                                {item.wbr}
                                                <span className="tsd-signature-symbol">
                                                    {Boolean(item.superProps.flags.isOptional) && "?"}:
                                                </span>
                                                {__partials__.type(item)}
                                            </>
                                        ))}
                                    </Compact>
                                </h5>
                                {__partials__.comment(item)}
                                {Boolean(item.children) && <> {__partials__.parameter(item)}</>}
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
                    ) : (
                        <>
                            {" "}
                            {/* getter/setter */}
                            {With(item, item.getSignature, (superProps, props, item = props) => (
                                <>
                                    {" "}
                                    {/* getter */}
                                    <li className="tsd-parameter">
                                        <h5>
                                            <Compact>
                                                {item.flags.map((item, i) => (
                                                    <>
                                                        {" "}
                                                        <span className={"tsd-flag ts-flag" + item}>{item}</span>
                                                    </>
                                                ))}{" "}
                                                <span className="tsd-signature-symbol">get </span>
                                                {item.wbr}
                                                <span className="tsd-signature-symbol">(): </span>
                                                {With(item, item.type, (superProps, props, item = props) => (
                                                    <>{__partials__.type(item)}</>
                                                ))}
                                            </Compact>
                                        </h5>

                                        {__partials__.comment(item)}
                                    </li>
                                </>
                            ))}
                            {With(item, item.setSignature, (superProps, props, item = props) => (
                                <>
                                    {" "}
                                    {/* setter */}
                                    <li className="tsd-parameter">
                                        <h5>
                                            <Compact>
                                                {item.flags.map((item, i) => (
                                                    <>
                                                        {" "}
                                                        <span className={"tsd-flag ts-flag" + item}>{item}</span>
                                                    </>
                                                ))}{" "}
                                                <span className="tsd-signature-symbol">set </span>
                                                {item.wbr}
                                                <span className="tsd-signature-symbol">(</span>
                                                {item.parameters.map((item, i) => (
                                                    <>
                                                        {" "}
                                                        {item.name}
                                                        <span className="tsd-signature-symbol">: </span>
                                                        {Boolean(item.type) ? (
                                                            <>
                                                                {" "}
                                                                {With(
                                                                    item,
                                                                    item.type,
                                                                    (superProps, props, item = props) => (
                                                                        <>{__partials__.type(item)}</>
                                                                    )
                                                                )}
                                                            </>
                                                        ) : (
                                                            <>
                                                                {" "}
                                                                <span className="tsd-signature-type">any</span>
                                                            </>
                                                        )}
                                                    </>
                                                ))}{" "}
                                                <span className="tsd-signature-symbol">): </span>
                                                {With(item, item.type, (superProps, props, item = props) => (
                                                    <>{__partials__.type(item)}</>
                                                ))}
                                            </Compact>
                                        </h5>

                                        {__partials__.comment(item)}
                                    </li>
                                </>
                            ))}
                        </>
                    )}
                </>
            ))}
        </ul>
    </>
);
