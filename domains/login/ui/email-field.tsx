import { useFormContext } from 'react-hook-form';

import { FieldError } from '@/shared/ui/field';
import { FormControl, FormField, FormItem, FormLabel } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';

export default function EmailField() {
  const { control, getFieldState } = useFormContext();
  const { error } = getFieldState('email');

  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem className="flex flex-col gap-2">
          <FormLabel>이메일</FormLabel>
          <FormControl>
            <Input {...field} placeholder="이메일을 입력해주세요." />
          </FormControl>
          {error && <FieldError>{error.message}</FieldError>}
        </FormItem>
      )}
    />
  );
}
