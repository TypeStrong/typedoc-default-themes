import React from 'react';
export const component = props => Boolean(props.categories) ? props.categories.map((item, i) => <React.Fragment key={i}>        <section className={"tsd-panel-group tsd-member-group " + item.cssClasses}>
            <h2>{Boolean(item.title) && <React.Fragment>{item.title} </React.Fragment>}{item.superProps.title}</h2>
    {item.children.map((item, i) => <React.Fragment key={i}>{!Boolean(item.hasOwnDocument) && <React.Fragment>                    {item.__partials__.member}
      </React.Fragment>}</React.Fragment>)}        </section>
</React.Fragment>) : <React.Fragment>    <section className={"tsd-panel-group tsd-member-group " + props.cssClasses}>
        <h2>{props.title}</h2>
    {props.children.map((item, i) => <React.Fragment key={i}>{!Boolean(item.hasOwnDocument) && <React.Fragment>                {item.__partials__.member}
      </React.Fragment>}</React.Fragment>)}    </section>
</React.Fragment>;
