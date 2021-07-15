import React from 'react';
export const component = props => <React.Fragment>
    {Boolean(props.declaration.children) ? <React.Fragment> {
        /* object literal */
    }
        <span className="tsd-signature-symbol">{"{"} </span>
        {props.declaration.children.map((item, i) => <React.Fragment key={i}>{!Boolean(item.first) && <React.Fragment>            <span className="tsd-signature-symbol">; </span>
        </React.Fragment>}
            {Boolean(item.getSignature) ? Boolean(item.setSignature) ? <React.Fragment>                {item.name}
                <span className="tsd-signature-symbol">: </span>
                {Boolean(item.getSignature.type) ? <React.Fragment>                <With superProps="props" props="getSignature.type">
                    {item.__partials__.type}
                </With>
                </React.Fragment> : <React.Fragment>                    <span className="tsd-signature-type">any</span>
                </React.Fragment>}</React.Fragment> : <React.Fragment>                <span className="tsd-signature-symbol">get </span>
                {item.name}
                <span className="tsd-signature-symbol">(): </span>
                {Boolean(item.getSignature.type) ? <React.Fragment>                    <With superProps="props" props="getSignature.type">
                    {item.__partials__.type}
                </With>
                </React.Fragment> : <React.Fragment>                    <span className="tsd-signature-type">any</span>
                </React.Fragment>}</React.Fragment> : Boolean(item.setSignature) ? <React.Fragment>                <span className="tsd-signature-symbol">set </span>
                    {item.name}
                    <span className="tsd-signature-symbol">(</span>
                    {
                        /* Rather hacky to use each here... but we know there is exactly one. */
                    }{item.setSignature.parameters.map((item, i) => <React.Fragment key={i}>                    {item.name}
                        <span className="tsd-signature-symbol">: </span>
                        {Boolean(item.type) ? <React.Fragment>                        <With superProps="props" props="type">
                            {item.__partials__.type}
                        </With>
                        </React.Fragment> : <React.Fragment>                        <span className="tsd-signature-type">any</span>
                        </React.Fragment>}</React.Fragment>)}                <span className="tsd-signature-symbol">)</span>
                </React.Fragment> : <React.Fragment>                {item.name}
                {Boolean(item.flags.isOptional) ? <React.Fragment>                    <span className="tsd-signature-symbol">?: </span>
                </React.Fragment> : <React.Fragment>                    <span className="tsd-signature-symbol">: </span>
                </React.Fragment>}{Boolean(item.type) ? <React.Fragment>                <With superProps="props" props="type">
                    {item.__partials__.type}
                </With>
                </React.Fragment> : <React.Fragment>                    <span className="tsd-signature-type">any</span>
                </React.Fragment>}</React.Fragment>}</React.Fragment>)}    <span className="tsd-signature-symbol"> {"}"}</span>
    </React.Fragment> : Boolean(props.declaration.signatures) ? <React.Fragment>    {Boolean("(lookup declaration.signatures 1)") ? <React.Fragment> {
        /* more than one signature*/
    }
        <span className="tsd-signature-symbol">{"{"} </span>
        {props.declaration.signatures.map((item, i) => <React.Fragment key={i}>            {item.__partials__.member.signature.title}
            {!Boolean(item.last) && <React.Fragment>                <span className="tsd-signature-symbol">; </span>
            </React.Fragment>}</React.Fragment>)}        <span className="tsd-signature-symbol"> {"}"}</span>
    </React.Fragment> : <React.Fragment>{Boolean(props.needsParens) && <React.Fragment>            <span className="tsd-signature-symbol">(</span>
    </React.Fragment>}        <With superProps="props" props="(lookup declaration.signatures '0')">
            {props.__partials__.member.signature.title}
        </With>
        {Boolean(props.needsParens) && <React.Fragment>            <span className="tsd-signature-symbol">)</span>
        </React.Fragment>}</React.Fragment>}</React.Fragment> : <React.Fragment>    <span className="tsd-signature-symbol">{"{"}{"}"}</span>
    </React.Fragment>}</React.Fragment>;
