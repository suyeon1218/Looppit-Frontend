import { HabitStreakCard, UserGreeting } from '@/domains/home/ui';

export const HomeEmpty = () => {
  return (
    <div className="pt-9 px-5 min-h-screen flex flex-col gap-5">
      <UserGreeting
        name="Alex"
        profileImage="https://picsum.photos/seed/alex/200/200"
      />
      <HabitStreakCard />
      <div className="text-secondary">투두가 없습니다.</div>
    </div>
  );
};
