
# 🔍 나를 [nalul] - Server
'나를' 나에게 중독시키다. 
 매일 매일 당신의 9가지 조각을 찍어 온전한 나를 기록하고 다각도에서 느껴보세요. 



<br/>

## 🖥 Code convention


- **git commit message rule** 
```
[Setting] 세팅

[Add] 추가

[Delete] 삭제

[Update] 업데이트

ex) "[Setting] gitignore 설정"
```

<br />

## 🗂 API 명세서

[api 링크](https://github.com/Soptkathon-27th-nalul/nalul-Server/wiki)

## 🔗 sequelize Model

```javascript
db.User = require('./user')(sequelize,Sequelize);
db.Post = require('./post')(sequelize,Sequelize);
db.Class = require('./class')(sequelize,Sequelize);
db.Question = require('./question')(sequelize,Sequelize);

/* 1 : N   User : Post */
db.User.hasMany(db.Post, { onDelete: 'cascade' });
db.Post.belongsTo(db.User);

/* 1 : N   Class : Question */
db.Class.hasMany(db.Question);
db.Question.belongsTo(db.Class);

/* 1 : N   Question : Post */
db.Question.hasMany(db.Post);
db.Post.belongsTo(db.Question);

/* 1 : N   Class : Post */
db.Class.hasMany(db.Post);
db.Post.belongsTo(db.Class);
```

## 📋 ERD

![image](https://user-images.githubusercontent.com/43840561/99886066-f604ab00-2c7c-11eb-96a4-f4e9f312a653.png)



## 📌 기능 소개
 **Service key Feature**
  * Exploration - 쉽고, 빠르게 원하는 장소를 탐색

  * Discovery - 가보고 싶은 장소를 발견할 수 있어야함

  * Interaction - 상호작용, 소통할 수 있는 공간


[예시]
 
- 이수진 - Write : 질문, 게시글 작성

- 신지혜 - Splash : 회원가입 , Detail : 사진리스트

<br />



## ⚙️ 개발 환경 및 사용한 라이브러리


- [Node.js](https://nodejs.org/ko/) : 런타임 환경
- [Express](https://expressjs.com/ko/) : NodeJs Framework
- [NPM](https://www.npmjs.com/) : NodeJS package manager
- [PM2](https://pm2.io/) : NodeJS process manager


<br />

<br />

