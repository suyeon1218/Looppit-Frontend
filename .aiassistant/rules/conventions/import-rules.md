---
visibility: human+ai
origin: assistant
---

# Import 규칙

import 방식은 도메인 경계(domain boundary) 기준으로 결정한다.

- 같은 도메인 내부 → 상대경로
- 다른 도메인 / shared / global 레이어 → 절대경로

| 상황                | 방식            | 예시                      |
| ------------------- | --------------- | ------------------------- |
| 같은 도메인 내부    | 상대경로        | `../hooks/useLogin`       |
| 다른 도메인 접근    | 절대경로        | `@/domains/user/services` |
| Shared / 공용 Layer | 절대경로        | `@/shared/ui`             |
| Barrel 제공 시      | entrypoint 사용 | `@/shared/hooks`          |

## 예시

```typescript
// 같은 도메인 내부
import { useLogin } from "../hooks/use-login";

// 다른 도메인 / Shared
import { Button } from "@/shared/ui";
```

## 체크리스트

- [ ] 같은 도메인 내부 import가 상대경로를 사용하는가?
- [ ] 다른 도메인/Shared 레이어 접근이 절대경로(`@/`)를 사용하는가?
