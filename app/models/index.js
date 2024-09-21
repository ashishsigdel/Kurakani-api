import { Sequelize, DataTypes, Op, sequelize } from "../database/dbConfig.js";
import associations from "./associations/index.js";

import User from "./user.model.js";
import RefreshToken from "./refreshToken.model.js";

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.DataTypes = DataTypes;
db.Op = Op;

db.User = User(sequelize, Sequelize, DataTypes);
db.RefreshToken = RefreshToken(sequelize, Sequelize, DataTypes);

associations(db);
export default db;
