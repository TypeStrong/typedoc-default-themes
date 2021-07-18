import { With, __partials__, Compact, IfCond, IfNotCond, Markdown } from "../../lib";
import React from "react";
export const tocRoot = (props, item = props) => (
    <>
        {/* {{#if isInPath*/}
        {/*    </ul> */}
        {/*    <ul class="current"> */}
        {/* {{/if*/}
        <li className={"#if isInPath current /if " + props.cssClasses}>
            <a href={props.relativeURL} className="tsd-kind-icon">
                {props.wbr}
            </a>
            {Boolean(props.children) && (
                <>
                    {" "}
                    <ul>
                        {props.children.map((item, i) => (
                            <> {__partials__.toc(item)}</>
                        ))}{" "}
                    </ul>
                </>
            )}
        </li>
        {/* {{#if isInPath*/}
        {/*     </ul> */}
        {/*     <ul class="after-current"> */}
        {/* {{/if*/}
    </>
);
