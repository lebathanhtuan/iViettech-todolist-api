import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Task from  "./task.js";
import _Type from  "./type.js";

export default function initModels(sequelize) {
  const Task = _Task.init(sequelize, DataTypes);
  const Type = _Type.init(sequelize, DataTypes);

  Task.belongsTo(Type, { as: "type", foreignKey: "typeId"});
  Type.hasMany(Task, { as: "tasks", foreignKey: "typeId"});

  return {
    Task,
    Type,
  };
}
