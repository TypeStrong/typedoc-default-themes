import React from 'react';
export const component = props => <><Compact>
    {Boolean(props) ? Boolean(props.elementType) ? <>            <With superProps="props" props="elementType">
                {props.__partials__.typeAndParent}
            </With>
            []
    </> : Boolean(props.reflection) ? <>                <IfSignature cond="reflection">
        {Boolean(props.reflection.parent.parent.url) ? <>                        <a href={props.relativeURL}>{props.reflection.parent.parent.name}</a>
        </> : <>                        {props.reflection.parent.parent.name}
        </>}                    .
        {Boolean(props.reflection.parent.url) ? <>                        <a href={props.relativeURL}>{props.reflection.parent.name}</a>
        </> : <>                        {props.reflection.parent.name}
        </>}                </IfSignature>
                <IfNotSignature cond="reflection">
        {Boolean(props.reflection.parent.url) ? <>                        <a href={props.relativeURL}>{props.reflection.parent.name}</a>
        </> : <>                        {props.reflection.parent.name}
        </>}                    .
        {Boolean(props.reflection.url) ? <>                        <a href={props.relativeURL}>{props.reflection.name}</a>
        </> : <>                        {props.reflection.name}
        </>}                </IfNotSignature>
    </> : <>                {props}
    </> : "        void\n"}</Compact>
</>;
