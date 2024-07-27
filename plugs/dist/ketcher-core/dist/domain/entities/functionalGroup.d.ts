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
import { ReSGroup } from "../../application/render";
import { Atom } from './atom';
import { Bond } from './bond';
import { Pool } from './pool';
import { SGroup } from './sgroup';
import { Struct } from './struct';
export declare class FunctionalGroup {
    #private;
    constructor(sgroup: SGroup);
    get name(): string;
    get relatedSGroupId(): number;
    get isExpanded(): boolean;
    get relatedSGroup(): SGroup;
    static isFunctionalGroup(sgroup: any): boolean;
    static getFunctionalGroupByName(searchName: string): Struct | null;
    static atomsInFunctionalGroup(functionalGroups: any, atom: any): number | null;
    static bondsInFunctionalGroup(molecule: any, functionalGroups: any, bond: any): number | null;
    static findFunctionalGroupByAtom(functionalGroups: Pool<FunctionalGroup>, atomId: number): number | null;
    static findFunctionalGroupByAtom(functionalGroups: Pool<FunctionalGroup>, atomId: number, isFunctionalGroupReturned: true): FunctionalGroup | null;
    static findFunctionalGroupByBond(molecule: Struct, functionalGroups: Pool<FunctionalGroup>, bondId: number | null): number | null;
    static findFunctionalGroupByBond(molecule: Struct, functionalGroups: Pool<FunctionalGroup>, bondId: number | null, isFunctionalGroupReturned: true): FunctionalGroup | null;
    static findFunctionalGroupBySGroup(functionalGroups: Pool<FunctionalGroup>, sGroup?: SGroup): FunctionalGroup | undefined;
    static clone(functionalGroup: FunctionalGroup): FunctionalGroup;
    static isAttachmentBond(sgroup: any, { begin, end }: {
        begin: any;
        end: any;
    }): any;
    static isAttachedSGroup(sgroup: any, molecule: any): boolean;
    /**
     * This function determines, if an atom is used for attachment to other structure.
     * For example, having sgroup CF3, which looks like
     *              F
     *              |
     *            F-C-F
     *              |
     *         other struct
     * C – is an attachment point
     */
    static isAttachmentPointAtom(atomId: number, molecule: Struct): boolean;
    static getAttachmentPointCount(sGroup: any, molecule: any): number;
    static isFirstAtomInFunctionalGroup(sgroups: any, aid: any): boolean;
    static isAtomInContractedFunctionalGroup(atom: Atom, sgroups: any, functionalGroups: any, sgroupsFromReStruct: boolean): boolean;
    static isBondInContractedFunctionalGroup(bond: Bond, sGroups: Map<number, ReSGroup> | Pool<SGroup>, functionalGroups: Pool<FunctionalGroup>): boolean;
    static isContractedFunctionalGroup(sgroupId: any, functionalGroups: any): boolean;
}
