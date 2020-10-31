# react-laravel-boilerplate

A simple docker environment for React and Laravel API.

### Backend

[こちらの記事を参考にさせていただきました。](https://qiita.com/ucan-lab/items/5fc1281cd8076c8ac9f4)

上記の記事の内容に加えて、phpmyadminのコンテナを追加しました。

#### Containers

```bash
├── app
├── web
├── db
└── pma
```

### Frontend

`create-react-app`でReactの開発環境を作成しました。

状態管理にはReact Hooksの`contexts`を使用しています。

#### Added Packages

- axios
- react-router-dom
- styled-components
- polished

## How to Install

### Backend

`.env`ファイルを`backend`ディレクトリ内に作成して、`.env.example`の内容をコピペします。

```bash
$ cd backend
$ composer install
```

### Frontend

```bash
$ cd frontend
$ yarn install
```

## How to Start

### Backend

```bash
$ docker-compose up
```

### Frontend

```bash
$ cd frontend
$ yarn start
```

### Migration

```bash
docker-compose exec app bash # appコンテナの中に入る
php artisan migrate:fresh --seed # マイグレーションとシーダーを実行
```

backend: http://127.0.0.1

frontend: http://127.0.0.1:3000

phpmyadmin: http://127.0.0.1:8080