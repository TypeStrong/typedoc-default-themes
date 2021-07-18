import { With, __partials__, Compact, IfCond, IfNotCond, Markdown } from "../../lib";
import React from "react";
export const typeParameters = (props, item = props) => (
    <>
        <ul className="tsd-type-parameters">
            {props.typeParameters.map((item, i) => (
                <>
                    {" "}
                    <li>
                        <h4>
                            <Compact>
                                {item.name}
                                {Boolean(item.type) && (
                                    <>
                                        {" "}
                                        <span className="tsd-signature-symbol">: </span>
                                        {With(item, item.type, (superProps, props, item = props) => (
                                            <>{__partials__.type(item)}</>
                                        ))}
                                    </>
                                )}
                                {Boolean(item.default) && (
                                    <>
                                        {" "}
                                         =
                                        {With(item, item.default, (superProps, props, item = props) => (
                                            <>{__partials__.type(item)}</>
                                        ))}
                                    </>
                                )}{" "}
                            </Compact>
                        </h4>
                        {__partials__.comment(item)}
                    </li>
                </>
            ))}
        </ul>
    </>
);
