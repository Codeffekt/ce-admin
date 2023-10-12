import { CeFormRouteParams, ICeFormRouteResolver } from "@codeffekt/ce-core";
import { FormInstance, FormUtils, IndexType } from "@codeffekt/ce-core-data";

export class FormRootRouteResolver implements ICeFormRouteResolver {
    resolve(formField: string, formId: IndexType, formInstance: FormInstance): CeFormRouteParams {
        const block = FormUtils.getBlockFromField(formInstance, formField);
        if(block && block.root) {
            return { route: ['/formsroot/edit', block.root] };
        }
        return { route: ['/formsroot', formId] };
    }
}