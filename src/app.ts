import { EnvironmentVariables } from '@config';
import { AppRoutes, Server } from '@presentation';

(async () => {
  main();
})();

async function main() {
  const server = new Server({
    port: EnvironmentVariables.PORT,
    routes: AppRoutes.routes,
  });

  server.start();
}
