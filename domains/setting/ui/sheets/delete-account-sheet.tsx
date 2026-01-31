import { SheetComponentProps } from '@/shared/types';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from '@/shared/ui/drawer';

interface DeleteAccountSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeleteAccountSheet({
  props,
}: SheetComponentProps<DeleteAccountSheetProps>) {
  const { open, onOpenChange } = props;

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-card rounded-t-3xl p-6">
        <DrawerHeader>
          <DrawerTitle>회원탈퇴</DrawerTitle>
          <DrawerDescription>
            탈퇴하면 모든 습관과 데이터가 사라지고 되돌릴 수 없어요.
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
