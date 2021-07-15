import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = props => Boolean(props.categories) ? <>    <section className="tsd-panel-group tsd-index-group">
        <h2>Index</h2>
        <section className="tsd-panel tsd-index-panel">
            <div className="tsd-index-content">
        {props.categories.map((item, i) => <>                    <section className="tsd-index-section">
                        <h3>{item.title}</h3>
                        <ul className="tsd-index-list">
              {item.children.map((item, i) => <>                                <li className={item.cssClasses}><a href={item.relativeURL} className="tsd-kind-icon">{Boolean(item.name) ? item.wbr : <em>{item.wbr}</em>}</a></li>
              </>)}                        </ul>
                    </section>
        </>)}            </div>
        </section>
    </section>
</> : Boolean(props.groups) && <>    <section className="tsd-panel-group tsd-index-group">
        <h2>Index</h2>
        <section className="tsd-panel tsd-index-panel">
            <div className="tsd-index-content">
        {props.groups.map((item, i) => <>                    <section className={"tsd-index-section " + item.cssClasses}>
            {Boolean(item.categories) ? item.categories.map((item, i) => <>                                <h3>{Boolean(item.title) && <>{item.title} </>}{item.superProps.title}</h3>
                                <ul className="tsd-index-list">
                {item.children.map((item, i) => <>                                        <li className={item.cssClasses}><a href={item.relativeURL} className="tsd-kind-icon">{Boolean(item.name) ? item.wbr : <em>{item.wbr}</em>}</a></li>
                </>)}                                </ul>
            </>) : <>                            <h3>{item.title}</h3>
                            <ul className="tsd-index-list">
                {item.children.map((item, i) => <>                                    <li className={item.cssClasses}><a href={item.relativeURL} className="tsd-kind-icon">{Boolean(item.name) ? item.wbr : <em>{item.wbr}</em>}</a></li>
                </>)}                            </ul>
            </>}                    </section>
        </>)}            </div>
        </section>
    </section>
</>;
