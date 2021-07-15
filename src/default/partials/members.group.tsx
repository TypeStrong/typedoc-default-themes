import {With, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => Boolean(props.categories) ? props.categories.map((item, i) => <>        <section className={"tsd-panel-group tsd-member-group " + item.cssClasses}>
            <h2>{Boolean(item.title) && <>{item.title} </>}{item.superProps.title}</h2>
    {item.children.map((item, i) => <>{!Boolean(item.hasOwnDocument) && <>                    {item.__partials__.member}
      </>}</>)}        </section>
</>) : <>    <section className={"tsd-panel-group tsd-member-group " + props.cssClasses}>
        <h2>{props.title}</h2>
    {props.children.map((item, i) => <>{!Boolean(item.hasOwnDocument) && <>                {item.__partials__.member}
      </>}</>)}    </section>
</>;
