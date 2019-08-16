import Koa from 'koa';

class App {
    public loadServer(): void {
        const app = new Koa();
        console.info(`Starting server on http://localhost:${3000}`);
        app.listen(3000);
    }
}
export default new App();
