import React from 'react';
export const component = props => <><With superProps="props" props="model">
    {Boolean(props.hasComment) && <>        <section className="tsd-panel tsd-comment">
            {props.__partials__.comment}
        </section>
    </>}</With>

  {Boolean(props.model.typeParameters) && <>    <section className="tsd-panel tsd-type-parameters">
        <h3>Type parameters</h3>
        <With superProps="props" props="model">{props.__partials__.typeParameters}</With>
    </section>
  </>}
  {Boolean(props.model.typeHierarchy) && <>    <section className="tsd-panel tsd-hierarchy">
        <h3>Hierarchy</h3>
        <With superProps="props" props="model.typeHierarchy">{props.__partials__.hierarchy}</With>
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
        <With superProps="props" props="model">{props.__partials__.member.signatures}</With>
    </section>
  </>}
  {Boolean(props.model.indexSignature) && <>    <section className={"tsd-panel " + props.model.cssClasses}>
        <h3 className="tsd-before-signature">Indexable</h3>
        <div className="tsd-signature tsd-kind-icon"><Compact>
            <span className="tsd-signature-symbol">[</span>
          {props.model.indexSignature.parameters.map((item, i) => <>                {item.name}: <With superProps="props" props="type">{item.__partials__.type}</With>
          </>)}            <span className="tsd-signature-symbol">]: </span>
            <With superProps="props" props="model.indexSignature.type">{props.__partials__.type}</With>
        </Compact></div>

        <With superProps="props" props="model.indexSignature">
            {props.__partials__.comment}
        </With>

      {Boolean(props.model.indexSignature.type.declaration) && <>            <With superProps="props" props="model.indexSignature.type.declaration">
                {props.__partials__.parameter}
            </With>
      </>}    </section>
  </>}
  <With superProps="props" props="model">
    {props.__partials__.index}
    {props.__partials__.members}
  </With>
</>;
