import { With, __partials__, Compact, IfCond, IfNotCond, Markdown } from "../../lib";
import React from "react";
export const member = (props, item = props) => (
    <>
        <section className={"tsd-panel tsd-member " + props.cssClasses}>
            <a name={props.anchor} className="tsd-anchor"></a>
            {Boolean(props.name) && (
                <>
                    {" "}
                    <h3>
                        {props.flags.map((item, i) => (
                            <>
                                <span className={"tsd-flag ts-flag" + item}>{item}</span>{" "}
                            </>
                        ))}
                        {props.wbr}
                    </h3>
                </>
            )}
            {Boolean(props.signatures) ? (
                <> {__partials__["memberSignatures"](props)}</>
            ) : Boolean(props.hasGetterOrSetter) ? (
                <>{__partials__["memberGetterSetter"](props)}</>
            ) : Boolean(props.isReference) ? (
                <>{__partials__["memberReference"](props)}</>
            ) : (
                <> {__partials__["memberDeclaration"](props)}</>
            )}

            {props.groups.map((item, i) => (
                <>
                    {item.children.map((item, i) => (
                        <>{!Boolean(item.hasOwnDocument) && <> {__partials__.member(item)}</>}</>
                    ))}
                </>
            ))}
        </section>
    </>
);
