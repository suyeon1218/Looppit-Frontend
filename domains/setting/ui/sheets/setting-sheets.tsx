import { useAtomValue, useSetAtom } from 'jotai';

import { DeleteAccountSheet } from './delete-account-sheet';
import { SETTING_TYPE } from '../../constants';
import { closeSheetAtom, sheetStateAtom } from '../../store';

export const SETTING_SHEETS_COMPONENTS = {
  [SETTING_TYPE.DELETE_ACCOUNT]: DeleteAccountSheet,
} as const;

export const SettingSheets = () => {
  const sheetState = useAtomValue(sheetStateAtom);
  const closeSheet = useSetAtom(closeSheetAtom);

  if (!sheetState) {
    return null;
  }

  const Component = SETTING_SHEETS_COMPONENTS[
    sheetState.type
  ] as React.ComponentType<{
    props: typeof sheetState.props;
    onClose: () => void;
  }>;

  return <Component props={sheetState.props} onClose={closeSheet} />;
};
