# CRUD 실습 (간단한 SNS 기능)

## Node 기초
참조 : [Practice_Node.js](https://github.com/SeongChan-An/Practice_Node.js)  
README.md, Note.md, Note2.md, Note3.md 참조

## 환경설정 
링크 참조 : [Note.md](./Note.md)

## 주요기능
- 로그인/로그아웃
- 게시물저장, 수정, 삭제
- 사진 업로드
- 실시간 채팅
  - websocket을 이용

### **-게시물 저장, 수정, 삭제**
이용되는 기술
- mongoose
- multer package
- multer-s3
- aws-sdk (aws 접근)

>**-app.js file**  
indexRouter 를 통해 기본경로("/")에서 index.js 파일을 가리키도록 연결시켜준다.

> **-routes 폴더**  
routes 폴더에서 index.js 파일에서 항목(게시물, 로그인)에 따라 파일을 연결시켜준다.  
각 폴더내의 index 파일들에서 각 카테고리의 상세기능에 대해 컨트롤러와 연결시켜준다.

> **-Controller**  
기본적으로 어떤 값, 세부적인 동작에 대한 코드를 이곳에서 작성한다.

### **- 사진 저장**
AWS S3를 이용하여 bucket 공간에 사진을 관리할 수 있도록 하였다.  
multer.js 파일 참고




