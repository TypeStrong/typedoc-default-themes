import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => Boolean(props.categories) ? props.categories.map((item, i) => <>{!Boolean(item.allChildrenHaveOwnDocument) && <>            <section className={"tsd-panel-group tsd-member-group " + item.cssClasses}>
                <h2>{item.title}</h2>
      {item.children.map((item, i) => <>{!Boolean(item.hasOwnDocument) && <>                        {item.__partials__.member}
        </>}</>)}            </section>
  </>}</>) : props.groups.map((item, i) => <>{!Boolean(item.allChildrenHaveOwnDocument) && <>            {item.__partials__.members.group}
  </>}</>);
