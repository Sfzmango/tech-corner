const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        createdAt: "created_date",
        updatedAt: "updated_date",
        freezeTableName: true,
        underscored: true,
        modelName: "post",
    }
);

module.exports = Post;