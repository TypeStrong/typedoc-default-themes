import { With, IfCond, IfNotCond, Markdown } from '../../lib';
import React from 'react';
export const component = (props, item = props) => <>{!Boolean(props.hideName) ? <>    {props.wbr}
</> : <>    <IfCond cond="kindString '===' 'Constructor signature'">
    {Boolean(props.flags.isAbstract) && <>            <span className="tsd-signature-symbol">abstract </span>
    </>}        <span className="tsd-signature-symbol">new </span>
</IfCond>
</>}{Boolean(props.typeParameters) && <>    {"<"}
    {props.typeParameters.map((item, i) => <>        {Boolean(item.index) && ",\xA0"}
    {item.name}
</>)}    {">"}
</>}<span className="tsd-signature-symbol">(</span>
    {props.parameters.map((item, i) => <>    {Boolean(item.index) && ",\xA0"}
        {Boolean(item.flags.isRest) && <span className="tsd-signature-symbol">...</span>}
        {item.name}
        <span className="tsd-signature-symbol">
            {Boolean(item.flags.isOptional) && "?"}
            {Boolean(item.defaultValue) && "?"}
            :
        </span>
        {With(item || props, (item || props).type, (superProps, props, item) => (<>{item.__partials__.type}</>))}
    </>)}<span className="tsd-signature-symbol">)</span>
    {Boolean(props.type) && <>{Boolean(props.arrowStyle) ? <>        <span className="tsd-signature-symbol"> ={'>'} </span>
    </> : <>        <span className="tsd-signature-symbol">: </span>
    </>}    {With(item || props, (item || props).type, (superProps, props, item) => (<>
        {props.__partials__.type}
    </>))}
    </>}</>;
