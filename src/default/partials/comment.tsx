import { With, __partials__, Compact, IfCond, IfNotCond, Markdown } from "../../lib";
import React from "react";
export const comment = (props, item = props) => (
    <>
        {With(item, item.comment, (superProps, props, item = props) => (
            <>
                {Boolean(props.hasVisibleComponent) && (
                    <>
                        {" "}
                        <div className="tsd-comment tsd-typography">
                            {Boolean(props.shortText) && (
                                <>
                                    {" "}
                                    <div className="lead">
                                        <Markdown>{props.shortText}</Markdown>
                                    </div>
                                </>
                            )}
                            {Boolean(props.text) && (
                                <>
                                    {" "}
                                    <Markdown>{props.text}</Markdown>
                                </>
                            )}
                            {Boolean(props.tags) && (
                                <>
                                    {" "}
                                    <dl className="tsd-comment-tags">
                                        {props.tags.map((item, i) => (
                                            <>
                                                {" "}
                                                <dt>{item.tagName}</dt>
                                                <dd>
                                                    <Markdown>{item.text}</Markdown>
                                                </dd>
                                            </>
                                        ))}{" "}
                                    </dl>
                                </>
                            )}{" "}
                        </div>
                    </>
                )}
            </>
        ))}
    </>
);
