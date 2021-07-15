import React from 'react';
export const component = props => <React.Fragment><Compact>
    {Boolean(props) ? Boolean(props.elementType) ? <React.Fragment>            <With superProps="props" props="elementType">
                {props.__partials__.typeAndParent}
            </With>
            []
    </React.Fragment> : Boolean(props.reflection) ? <React.Fragment>                <IfSignature cond="reflection">
        {Boolean(props.reflection.parent.parent.url) ? <React.Fragment>                        <a href={props.relativeURL}>{props.reflection.parent.parent.name}</a>
        </React.Fragment> : <React.Fragment>                        {props.reflection.parent.parent.name}
        </React.Fragment>}                    .
        {Boolean(props.reflection.parent.url) ? <React.Fragment>                        <a href={props.relativeURL}>{props.reflection.parent.name}</a>
        </React.Fragment> : <React.Fragment>                        {props.reflection.parent.name}
        </React.Fragment>}                </IfSignature>
                <IfNotSignature cond="reflection">
        {Boolean(props.reflection.parent.url) ? <React.Fragment>                        <a href={props.relativeURL}>{props.reflection.parent.name}</a>
        </React.Fragment> : <React.Fragment>                        {props.reflection.parent.name}
        </React.Fragment>}                    .
        {Boolean(props.reflection.url) ? <React.Fragment>                        <a href={props.relativeURL}>{props.reflection.name}</a>
        </React.Fragment> : <React.Fragment>                        {props.reflection.name}
        </React.Fragment>}                </IfNotSignature>
    </React.Fragment> : <React.Fragment>                {props}
    </React.Fragment> : "        void\n"}</Compact>
</React.Fragment>;
