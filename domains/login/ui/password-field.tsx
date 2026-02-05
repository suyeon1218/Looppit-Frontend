import { useFormContext } from 'react-hook-form';

import { FieldError } from '@/shared/ui/field';
import { FormControl, FormField, FormItem, FormLabel } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';

export default function PasswordField() {
  const { control, formState } = useFormContext();
  const error = formState.errors.password;

  return (
    <FormField
      control={control}
      name="password"
      render={({ field }) => (
        <FormItem className="flex flex-col gap-2">
          <FormLabel>비밀번호</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </FormControl>
          <FieldError errors={error ? [error] : undefined} />
        </FormItem>
      )}
    />
  );
}
