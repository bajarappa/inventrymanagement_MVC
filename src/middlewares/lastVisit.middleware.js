export const setLastVisit = (req, res, next) => {
    // 1. If cookie is set, then add a local variable with last visit time data
    if (req.cookies.lastVisit) {
        // sending the variable to the server via res
        res.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleString();
    }
    // If the cookie is not set it will update the last visit
    res.cookie("lastVisit", new Date().toISOString(), {
        maxAge: 2 * 24 * 60 * 60 * 1000,
    });
    next();
};
