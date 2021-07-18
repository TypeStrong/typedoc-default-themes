import { With, __partials__, Compact, IfCond, IfNotCond, Markdown } from "../../lib";
import React from "react";
export const hierarchy = (props, item = props) => (
    <>
        <ul className="tsd-hierarchy">
            {props.types.map((item, i) => (
                <>
                    {" "}
                    <li>
                        {Boolean(item.superProps.isTarget) ? (
                            <>
                                {" "}
                                <span className="target">{item}</span>
                            </>
                        ) : (
                            <>
                                {" "}
                                <Compact>{__partials__.type(item)}</Compact>
                            </>
                        )}
                        {Boolean(item.last) && (
                            <>
                                {" "}
                                {With(item, item.superProps.next, (superProps, props, item = props) => (
                                    <>{__partials__.hierarchy(item)}</>
                                ))}
                            </>
                        )}{" "}
                    </li>
                </>
            ))}
        </ul>
    </>
);
