---
visibility: human+ai
origin: assistant
---

# 상태관리 전략

## 도구 선택

| 상태 유형    | 사례                | 도구        |
| ------------ | ------------------- | ----------- |
| Server State | API 데이터 캐싱     | React Query |
| Shared State | 로그인, 필터, 모달  | Jotai       |
| Derivable    | 계산된 파생 값      | Jotai       |
| Environment  | Router, Theme, I18n | Context     |
| Local UI     | 단일 컴포넌트 상태  | useState    |

## Jotai

- `shared/store` 또는 `domains/{feature}/store`에 atom 정의
- 파생 값은 read-only atom, 액션은 write atom으로 구성
- 도메인별 atom 묶음을 export해 의존성 명확히 유지

## React Query

- 모든 서버 상태는 queryKey 헬퍼와 함께 `useQuery/useMutation`으로 관리
- Mutation 이후 invalidate 또는 optimistic update 처리

## Context

- Router/Theme/I18n처럼 변경 빈도가 낮은 환경 값만 저장
- 자주 변하는 값은 Jotai로 이동

## 안티패턴

- 변경이 잦은 값을 Context로 전달, React Query를 일반 상태 저장소처럼 남용, Props drilling 3단계 이상

## 체크리스트

- [ ] API 데이터 캐싱이 React Query로 관리되는가?
- [ ] 공유 상태가 Jotai atom으로 관리되는가?
- [ ] 파생 값이 Jotai read-only atom으로 정의되어 있는가?
- [ ] 환경 값만 Context로 관리되는가?
- [ ] 단일 컴포넌트 내부 상태는 `useState`로 관리되는가?
- [ ] 변경이 잦은 값을 Context로 전달하지 않았는가?
- [ ] React Query를 일반 상태 저장소처럼 사용하지 않았는가?
- [ ] Props drilling이 3단계 이상 이어지지 않았는가?
