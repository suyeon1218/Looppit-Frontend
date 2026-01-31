import { useRouter } from 'next/navigation';

import { Button } from '@/shared/ui/button';

import { AccountCardItem } from '../setting-card-item';
import { SettingHeader } from '../setting-header';

export function AccountScreen() {
  const router = useRouter();
  return (
    <div>
      <SettingHeader title="계정 관리" href="/setting" />
      <div className="px-5 pt-6 py-6 flex flex-col gap-4">
        <AccountCardItem
          label="프로필 수정"
          variant="outline"
          onClick={() => router.push('/profile')}
        >
          <AccountCardItem.LeftIcon
            className="bg-primary/10"
            iconClassName="fill-primary"
            icon="ic_edit"
          />
        </AccountCardItem>
        <AccountCardItem label="로그아웃" variant="outline">
          <AccountCardItem.LeftIcon
            className="bg-destructive/10"
            iconClassName="fill-destructive"
            icon="ic_logout"
          />
        </AccountCardItem>
        <Button
          variant="ghost"
          className="typography-caption-medium text-secondary/40 underline underline-offset-4 hover:text-secondary/60 transition-colors py-2 px-4"
        >
          회원탈퇴
        </Button>
      </div>
    </div>
  );
}
