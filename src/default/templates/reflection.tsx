import {With, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <>{ With(item || props, (item || props).model, (superProps, props, item) => (<>
    {Boolean(props.hasComment) && <>        <section className="tsd-panel tsd-comment">
            {props.__partials__.comment}
        </section>
    </>}</>)) }

  {Boolean(props.model.typeParameters) && <>    <section className="tsd-panel tsd-type-parameters">
        <h3>Type parameters</h3>
        { With(item || props, (item || props).model, (superProps, props, item) => (<>{props.__partials__.typeParameters}</>)) }
    </section>
  </>}
  {Boolean(props.model.typeHierarchy) && <>    <section className="tsd-panel tsd-hierarchy">
        <h3>Hierarchy</h3>
        { With(item || props, (item || props).model.typeHierarchy, (superProps, props, item) => (<>{props.__partials__.hierarchy}</>)) }
    </section>
  </>}
  {Boolean(props.model.implementedTypes) && <>    <section className="tsd-panel">
        <h3>Implements</h3>
        <ul className="tsd-hierarchy">
        {props.model.implementedTypes.map((item, i) => <>                <li><Compact>{item.__partials__.type}</Compact></li>
        </>)}        </ul>
    </section>
  </>}
  {Boolean(props.model.implementedBy) && <>    <section className="tsd-panel">
        <h3>Implemented by</h3>
        <ul className="tsd-hierarchy">
        {props.model.implementedBy.map((item, i) => <>                <li><Compact>{item.__partials__.type}</Compact></li>
        </>)}        </ul>
    </section>
  </>}
  {Boolean(props.model.signatures) && <>    <section className="tsd-panel">
        <h3 className="tsd-before-signature">Callable</h3>
        { With(item || props, (item || props).model, (superProps, props, item) => (<>{props.__partials__.member.signatures}</>)) }
    </section>
  </>}
  {Boolean(props.model.indexSignature) && <>    <section className={"tsd-panel " + props.model.cssClasses}>
        <h3 className="tsd-before-signature">Indexable</h3>
        <div className="tsd-signature tsd-kind-icon"><Compact>
            <span className="tsd-signature-symbol">[</span>
          {props.model.indexSignature.parameters.map((item, i) => <>                {item.name}: { With(item || props, (item || props).type, (superProps, props, item) => (<>{item.__partials__.type}</>)) }
          </>)}            <span className="tsd-signature-symbol">]: </span>
            { With(item || props, (item || props).model.indexSignature.type, (superProps, props, item) => (<>{props.__partials__.type}</>)) }
        </Compact></div>

        { With(item || props, (item || props).model.indexSignature, (superProps, props, item) => (<>
            {props.__partials__.comment}
        </>)) }

      {Boolean(props.model.indexSignature.type.declaration) && <>            { With(item || props, (item || props).model.indexSignature.type.declaration, (superProps, props, item) => (<>
                {props.__partials__.parameter}
            </>)) }
      </>}    </section>
  </>}
  { With(item || props, (item || props).model, (superProps, props, item) => (<>
    {props.__partials__.index}
    {props.__partials__.members}
  </>)) }
</>;
