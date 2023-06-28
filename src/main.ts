import { App } from "./Infra/Http/App.ts";
import { bootstrap } from "inject";

const app = bootstrap(App);
app.start(8000);
