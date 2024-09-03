import filepath from "../public/filepath.js"
import path from "path"
const aboutpage = (req , res) => {
    const __dirname = filepath()
    res.sendFile(path.join(__dirname , "html" , "about.html"))
}
export default aboutpage