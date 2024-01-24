graphql-rubyの速度検証
---

graphql ruby(gem)とrubyバージョン組み合わせによる、速度検証用リポジトリ

## 構成

![image](./assets/graphql-ruby.drawio.png)

## database作成

```bash
docker-compose exec app1 rails db:create
```

### テーブル構成

![image](./assets/image_table.png)

### DBデータ投入コマンド

```bash
mysql -u root -h localhost --protocol=tcp -ppassword graphql < db_data/authors.sql
mysql -u root -h localhost --protocol=tcp -ppassword graphql < db_data/posts.sql
```


## 負荷試験ツール

k6を使用

### インストール

```bash
brew install k6
```

### コマンド

```bash
k6 run k6/script.js --out csv=k6/output/result.csv
```

## 結果

| バージョン | 結果 |
|:--|:--|
| ruby: 2.7.8, graphql-ruby: 1.13.20 | ave: 466ms |
| ruby: 2.7.8, graphql-ruby: 2.2.5 | ave: 353ms |
| ruby: 3.1.4, graphql-ruby: 2.2.5 | ave: 354ms |
| ruby: 3.1.4, REST API | ave: 196ms |
