export function With<A, B, C>(superProps: A, props: B, cb: (superProps: A, props: B, item: B) => C): C {
    return cb(superProps, props, props);
}

export function IfCond<T>(props: {cond: string, children: T}) {
    if(props.cond) return props.children;
    else return undefined;
}
export function IfNotCond<T>(props: {cond: string, children: T}) {
    if(!props.cond) return props.children;
    else return undefined;
}

export function Markdown<T>(props: {children: T}) {
    return <markdown>{props.children}</markdown>;
}
