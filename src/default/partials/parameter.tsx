import React from 'react';
export const component = props => <React.Fragment><ul className="tsd-parameters">
    {Boolean(props.signatures) && <React.Fragment>        <li className="tsd-parameter-signature">
            <ul className={"tsd-signatures " + props.cssClasses}>
          {props.signatures.map((item, i) => <React.Fragment key={i}>                    <li className="tsd-signature tsd-kind-icon"><Compact>
                        {item.__partials__.member.signature.title}
                    </Compact></li>
          </React.Fragment>)}            </ul>

            <ul className="tsd-descriptions">
          {props.signatures.map((item, i) => <React.Fragment key={i}>                    <li className="tsd-description">{item.__partials__.member.signature.body}</li>
          </React.Fragment>)}            </ul>
        </li>
    </React.Fragment>}{Boolean(props.indexSignature) && <React.Fragment>        <li className="tsd-parameter-index-signature">
            <h5><Compact>
                <span className="tsd-signature-symbol">[</span>
            {props.indexSignature.parameters.map((item, i) => <React.Fragment key={i}>                    {Boolean(item.flags.isRest) && <span className="tsd-signature-symbol">...</span>}{item.name}: <With superProps="props" props="type">{item.__partials__.type}</With>
            </React.Fragment>)}                <span className="tsd-signature-symbol">]: </span>
                <With superProps="props" props="indexSignature.type">{props.__partials__.type}</With>
            </Compact></h5>

            <With superProps="props" props="indexSignature">
                {props.__partials__.comment}
            </With>

        {Boolean(props.indexSignature.type.declaration) && <React.Fragment>                <With superProps="props" props="indexSignature.type.declaration">
                    {props.__partials__.parameter}
                </With>
        </React.Fragment>}        </li>
    </React.Fragment>}{props.children.map((item, i) => <React.Fragment key={i}>{Boolean(item.signatures) ? <React.Fragment>            <li className="tsd-parameter">
                <h5><Compact>
                    {Boolean(item.flags.isRest) && <span className="tsd-signature-symbol">...</span>}
                    {item.wbr}
                    <span className="tsd-signature-symbol">
                        {Boolean(item.isOptional) && "?"}
                        : 
                    </span>
                    function
                </Compact></h5>

                {item.__partials__.member.signatures}
            </li>
        </React.Fragment> : Boolean(item.type) ? <React.Fragment> {
          /* standard type */
        }
            <li className="tsd-parameter">
                <h5><Compact>
              {item.flags.map((item, i) => <React.Fragment key={i}>                        <span className={"tsd-flag ts-flag" + item}>{item}</span> 
              </React.Fragment>)}                    {Boolean(item.flags.isRest) && <span className="tsd-signature-symbol">...</span>}
                    <With superProps="props" props="type">
                        {item.wbr}
                        <span className="tsd-signature-symbol">
                            {Boolean(item.superProps.flags.isOptional) && "?"}
                            : 
                        </span>
                        {item.__partials__.type}
                    </With>
                </Compact></h5>

                {item.__partials__.comment}

          {Boolean(item.children) && <React.Fragment>                    {item.__partials__.parameter}
          </React.Fragment>}
          {Boolean(item.type.declaration) && <React.Fragment>                    <With superProps="props" props="type.declaration">
                        {item.__partials__.parameter}
                    </With>
          </React.Fragment>}            </li>
        </React.Fragment> : <React.Fragment> {
          /* getter/setter */
        }
            <With superProps="props" props="getSignature"> {
            /* getter */
          }
                <li className="tsd-parameter">
                    <h5><Compact>
                {item.flags.map((item, i) => <React.Fragment key={i}>                            <span className={"tsd-flag ts-flag" + item}>{item}</span> 
                </React.Fragment>)}                        <span className="tsd-signature-symbol">get </span>
                        {item.wbr}
                        <span className="tsd-signature-symbol">(): </span>
                        <With superProps="props" props="type">
                            {item.__partials__.type}
                        </With>
                    </Compact></h5>

                    {item.__partials__.comment}
                </li>
            </With>
            <With superProps="props" props="setSignature"> {
            /* setter */
          }
                <li className="tsd-parameter">
                    <h5><Compact>
                {item.flags.map((item, i) => <React.Fragment key={i}>                            <span className={"tsd-flag ts-flag" + item}>{item}</span> 
                </React.Fragment>)}                        <span className="tsd-signature-symbol">set </span>
                        {item.wbr}
                        <span className="tsd-signature-symbol">(</span>
                {item.parameters.map((item, i) => <React.Fragment key={i}>                            {item.name}
                            <span className="tsd-signature-symbol">: </span>
                  {Boolean(item.type) ? <React.Fragment>                                <With superProps="props" props="type">
                                    {item.__partials__.type}
                                </With>
                  </React.Fragment> : <React.Fragment>                                <span className="tsd-signature-type">any</span>
                  </React.Fragment>}</React.Fragment>)}                        <span className="tsd-signature-symbol">): </span>
                        <With superProps="props" props="type">
                            {item.__partials__.type}
                        </With>
                    </Compact></h5>

                    {item.__partials__.comment}
                </li>
            </With>
        </React.Fragment>}
    </React.Fragment>)}</ul>
</React.Fragment>;
