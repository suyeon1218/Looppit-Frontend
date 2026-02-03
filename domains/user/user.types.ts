import { z } from 'zod';

export const USER_PROVIDERS = ['GOOGLE', 'KAKAO', 'NAVER', 'DEFAULT'];

export const userProfileSchema = z.object({
  id: z.number(),
  email: z.string(),
  nickname: z.string(),
  content: z.string(),
  imagePath: z.string(),
  provider: z.enum(USER_PROVIDERS),
});

export type UserProfile = z.infer<typeof userProfileSchema>;
export type UserProfileResponse = z.infer<typeof userProfileSchema>;
