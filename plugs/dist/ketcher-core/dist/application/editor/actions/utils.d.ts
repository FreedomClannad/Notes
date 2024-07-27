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
import { AtomAttributes, Bond, Vec2 } from "../../../domain/entities";
import { ReStruct } from "../../render";
declare type AtomAttributeName = keyof AtomAttributes;
export declare function atomGetAttr(restruct: ReStruct, aid: number, name: AtomAttributeName): any;
export declare function atomGetDegree(restruct: any, aid: any): any;
export declare function atomGetSGroups(restruct: any, aid: any): unknown[];
export declare function atomGetPos(restruct: any, id: any): any;
export declare function findStereoAtoms(struct: any, aids: number[] | undefined): number[];
export declare function structSelection(struct: any): {};
export declare function formatSelection(selection: any): any;
export declare function atomForNewBond(restruct: any, id: any, bond?: any): {
    atom: any;
    pos: Vec2;
};
export declare function getRelSgroupsBySelection(restruct: any, selectedAtoms: any): any;
export declare function isAttachmentBond({ begin, end }: Bond, selection: any): boolean;
export {};
