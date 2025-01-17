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
import { Vec2 } from 'ketcher-core';
import Editor from '../Editor';
declare class RotateTool {
    editor: Editor;
    dragCtx: any;
    isNotActiveTool: boolean | undefined;
    constructor(editor: any, dir: any, isNotActiveTool?: boolean);
    mousedown(event: any, handleCenter?: Vec2, center?: Vec2): boolean;
    /**
     * @returns `[center, visibleAtoms]`,
     * `visibleAtoms` = selected atoms
     *                - atoms in contracted functional groups
     *                + functional groups's attachment atoms
     */
    getCenter(editor: Editor): readonly [Vec2 | undefined, number[]];
    mousemove(event: any): boolean;
    mouseup(): boolean;
    cancel(): void;
    mouseleave(): void;
}
export default RotateTool;
