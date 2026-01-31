import { atom } from 'jotai';

import { SETTING_SHEETS_COMPONENTS } from '../ui/sheets/setting-sheets';

type SheetPropsMap = {
  [K in keyof typeof SETTING_SHEETS_COMPONENTS]: React.ComponentProps<
    (typeof SETTING_SHEETS_COMPONENTS)[K]
  >['props'];
};

type SheetProps = {
  [K in keyof SheetPropsMap]: {
    type: K;
    props: SheetPropsMap[K];
  };
}[keyof SheetPropsMap];

export const sheetStateAtom = atom<SheetProps | null>(null);

export const openSheetAtom = atom(null, (get, set, sheet: SheetProps) => {
  set(sheetStateAtom, sheet);
});

export const closeSheetAtom = atom(null, (get, set) => {
  set(sheetStateAtom, null);
});
