import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../infrastructure/sequelize';

class Post extends Model {
  id!: number;
  author_id?: number;
  title!: string;
  description?: string;
  content?: string;
  date?: string;
  created_at!: Date;
  updated_at!: Date;
}

Post.init({
  id: {
    autoIncrement: true,
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  author_id: {
    type: DataTypes.BIGINT,
    allowNull: true,
    references: {
      model: 'authors',
      key: 'id'
    }
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(500),
    allowNull: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'posts',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
    {
      name: "index_posts_on_author_id",
      using: "BTREE",
      fields: [
        { name: "author_id" },
      ]
    },
  ]
});

export default Post;