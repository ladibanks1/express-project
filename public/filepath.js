import path from "path";
import url from "url";

const filepath = () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return __dirname
};
export default filepath
