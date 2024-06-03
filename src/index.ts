export default {
	async scheduled(event: ScheduledEvent, env: Env): Promise<void> {
		const resp = await fetch(`https://developer.lge.com/secure/ResetDevModeSession.dev?sessionToken=${env.SESSION_TOKEN}`);
		const wasSuccessful = resp.ok ? 'success' : 'fail';

		console.log(`trigger fired at ${event.cron}: ${wasSuccessful}`);
	},
};
