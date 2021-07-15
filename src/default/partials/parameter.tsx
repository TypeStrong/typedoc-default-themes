import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = props => <><ul className="tsd-parameters">
    {Boolean(props.signatures) && <>        <li className="tsd-parameter-signature">
            <ul className={"tsd-signatures " + props.cssClasses}>
          {props.signatures.map((item, i) => <>                    <li className="tsd-signature tsd-kind-icon"><Compact>
                        {item.__partials__.member.signature.title}
                    </Compact></li>
          </>)}            </ul>

            <ul className="tsd-descriptions">
          {props.signatures.map((item, i) => <>                    <li className="tsd-description">{item.__partials__.member.signature.body}</li>
          </>)}            </ul>
        </li>
    </>}{Boolean(props.indexSignature) && <>        <li className="tsd-parameter-index-signature">
            <h5><Compact>
                <span className="tsd-signature-symbol">[</span>
            {props.indexSignature.parameters.map((item, i) => <>                    {Boolean(item.flags.isRest) && <span className="tsd-signature-symbol">...</span>}{item.name}: <With superProps="props" props="type">{item.__partials__.type}</With>
            </>)}                <span className="tsd-signature-symbol">]: </span>
                <With superProps="props" props="indexSignature.type">{props.__partials__.type}</With>
            </Compact></h5>

            <With superProps="props" props="indexSignature">
                {props.__partials__.comment}
            </With>

        {Boolean(props.indexSignature.type.declaration) && <>                <With superProps="props" props="indexSignature.type.declaration">
                    {props.__partials__.parameter}
                </With>
        </>}        </li>
    </>}{props.children.map((item, i) => <>{Boolean(item.signatures) ? <>            <li className="tsd-parameter">
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
        </> : Boolean(item.type) ? <> {
          /* standard type */
        }
            <li className="tsd-parameter">
                <h5><Compact>
              {item.flags.map((item, i) => <>                        <span className={"tsd-flag ts-flag" + item}>{item}</span>
              </>)}                    {Boolean(item.flags.isRest) && <span className="tsd-signature-symbol">...</span>}
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

          {Boolean(item.children) && <>                    {item.__partials__.parameter}
          </>}
          {Boolean(item.type.declaration) && <>                    <With superProps="props" props="type.declaration">
                        {item.__partials__.parameter}
                    </With>
          </>}            </li>
        </> : <> {
          /* getter/setter */
        }
            <With superProps="props" props="getSignature"> {
            /* getter */
          }
                <li className="tsd-parameter">
                    <h5><Compact>
                {item.flags.map((item, i) => <>                            <span className={"tsd-flag ts-flag" + item}>{item}</span>
                </>)}                        <span className="tsd-signature-symbol">get </span>
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
                {item.flags.map((item, i) => <>                            <span className={"tsd-flag ts-flag" + item}>{item}</span>
                </>)}                        <span className="tsd-signature-symbol">set </span>
                        {item.wbr}
                        <span className="tsd-signature-symbol">(</span>
                {item.parameters.map((item, i) => <>                            {item.name}
                            <span className="tsd-signature-symbol">: </span>
                  {Boolean(item.type) ? <>                                <With superProps="props" props="type">
                                    {item.__partials__.type}
                                </With>
                  </> : <>                                <span className="tsd-signature-type">any</span>
                  </>}</>)}                        <span className="tsd-signature-symbol">): </span>
                        <With superProps="props" props="type">
                            {item.__partials__.type}
                        </With>
                    </Compact></h5>

                    {item.__partials__.comment}
                </li>
            </With>
        </>}
    </>)}</ul>
</>;
