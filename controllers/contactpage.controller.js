import filepath from "../public/filepath.js"
import path from "path"
const contactpage = (req , res) => {
    const __dirname = filepath()
    res.sendFile(path.join(__dirname , "html" , "contact.html"))
}
export default contactpage