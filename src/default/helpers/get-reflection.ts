/**
 * Get a reflection object form a reflection id.
 *
 * @returns The filtered array.
 */
export function getReflection(id: number, options: any): any {
    const refl = options.data.root.project.reflections[id];
    if (!refl) {
        throw new Error(`cannot find reflection with id ${id}`);
    }

    return refl;
}
