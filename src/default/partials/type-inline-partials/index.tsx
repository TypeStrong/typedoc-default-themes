import { component as array } from "./array";
import { component as conditional } from "./conditional";
import { component as indexedAccess } from "./indexedAccess";
import { component as inferred } from "./inferred";
import { component as intersection } from "./intersection";
import { component as intrinsic } from "./intrinsic";
import { component as literal } from "./literal";
import { component as mapped } from "./mapped";
import { component as namedTupleMember } from "./named-tuple-member";
import { component as optional } from "./optional";
import { component as predicate } from "./predicate";
import { component as query } from "./query";
import { component as reference } from "./reference";
import { component as reflection } from "./reflection";
import { component as rest } from "./rest";
import { component as templateLiteral } from "./template-literal";
import { component as tuple } from "./tuple";
import { component as typeOperator } from "./typeOperator";
import { component as typeParameter } from "./typeParameter";
import { component as union } from "./union";
import { component as unknown } from "./unknown";

export const typePartials = {
    array,
    conditional,
    indexedAccess,
    inferred,
    intersection,
    intrinsic,
    literal,
    mapped,
    'named-tuple-member': namedTupleMember,
    optional,
    predicate,
    query,
    reference,
    reflection,
    rest,
    'template-literal': templateLiteral,
    tuple,
    typeOperator,
    typeParameter,
    union,
    unknown,
};
