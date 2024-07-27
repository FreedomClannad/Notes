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
import { AtomList, AtomListParams } from './atomList';
import { Point, Vec2 } from './vec2';
import { Pile } from './pile';
import { Struct } from './struct';
export declare function radicalElectrons(radical: any): 0 | 1 | 2;
export declare enum StereoLabel {
    Abs = "abs",
    And = "&",
    Or = "or"
}
declare enum CIP {
    S = "S",
    R = "R",
    s = "s",
    r = "r"
}
export interface AtomAttributes {
    stereoParity?: number;
    stereoLabel?: string | null;
    exactChangeFlag?: number;
    rxnFragmentType?: number;
    invRet?: number;
    aam?: number;
    hCount?: number;
    unsaturatedAtom?: number;
    substitutionCount?: number;
    ringBondCount?: number;
    explicitValence?: number;
    attpnt?: any;
    rglabel?: string | null;
    charge?: number;
    radical?: number;
    cip?: CIP | null;
    isotope?: number;
    alias?: string | null;
    pseudo?: string;
    atomList?: AtomListParams | null;
    label: string;
    fragment?: number;
    pp?: Point;
    implicitH?: number;
    implicitHCount?: number | null;
}
export declare class Atom {
    static PATTERN: {
        RADICAL: {
            NONE: number;
            SINGLET: number;
            DOUPLET: number;
            TRIPLET: number;
        };
        STEREO_PARITY: {
            NONE: number;
            ODD: number;
            EVEN: number;
            EITHER: number;
        };
    };
    static attrlist: {
        alias: null;
        label: string;
        isotope: number;
        radical: number;
        cip: null;
        charge: number;
        explicitValence: number;
        ringBondCount: number;
        substitutionCount: number;
        unsaturatedAtom: number;
        hCount: number;
        atomList: null;
        invRet: number;
        exactChangeFlag: number;
        rglabel: null;
        attpnt: null;
        aam: number;
        stereoLabel: null;
        stereoParity: number;
        implicitHCount: null;
    };
    label: string;
    fragment: number;
    atomList: AtomList | null;
    attpnt: any;
    isotope: number;
    hCount: number;
    radical: number;
    cip: CIP | null;
    charge: number;
    explicitValence: number;
    ringBondCount: number;
    unsaturatedAtom: number;
    substitutionCount: number;
    valence: number;
    implicitH: number;
    implicitHCount: number | null;
    pp: Vec2;
    neighbors: Array<number>;
    sgs: Pile<number>;
    badConn: boolean;
    alias: string | null;
    rglabel: string | null;
    aam: number;
    invRet: number;
    exactChangeFlag: number;
    rxnFragmentType: number;
    stereoLabel?: string | null;
    stereoParity: number;
    hasImplicitH?: boolean;
    pseudo: string;
    constructor(attributes: AtomAttributes);
    static getConnectedBondIds(struct: Struct, atomId: number): number[];
    static getAttrHash(atom: Atom): any;
    static attrGetDefault(attr: string): any;
    static isHeteroAtom(label: string): boolean;
    static isInAromatizedRing(struct: Struct, atomId: number): boolean;
    clone(fidMap: Map<number, number>): Atom;
    isQuery(): boolean;
    pureHydrogen(): boolean;
    isPlainCarbon(): boolean;
    isPseudo(): boolean;
    hasRxnProps(): boolean;
    calcValence(connectionCount: number): boolean;
    calcValenceMinusHyd(conn: number): number;
}
export {};
