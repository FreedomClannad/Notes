import { Atom } from 'ketcher-core';
export declare function isAtomsArray(selectedElements: Atom | Atom[]): boolean;
export declare function updateSelectedAtoms({ atoms, changeAtomPromise, editor }: {
    atoms: number[];
    editor: any;
    changeAtomPromise: Promise<Atom>;
}): void;
