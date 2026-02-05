---
visibility: human+ai
origin: assistant
---

# 프로젝트 구조 규칙

## 개요

- FSD Lite 구조를 따르며 라우팅은 `app/`, 비즈니스 로직은 `domains/`, 공용 코드는 `shared/`에 둔다.
- 기능 단위로 파일을 묶고 도메인 외부에서 내부 구현에 의존하지 않도록 계층을 분리한다.

## 기본 구조

```text
app/              # 라우팅 및 layout
domains/          # 비즈니스 로직
  {feature}/
shared/           # 공용 코드
  api/
  ui/
  hooks/
  utils/
```

## Import

- 도메인 내부는 상대경로, 도메인 간/공용은 절대경로 사용 (`import-rules.md` 참고)

## 주의

- `app/`: 라우팅·layout만, 비즈니스 로직은 `domains/`
- `shared/`: 범용 코드만
- 도메인 간 직접 의존 금지, `shared/`를 통해 공유

## 체크리스트

- [ ] `app/` 디렉토리에 라우팅(`page.tsx`, `layout.tsx`)만 존재하고 비즈니스 로직은 없는가?
- [ ] `domains/` 디렉토리에 기능별 폴더(`{feature}/`)가 존재하는가?
- [ ] `shared/` 디렉토리에 공용 코드(`api/`, `ui/`, `hooks/`, `utils/`)가 존재하는가?
- [ ] 도메인 내부 import가 상대경로인가? (`import-rules.md` 참고)
- [ ] 도메인 간/공용 import가 절대경로인가? (`import-rules.md` 참고)
