import {With, __partials__, Compact, IfCond, IfNotCond, Markdown} from '../../../lib';
import React from 'react';
export const component = (props, item = props) => <>
    {Boolean(props.declaration.children) ? <> {
        /* object literal */
    }
        <span className="tsd-signature-symbol">{"{"} </span>
        {props.declaration.children.map((item, i) => <>{!Boolean(item.first) && <>            <span className="tsd-signature-symbol">; </span>
        </>}
            {Boolean(item.getSignature) ? Boolean(item.setSignature) ? <>                {item.name}
                <span className="tsd-signature-symbol">: </span>
                {Boolean(item.getSignature.type) ? <>                { With(item, item.getSignature.type, (superProps, props, item) => (<>
                    {item.__partials__.type}
                </>)) }
                </> : <>                    <span className="tsd-signature-type">any</span>
                </>}</> : <>                <span className="tsd-signature-symbol">get </span>
                {item.name}
                <span className="tsd-signature-symbol">(): </span>
                {Boolean(item.getSignature.type) ? <>                    { With(item, item.getSignature.type, (superProps, props, item) => (<>
                    {item.__partials__.type}
                </>)) }
                </> : <>                    <span className="tsd-signature-type">any</span>
                </>}</> : Boolean(item.setSignature) ? <>                <span className="tsd-signature-symbol">set </span>
                    {item.name}
                    <span className="tsd-signature-symbol">(</span>
                    {
                        /* Rather hacky to use each here... but we know there is exactly one. */
                    }{item.setSignature.parameters.map((item, i) => <>                    {item.name}
                        <span className="tsd-signature-symbol">: </span>
                        {Boolean(item.type) ? <>                        { With(item, item.type, (superProps, props, item) => (<>
                            {item.__partials__.type}
                        </>)) }
                        </> : <>                        <span className="tsd-signature-type">any</span>
                        </>}</>)}                <span className="tsd-signature-symbol">)</span>
                </> : <>                {item.name}
                {Boolean(item.flags.isOptional) ? <>                    <span className="tsd-signature-symbol">?: </span>
                </> : <>                    <span className="tsd-signature-symbol">: </span>
                </>}{Boolean(item.type) ? <>                { With(item, item.type, (superProps, props, item) => (<>
                    {item.__partials__.type}
                </>)) }
                </> : <>                    <span className="tsd-signature-type">any</span>
                </>}</>}</>)}    <span className="tsd-signature-symbol"> {"}"}</span>
    </> : Boolean(props.declaration.signatures) ? <>    {Boolean("(lookup declaration.signatures 1)") ? <> {
        /* more than one signature*/
    }
        <span className="tsd-signature-symbol">{"{"} </span>
        {props.declaration.signatures.map((item, i) => <>            {__partials__['member.signature.title'](item, {hideName: true})}
            {!Boolean(item.last) && <>                <span className="tsd-signature-symbol">; </span>
            </>}</>)}        <span className="tsd-signature-symbol"> {"}"}</span>
    </> : <>{Boolean(props.needsParens) && <>            <span className="tsd-signature-symbol">(</span>
    </>}        { With(item, item.declaration.signatures[0], (superProps, props, item) => (<>
            {__partials__['member.signature.title'](props, {hideName: true, arrowStyle: true})}
        </>)) }
        {Boolean(props.needsParens) && <>            <span className="tsd-signature-symbol">)</span>
        </>}</>}</> : <>    <span className="tsd-signature-symbol">{"{"}{"}"}</span>
    </>}</>;
