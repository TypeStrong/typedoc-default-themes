import React from 'react';
export const component = props => Boolean(props.categories) ? <React.Fragment>    <section className="tsd-panel-group tsd-index-group">
        <h2>Index</h2>
        <section className="tsd-panel tsd-index-panel">
            <div className="tsd-index-content">
        {props.categories.map((item, i) => <React.Fragment key={i}>                    <section className="tsd-index-section">
                        <h3>{item.title}</h3>
                        <ul className="tsd-index-list">
              {item.children.map((item, i) => <React.Fragment key={i}>                                <li className={item.cssClasses}><a href={item.relativeURL} className="tsd-kind-icon">{Boolean(item.name) ? item.wbr : <em>{item.wbr}</em>}</a></li>
              </React.Fragment>)}                        </ul>
                    </section>
        </React.Fragment>)}            </div>
        </section>
    </section>
</React.Fragment> : Boolean(props.groups) && <React.Fragment>    <section className="tsd-panel-group tsd-index-group">
        <h2>Index</h2>
        <section className="tsd-panel tsd-index-panel">
            <div className="tsd-index-content">
        {props.groups.map((item, i) => <React.Fragment key={i}>                    <section className={"tsd-index-section " + item.cssClasses}>
            {Boolean(item.categories) ? item.categories.map((item, i) => <React.Fragment key={i}>                                <h3>{Boolean(item.title) && <React.Fragment>{item.title} </React.Fragment>}{item.superProps.title}</h3>
                                <ul className="tsd-index-list">
                {item.children.map((item, i) => <React.Fragment key={i}>                                        <li className={item.cssClasses}><a href={item.relativeURL} className="tsd-kind-icon">{Boolean(item.name) ? item.wbr : <em>{item.wbr}</em>}</a></li>
                </React.Fragment>)}                                </ul>
            </React.Fragment>) : <React.Fragment>                            <h3>{item.title}</h3>
                            <ul className="tsd-index-list">
                {item.children.map((item, i) => <React.Fragment key={i}>                                    <li className={item.cssClasses}><a href={item.relativeURL} className="tsd-kind-icon">{Boolean(item.name) ? item.wbr : <em>{item.wbr}</em>}</a></li>
                </React.Fragment>)}                            </ul>
            </React.Fragment>}                    </section>
        </React.Fragment>)}            </div>
        </section>
    </section>
</React.Fragment>;
