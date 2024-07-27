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
import { Atom, Bond, Vec2 } from "../../domain/entities";
import { ReStruct } from './restruct';
import Visel from './restruct/visel';
declare function tfx(v: any): string;
declare function relBox(box: any): {
    x: any;
    y: any;
    width: any;
    height: any;
};
/**
 * Finds intersection of a ray and a box and
 * Returns the shift magnitude to avoid it
 * @param p { Vec2 }
 * @param d { Vec2 }
 * @param bb { Box2Abs }
 */
declare function shiftRayBox(p: any, d: any, bb: any): number;
declare function calcCoordinates(aPoint: any, bPoint: any, lengthHyp: any): {
    pos1: null | {
        x: number;
        y: number;
    };
    pos2: null | {
        x: number;
        y: number;
    };
};
declare function getCIPValuePath({ paper, cipLabelPosition, atomOrBond, options }: {
    paper: any;
    cipLabelPosition: Vec2;
    atomOrBond: Atom | Bond;
    options: any;
}): {
    path: any;
    text: any;
    rectangle: any;
};
declare function drawCIPLabel({ atomOrBond, position, restruct, visel }: {
    atomOrBond: Bond | Atom;
    position: Vec2;
    restruct: ReStruct;
    visel: Visel;
}): {
    path: any;
    text: any;
    rectangle: any;
};
declare const util: {
    tfx: typeof tfx;
    relBox: typeof relBox;
    shiftRayBox: typeof shiftRayBox;
    calcCoordinates: typeof calcCoordinates;
    getCIPValuePath: typeof getCIPValuePath;
    drawCIPLabel: typeof drawCIPLabel;
};
export default util;
