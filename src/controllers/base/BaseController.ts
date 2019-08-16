import * as Koa from 'koa';

export abstract class BaseController {
    protected ctx: Koa.Context;

    protected abstract execute(): Promise<void | any>;

    constructor(ctx: Koa.Context) {
        this.ctx = ctx;
        this.execute();
    }

    protected errorResponse(status: number, message: string) {
        this.ctx.status = status;
        this.ctx.body = {
            error: {
                status: status,
                message: message,
            },
        };
    }

    protected ok<T>(dto?: T) {
        if (!!dto) {
            this.ctx.body = { dto };
        } else {
            this.ctx.status = 200;
        }
    }

    protected fail(error: Error | string) {
        this.ctx.status = 500;
        this.ctx.body = {
            message: error.toString(),
        };
    }

    protected forbidden(message?: string) {
        this.ctx.status = 403;
        throw new Error(message ? message : 'Forbidden');
    }
}
