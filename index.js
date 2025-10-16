import { get_encoding } from "tiktoken";

const encoding = get_encoding("cl100k_base");
console.log(encoding.encode("Hello, world!"));
z 