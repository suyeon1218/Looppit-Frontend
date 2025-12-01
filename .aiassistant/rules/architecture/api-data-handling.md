---
visibility: human+ai
origin: assistant
---

# API & 데이터 처리 규칙

## 스택·구조

- Axios + Zod + React Query + 에러 매핑
- 도메인별로 `.api.ts`, `.schema.ts`, `.hooks.ts`, `.types.ts` 분리

## API 함수

- 모든 요청은 `apiClient` 사용
- 응답 즉시 Zod `parse`, 반환 타입은 `z.infer`

## React Query

- `*Keys` 객체로 queryKey 생성
- `useQuery/useMutation`은 hook 파일에 정의
- Mutation 이후 invalidate 또는 optimistic 업데이트 (`state-management.md` 참고)

## 에러 처리

- 상태코드 → 사용자 메시지 매핑 객체 유지
- AxiosError 여부 확인 후 기본 메시지 제공
- 에러 매핑 상수는 `UPPER_SNAKE_CASE` 형식 사용

## 체크리스트

- [ ] 도메인별로 `.api.ts`, `.schema.ts`, `.hooks.ts`, `.types.ts` 파일이 분리되어 있는가?
- [ ] API 응답이 Zod schema로 `parse`되어 런타임 검증이 완료되었는가?
- [ ] Query key가 `{feature}Keys` 객체로 일관되게 관리되는가?
- [ ] Mutation 성공 후 `invalidateQueries` 또는 optimistic update가 적용되었는가?
- [ ] 에러 매핑 객체의 상수들이 `UPPER_SNAKE_CASE` 형식인가? (`naming-conventions.md` 참고)
