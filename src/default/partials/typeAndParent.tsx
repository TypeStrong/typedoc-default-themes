import { With, __partials__, Compact, IfCond, IfNotCond, Markdown, isSignature } from "../../lib";
import React from "react";
export const typeAndParent = (props) => (
    <>
        <Compact>
            {Boolean(props) ? (
                props.elementType ? (
                    <>
                        {" "}
                        {With(props, props.elementType, (superProps, props) => (
                            <>{__partials__.typeAndParent(props)}</>
                        ))}
                        []
                    </>
                ) : props.reflection ? (
                    <>
                        {" "}
                        <IfCond cond={isSignature(props.reflection)}>
                            {!!props.reflection.parent.parent.url ? (
                                <>
                                    {" "}
                                    <a href={props.relativeURL}>{props.reflection.parent.parent.name}</a>
                                </>
                            ) : (
                                <> {props.reflection.parent.parent.name}</>
                            )}{" "}
                            .
                            {!!props.reflection.parent.url ? (
                                <>
                                    {" "}
                                    <a href={props.relativeURL}>{props.reflection.parent.name}</a>
                                </>
                            ) : (
                                <> {props.reflection.parent.name}</>
                            )}{" "}
                        </IfCond>
                        <IfNotCond cond={isSignature(props.reflection)}>
                            {!!props.reflection.parent.url ? (
                                <>
                                    {" "}
                                    <a href={props.relativeURL}>{props.reflection.parent.name}</a>
                                </>
                            ) : (
                                <> {props.reflection.parent.name}</>
                            )}{" "}
                            .
                            {!!props.reflection.url ? (
                                <>
                                    {" "}
                                    <a href={props.relativeURL}>{props.reflection.name}</a>
                                </>
                            ) : (
                                <> {props.reflection.name}</>
                            )}{" "}
                        </IfNotCond>
                    </>
                ) : (
                    <> {props}</>
                )
            ) : (
                "        void\n"
            )}
        </Compact>
    </>
);
