import filepath from "../public/filepath.js"
import path from "path"
const navbar = (req , res ) => {
    const __dirname = filepath()
    res.sendFile(path.join(__dirname , "html" , "navbar.html"))
}
export default navbar