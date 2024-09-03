import filepath from "../public/filepath.js"
import path from "path"
const homepage = (req , res) => {
    const __dirname = filepath()
    res.sendFile(path.join(__dirname , "html" , "homepage.html"))
}
export default homepage