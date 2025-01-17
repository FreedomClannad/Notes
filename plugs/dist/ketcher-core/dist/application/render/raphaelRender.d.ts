export function Render(clientArea: any, opt: any): void;
export class Render {
    constructor(clientArea: any, opt: any);
    userOpts: any;
    clientArea: any;
    paper: any;
    sz: Vec2;
    ctab: ReStruct;
    options: any;
    updateOptions(opts: any): any;
    selectionPolygon(r: any): any;
    selectionLine(p0: any, p1: any): any;
    selectionRectangle(p0: any, p1: any): any;
    view2obj(p: any, isRelative: any): Vec2;
    obj2view(v: any, isRelative: any): Vec2;
    scrollPos(): Vec2;
    page2obj(event: any): Vec2;
    setPaperSize(sz: any): void;
    setOffset(newoffset: any): void;
    setZoom(zoom: any): void;
    setScrollOffset(x: any, y: any): void;
    setScale(z: any): void;
    setViewBox(z: any): void;
    setMolecule(ctab: any): void;
    update(force?: boolean, viewSz?: null, options?: {
        resizeCanvas: boolean;
    }): void;
    oldCb: Box2Abs | undefined;
    oldBb: Box2Abs | undefined;
}
import { Vec2 } from "../../domain/entities/vec2";
import { ReStruct } from "./restruct";
import { Box2Abs } from "../../domain/entities/box2Abs";
