import { App } from "./Infra/Http/App.ts";

const app = App.NewInstance();
app.start(8000);
