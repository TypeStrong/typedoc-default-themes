import { With, __partials__, Compact, IfCond, IfNotCond, Markdown } from "../../lib";
import React from "react";
export const component = (props, item = props) => (
    <>
        {With(item, item.model, (superProps, props, item = props) => (
            <>
                {Boolean(props.hasComment) && (
                    <>
                        {" "}
                        <section className="tsd-panel tsd-comment">{__partials__.comment(props)}</section>
                    </>
                )}
            </>
        ))}

        {Boolean(props.model.typeParameters) && (
            <>
                {" "}
                <section className="tsd-panel tsd-type-parameters">
                    <h3>Type parameters</h3>
                    {With(item, item.model, (superProps, props, item = props) => (
                        <>{__partials__.typeParameters(props)}</>
                    ))}
                </section>
            </>
        )}
        {Boolean(props.model.typeHierarchy) && (
            <>
                {" "}
                <section className="tsd-panel tsd-hierarchy">
                    <h3>Hierarchy</h3>
                    {With(item, item.model.typeHierarchy, (superProps, props, item = props) => (
                        <>{__partials__.hierarchy(props)}</>
                    ))}
                </section>
            </>
        )}
        {Boolean(props.model.implementedTypes) && (
            <>
                {" "}
                <section className="tsd-panel">
                    <h3>Implements</h3>
                    <ul className="tsd-hierarchy">
                        {props.model.implementedTypes.map((item, i) => (
                            <>
                                {" "}
                                <li>
                                    <Compact>{item.__partials__.type}</Compact>
                                </li>
                            </>
                        ))}{" "}
                    </ul>
                </section>
            </>
        )}
        {Boolean(props.model.implementedBy) && (
            <>
                {" "}
                <section className="tsd-panel">
                    <h3>Implemented by</h3>
                    <ul className="tsd-hierarchy">
                        {props.model.implementedBy.map((item, i) => (
                            <>
                                {" "}
                                <li>
                                    <Compact>{item.__partials__.type}</Compact>
                                </li>
                            </>
                        ))}{" "}
                    </ul>
                </section>
            </>
        )}
        {Boolean(props.model.signatures) && (
            <>
                {" "}
                <section className="tsd-panel">
                    <h3 className="tsd-before-signature">Callable</h3>
                    {With(item, item.model, (superProps, props, item = props) => (
                        <>{__partials__["memberSignatures"](props)}</>
                    ))}
                </section>
            </>
        )}
        {Boolean(props.model.indexSignature) && (
            <>
                {" "}
                <section className={"tsd-panel " + props.model.cssClasses}>
                    <h3 className="tsd-before-signature">Indexable</h3>
                    <div className="tsd-signature tsd-kind-icon">
                        <Compact>
                            <span className="tsd-signature-symbol">[</span>
                            {props.model.indexSignature.parameters.map((item, i) => (
                                <>
                                    {" "}
                                    {item.name}:
                                    {With(item, item.type, (superProps, props, item = props) => (
                                        <>{item.__partials__.type}</>
                                    ))}
                                </>
                            ))}{" "}
                            <span className="tsd-signature-symbol">]: </span>
                            {With(item, item.model.indexSignature.type, (superProps, props, item = props) => (
                                <>{__partials__.type(props)}</>
                            ))}
                        </Compact>
                    </div>
                    {With(item, item.model.indexSignature, (superProps, props, item = props) => (
                        <>{__partials__.comment(props)}</>
                    ))}
                    {Boolean(props.model.indexSignature.type.declaration) && (
                        <>
                            {" "}
                            {With(
                                (
                                    superProps = item,
                                    props = item.model.indexSignature.type.declaration,
                                    item = props
                                ) => (
                                    <>{__partials__.parameter(props)}</>
                                )
                            )}
                        </>
                    )}{" "}
                </section>
            </>
        )}
        {With(item, item.model, (superProps, props, item = props) => (
            <>
                {__partials__.index(props)}
                {__partials__.members(props)}
            </>
        ))}
    </>
);
