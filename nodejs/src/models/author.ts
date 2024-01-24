import * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import Post from './post'
import { sequelize } from '../infrastructure/sequelize';

class Author extends Model {
  id!: number;
  first_name?: string;
  last_name?: string;
  email!: string;
  birthday?: string;
  add?: Date;
  created_at!: Date;
  updated_at!: Date;

  // authors hasMany posts via author_id
  public readonly posts!: Post[];
  public static associations: {
    posts: Sequelize.Association<Author, Post>
  }
}

Author.init({
  id: {
    autoIncrement: true,
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  last_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  add: {
    type: DataTypes.DATE,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
}, {
  sequelize,
  tableName: 'authors',
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
  ]
});

Author.hasMany(Post, {
  sourceKey: 'id',
  foreignKey: 'author_id',
  as: 'posts',
});

export default Author;