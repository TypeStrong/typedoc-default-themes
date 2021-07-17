import {With, Compact, IfCond, IfNotCond, Markdown, isSignature} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <><Compact>
    {Boolean(props) ? Boolean(props.elementType) ? <>            { With(item, item.elementType, (superProps, props, item) => (<>
                {props.__partials__.typeAndParent}
            </>)) }
            []
    </> : Boolean(props.reflection) ? <>                <IfCond cond={isSignature(props.reflection)}>
        {Boolean(props.reflection.parent.parent.url) ? <>                        <a href={props.relativeURL}>{props.reflection.parent.parent.name}</a>
        </> : <>                        {props.reflection.parent.parent.name}
        </>}                    .
        {Boolean(props.reflection.parent.url) ? <>                        <a href={props.relativeURL}>{props.reflection.parent.name}</a>
        </> : <>                        {props.reflection.parent.name}
        </>}                </IfCond>
                <IfNotCond cond={isSignature(props.reflection)}>
        {Boolean(props.reflection.parent.url) ? <>                        <a href={props.relativeURL}>{props.reflection.parent.name}</a>
        </> : <>                        {props.reflection.parent.name}
        </>}                    .
        {Boolean(props.reflection.url) ? <>                        <a href={props.relativeURL}>{props.reflection.name}</a>
        </> : <>                        {props.reflection.name}
        </>}                </IfNotCond>
    </> : <>                {props}
    </> : "        void\n"}</Compact>
</>;
