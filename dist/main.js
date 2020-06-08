"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config = require("config");
const helmet = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const serverConfig = config.get('server');
    app.use(helmet());
    await app.listen(process.env.PORT || serverConfig.port);
}
bootstrap();
//# sourceMappingURL=main.js.map