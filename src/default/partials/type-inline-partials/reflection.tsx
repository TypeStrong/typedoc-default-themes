import React from 'react';
export const component = props => <>
    {Boolean(props.declaration.children) ? <> {
        /* object literal */
    }
        <span className="tsd-signature-symbol">{"{"} </span>
        {props.declaration.children.map((item, i) => <>{!Boolean(item.first) && <>            <span className="tsd-signature-symbol">; </span>
        </>}
            {Boolean(item.getSignature) ? Boolean(item.setSignature) ? <>                {item.name}
                <span className="tsd-signature-symbol">: </span>
                {Boolean(item.getSignature.type) ? <>                <With superProps="props" props="getSignature.type">
                    {item.__partials__.type}
                </With>
                </> : <>                    <span className="tsd-signature-type">any</span>
                </>}</> : <>                <span className="tsd-signature-symbol">get </span>
                {item.name}
                <span className="tsd-signature-symbol">(): </span>
                {Boolean(item.getSignature.type) ? <>                    <With superProps="props" props="getSignature.type">
                    {item.__partials__.type}
                </With>
                </> : <>                    <span className="tsd-signature-type">any</span>
                </>}</> : Boolean(item.setSignature) ? <>                <span className="tsd-signature-symbol">set </span>
                    {item.name}
                    <span className="tsd-signature-symbol">(</span>
                    {
                        /* Rather hacky to use each here... but we know there is exactly one. */
                    }{item.setSignature.parameters.map((item, i) => <>                    {item.name}
                        <span className="tsd-signature-symbol">: </span>
                        {Boolean(item.type) ? <>                        <With superProps="props" props="type">
                            {item.__partials__.type}
                        </With>
                        </> : <>                        <span className="tsd-signature-type">any</span>
                        </>}</>)}                <span className="tsd-signature-symbol">)</span>
                </> : <>                {item.name}
                {Boolean(item.flags.isOptional) ? <>                    <span className="tsd-signature-symbol">?: </span>
                </> : <>                    <span className="tsd-signature-symbol">: </span>
                </>}{Boolean(item.type) ? <>                <With superProps="props" props="type">
                    {item.__partials__.type}
                </With>
                </> : <>                    <span className="tsd-signature-type">any</span>
                </>}</>}</>)}    <span className="tsd-signature-symbol"> {"}"}</span>
    </> : Boolean(props.declaration.signatures) ? <>    {Boolean("(lookup declaration.signatures 1)") ? <> {
        /* more than one signature*/
    }
        <span className="tsd-signature-symbol">{"{"} </span>
        {props.declaration.signatures.map((item, i) => <>            {item.__partials__.member.signature.title}
            {!Boolean(item.last) && <>                <span className="tsd-signature-symbol">; </span>
            </>}</>)}        <span className="tsd-signature-symbol"> {"}"}</span>
    </> : <>{Boolean(props.needsParens) && <>            <span className="tsd-signature-symbol">(</span>
    </>}        <With superProps="props" props="(lookup declaration.signatures '0')">
            {props.__partials__.member.signature.title}
        </With>
        {Boolean(props.needsParens) && <>            <span className="tsd-signature-symbol">)</span>
        </>}</>}</> : <>    <span className="tsd-signature-symbol">{"{"}{"}"}</span>
    </>}</>;
