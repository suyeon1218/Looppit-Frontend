# CLAUDE.md

Claude Code 프로젝트 가이드

## Process

1. Rules 적용 여부 확인
2. 사용자 요청 해석
3. 규칙 기반 작업 수행
4. 최종 검증

## 상세 문서

기본적으로 이 파일만 읽고, 필요 시 관련 문서 참조:

| 문서                    | 참조 시점                   |
| ----------------------- | --------------------------- |
| `code-style.md`         | 코드 작성/리팩토링 (최우선) |
| `api-data-handling.md`  | API 연동                    |
| `state-management.md`   | 상태 관리                   |
| `project-structure.md`  | 프로젝트 구조               |
| `naming-conventions.md` | 네이밍                      |
| `git-workflow.md`       | 커밋/PR                     |

## ⚠️ Rules (최우선)

### Rule #1: 프로젝트 구조

- 도메인 기반(FSD Lite) 구조
- `app/`는 라우팅만, 비즈니스 로직은 `domains/`
- 공통 코드는 `shared/`
- 상세: `.aiassistant/rules/project-structure.md`

### Rule #2: 네이밍

- 폴더/컴포넌트: `kebab-case`
- 함수/변수: `camelCase`
- 상세: `.aiassistant/rules/naming-conventions.md`

### Rule #3: 선언적 코드 (최우선)

- 복잡한 제어 흐름 숨기고 의도에 집중
- 컴포넌트에 `if (isLoading)` 금지
- 비즈니스 로직은 hooks에 캡슐화
- switch문 대신 객체 매핑
- 상세: `.aiassistant/rules/code-style.md`

### Rule #4: 상태관리

- API 데이터: React Query
- 공유 상태: Jotai
- 환경 설정: Context
- 상세: `.aiassistant/rules/state-management.md`

### Rule #5: API 처리

- Axios 사용
- Zod 타입 검증
- React Query hooks
- 상세: `.aiassistant/rules/api-data-handling.md`

### Rule #6: Git

- 커밋: `<type>(<scope>): <message>`
- 브랜치: `feature/*`, `hotfix/*`
- PR: 2명 이상 승인
- 상세: `.aiassistant/rules/git-workflow.md`

## 프로젝트 개요

- 스택: Next.js 16, TypeScript, React 19, Tailwind CSS 4
- 아키텍처: 서버 컴포넌트 기반 App Router
- 구조: 도메인 기반 (FSD Lite)

## 개발 명령어

```bash
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 실행
```
