import { URL } from "./request";

export const imgFile = img => img && URL(`photos/${img}/file`);
