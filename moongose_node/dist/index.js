"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./database/models/user"));
const profile_config_1 = __importDefault(require("./database/models/profile_config"));
const follow_1 = __importDefault(require("./database/models/follow"));
const post_1 = __importDefault(require("./database/models/post"));
const savedpost_1 = __importDefault(require("./database/models/savedpost"));
const action_1 = __importDefault(require("./database/models/action"));
const app = (0, express_1.default)();
const PORT = 3000;
// Connect to MongoDB using Mongoose
mongoose_1.default.connect('mongodb://localhost:27017/instagram', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// Your other app configurations and routes go here
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    user_1.default;
    profile_config_1.default;
    follow_1.default;
    post_1.default;
    savedpost_1.default;
    action_1.default;
});
//# sourceMappingURL=index.js.map