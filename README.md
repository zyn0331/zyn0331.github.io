# 윤형덕 ♥ 장예나 모바일 청첩장

2026년 8월 8일 토요일 오후 5시 · 양재 엘블레스 B1 (서울특별시 서초구 강남대로 213 지하1층)

- 공개 주소: https://zyn0331.github.io
- 템플릿 출처: [heejin-hwang/mobile-wedding-invitation](https://github.com/heejin-hwang/mobile-wedding-invitation) (MIT License)
- 기술 스택: React + TypeScript + Vite + Emotion
- 배포: `main` 브랜치에 push 하면 GitHub Actions(`.github/workflows/deploy.yml`)가 빌드해서 GitHub Pages에 자동 배포

## 로컬에서 미리보기

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ 생성 (배포 전 확인용)
```

## 내용 수정하는 곳

| 무엇 | 파일 |
| --- | --- |
| 신랑·신부 이름, 부모님, 인사말, 예식 일시·장소, 계좌, 오시는 길, 지도 좌표 | `src/data.json` |
| 브라우저 탭 제목 / 카카오톡 공유 미리보기(og 태그) | `index.html` |
| 갤러리 사진 (12장) | `src/assets/images/01.jpg` ~ `12.jpg` |
| 메인 상단 사진 | `src/assets/images/05.jpg` (또는 `src/layout/Main/Main.tsx` 의 import 경로) |
| 공유 썸네일 / 파비콘 | `public/thumbnail.jpg`, `public/favicon.png` |
| 카카오맵 API 키 (로컬) | `.env` 의 `VITE_APP_KAKAOMAP_JAVASCRIPT_KEY` |
| 카카오맵 API 키 (배포) | 레포 Settings → Secrets and variables → Actions → `VITE_APP_KAKAOMAP_JAVASCRIPT_KEY` |

## TODO (확정 후 수정)

- [x] 예식 일시·장소 입력 (2026.08.08 토 오후 5시, 양재 엘블레스 B1) · 예식장 ☎ 02-526-0300
- [x] 축의금 계좌번호 입력 (신랑 윤형덕/父 윤용원/母 고희숙, 신부 장예나) — 필요시 `kakaopayAccount`·`tossAccount`에 카카오페이/토스 링크 추가 가능
- [ ] 지도 좌표 `lat`/`lon`, 네이버·카카오 지도 링크 (`src/data.json` 의 `mapInfo`)
- [ ] 오시는 길 — 지하철 출구/도보 시간, 주차 안내 (`src/data.json` 의 `locationInfo`)
- [ ] 사진 교체 (`src/assets/images/`, `public/thumbnail.jpg`)
- [ ] (선택) 카카오 개발자 JavaScript 키 발급 후 등록 — 지도 표시용
- [ ] (선택) 방명록을 실제로 저장하려면 Firebase Realtime Database 연결 (`src/firebase.ts`, `src/layout/Guestbook/CommentForm.tsx`)
