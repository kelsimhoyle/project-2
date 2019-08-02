module.exports = function (sequelize, DataTypes) {
    var Distillery = sequelize.define("Distillery", {
        
        distillery: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Distillery.associate = function (models) {
        Distillery.hasMany(models.Alcohol, { 
            onDelete: "CASCADE" 
        });
    }
    return Distillery;
};



