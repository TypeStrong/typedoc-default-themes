import React from 'react';
export const component = props => Boolean(props.categories) ? props.categories.map((item, i) => <React.Fragment key={i}>{!Boolean(item.allChildrenHaveOwnDocument) && <React.Fragment>            <section className={"tsd-panel-group tsd-member-group " + item.cssClasses}>
                <h2>{item.title}</h2>
      {item.children.map((item, i) => <React.Fragment key={i}>{!Boolean(item.hasOwnDocument) && <React.Fragment>                        {item.__partials__.member}
        </React.Fragment>}</React.Fragment>)}            </section>
  </React.Fragment>}</React.Fragment>) : props.groups.map((item, i) => <React.Fragment key={i}>{!Boolean(item.allChildrenHaveOwnDocument) && <React.Fragment>            {item.__partials__.members.group}
  </React.Fragment>}</React.Fragment>);
