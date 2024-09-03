import filepath from "../public/filepath.js"
import path from "path"
const menupage = (req , res) => {
    const __dirname = filepath()
    res.sendFile(path.join(__dirname , "html" , "menu.html"))
}
export default menupage