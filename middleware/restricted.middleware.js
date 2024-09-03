export default function restrictWorkingHours(req, res, next) {
    const now = new Date();
    const dayOfWeek = now.getDay(); 
    const hourOfDay = now.getHours(); 

    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
        next(); // Allow access
    } else {
        res.status(403).send('Access is allowed only during working hours (Monday to Friday, from 9 AM to 5 PM).');
    }
}

