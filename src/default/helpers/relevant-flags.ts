// The order of the flags in this list is important. It determines the
// order in which the theme processes the flags. It should reflect the
// order in which the keywords can appear in the TS source.
//
// Some combinations are impossible. In such case, the relative order
// of such impossible combinations does not matter. (e.g. a symbol
// cannot be both private and protected, or abstract and static.)
const relevantFlagList = [
    "Private",
    "Protected",
    "Abstract",
    "Static",
    "ExportAssignment",
    "Optional",
    "DefaultValue",
    "Rest",
    "Let",
    "Const",
];

const relevantFlagListWithExport =
    ["Export"].concat(relevantFlagList);

/**
 * Filter the flag names that are set on a reflection to only those
 * names relevant to this theme.
 *
 * Templates that iterate over the flags of reflections should
 * **always** use this helper to filter the flags, because what flags
 * are relevant varies depending on the settings used when rendering
 * with the theme and on the reflection being examined.
 *
 * @returns The filtered array.
 */
export function relevantFlags(this: any, options: any): string[] {

    // When excludeNotExported is set, we don't want to produce labels
    // for "Exported" because everything is exported and thus the
    // labels are pointless.
    const list = options.data.root.settings.excludeNotExported ?
        relevantFlagList :
        relevantFlagListWithExport;

    // We filter the list of relevant flags so that the flags are
    // produce in the order set by that list instead of the order the
    // flags happen to be set on the reflection.
    const flags = this.flags;
    return list.filter((x) => flags.indexOf(x) !== -1);
}

/**
 * Checks whether a relevant flag is set. If the flag is deemed
 * irrelevant, then the flag is considered to be unset.
 *
 * It is generally better to use this helper than accessing flags
 * directly, because some flags may be set and yet be irrelevant due
 * to the settings used when rendering with the theme.
 *
 * @param name The name of the flag to check.
 *
 * @returns Whether the flag is set.
 */
export function hasRelevantFlag(this: any, name: string,
                                options: any): boolean {
    return relevantFlags.call(this, options).indexOf(name) !== -1;
}
