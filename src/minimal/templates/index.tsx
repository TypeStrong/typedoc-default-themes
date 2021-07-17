import { With, __partials__, Compact, IfCond, IfNotCond, Markdown } from "../../lib";
import React from "react";
export const component = (props, item = props) => (
    <>
        {With(item, item.model, (superProps, props, item = props) => (
            <>{__partials__.comment(props)}</>
        ))}

        {Boolean(props.model.typeHierarchy) && (
            <>
                {" "}
                <section className="tsd-hierarchy">
                    <h2>Hierarchy</h2>
                    {With(item, item.model.typeHierarchy, (superProps, props, item = props) => (
                        <>{__partials__.hierarchy(props)}</>
                    ))}
                </section>
            </>
        )}
        {With(item, item.model, (superProps, props, item = props) => (
            <>
                <div
                    style={{
                        position: "relative",
                    }}
                >
                    <a {...{ name: "typedoc-main-index" }} className="tsd-anchor"></a>
                </div>
                {__partials__.index(props)}
                {__partials__.members(props)}
            </>
        ))}
    </>
);
