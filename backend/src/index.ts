import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { cors } from 'hono/cors';

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
	},
}>();

app.use('/*',cors())

app.post('/api/submission', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();

	const submission = await prisma.submission.create({
		data: {
			username: body.username,
			language: body.language,
			input: body.input,
			code: body.code,
		}
	});

	if (!submission) {
		c.status(403);
		return c.json({ error: "something went wrong" });
	}

	return c.json({ submission });
})

app.get("/api/all/submission",async (c) => {

	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const submission = await prisma.submission.findMany();

	if (!submission) {
		c.status(403);
		return c.json({ error: "something went wrong" });
	}

	return c.json({ submission });
})

export default app
