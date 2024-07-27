import { Vec2 } from "../../domain/entities";
export declare function getDirections(event: any): {
    isMovingRight: boolean;
    isMovingLeft: boolean;
    isMovingTop: boolean;
    isMovingBottom: boolean;
};
export declare function isCloseToEdgeOfScreen(event: any): {
    isCloseToLeftEdgeOfScreen: boolean;
    isCloseToTopEdgeOfScreen: boolean;
    isCloseToRightEdgeOfScreen: boolean;
    isCloseToBottomEdgeOfScreen: boolean;
};
export declare function isCloseToEdgeOfCanvas(event: any, canvasSize: any): {
    isCloseToLeftEdgeOfCanvas: boolean;
    isCloseToTopEdgeOfCanvas: boolean;
    isCloseToRightEdgeOfCanvas: boolean;
    isCloseToBottomEdgeOfCanvas: boolean;
};
export declare function calculateCanvasExtension(clientArea: any, currentCanvasSize: any, extensionVector: any): Vec2;
export declare function shiftAndExtendCanvasByVector(vector: Vec2, render: any): void;
export declare function scrollByVector(vector: Vec2, render: any): void;
