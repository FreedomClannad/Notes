/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/
import { FunctionalGroup, Struct } from 'ketcher-core';
import Editor from '../Editor';
declare type MergeItems = Record<string, Map<unknown, unknown>> | null;
declare class TemplateTool {
    editor: Editor;
    mode: any;
    template: any;
    findItems: Array<string>;
    mergeItems: MergeItems;
    dragCtx: any;
    targetGroupsIds: Array<number>;
    isSaltOrSolvent: boolean;
    event: Event | undefined;
    constructor(editor: Editor, tmpl: any);
    get struct(): Struct;
    get functionalGroups(): import("ketcher-core").Pool<FunctionalGroup>;
    get isModeFunctionalGroup(): boolean;
    get closestItem(): any;
    get isNeedToShowRemoveAbbreviationPopup(): boolean;
    findKeyOfRelatedGroupId(clickedClosestItemId: number): number;
    showRemoveAbbreviationPopup(): Promise<void>;
    mousedown(event: MouseEvent): Promise<void>;
    mousemove(event: any): boolean;
    mouseup(event: any): boolean;
    cancel(e: any): void;
    mouseleave(e: any): void;
}
export default TemplateTool;
