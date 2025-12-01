---
visibility: human+ai
origin: assistant
---

# 코드 스타일 규칙

## 핵심

- 로딩·에러는 `QueryBoundary`, 비즈니스 로직은 hook, 데이터 분기는 매핑으로 처리
- WHAT 중심 선언적 UI, 조건 분기는 컴포넌트 밖으로 이동
- 가독성·일관성·의도 표현을 최우선

## 한도

- 파일 ≤ 250줄, 함수 ≤ 50줄, Cyclomatic Complexity ≤ 10

## 컴포넌트 템플릿

```typescript
// 1. Import (React → 외부 → shared → domains → 상대)
// 2. 타입
// 3. 상수
// 4. 컴포넌트
export const UserCard = ({ user }: UserProps) => {
  // State → Hooks → Handlers → Effects → JSX
};
```

## 함수 원칙

- Early return으로 예외 제거
- 유틸 함수는 `{feature}.utils.ts` 파일로 분리 (`naming-conventions.md` 참고)

## 선언적 패턴

- 로딩/에러 분기 대신 `QueryBoundary`와 뷰 컴포넌트를 조합
- 데이터 로딩·업데이트 hook을 두고 JSX는 UI 표현만 담당

## 체크리스트

- [ ] 컴포넌트에 `if (isLoading)` 또는 `if (error)` 조건문이 없는가? (QueryBoundary 사용)
- [ ] 데이터 fetching, 상태 업데이트 등 비즈니스 로직이 custom hook에 있는가?
- [ ] 로딩/에러 처리를 위해 `QueryBoundary` 컴포넌트를 사용하는가?
- [ ] 파일이 250줄 이하이고 함수가 50줄 이하인가?
- [ ] 유틸 함수 분리 및 상수 네이밍 규칙을 준수하는가? (`naming-conventions.md` 참고)
