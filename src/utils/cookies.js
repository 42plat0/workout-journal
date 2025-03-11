import jwt from "jsonwebtoken"

// Sign token
export const signToken = (id) => {
    const token = jwt.sign({id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_TOKEN_EXPIRES
    })

    return token;
}

// Update token cookie
export const setTokenCookie = (token, res) => {
    const cookieExpirationMs = process.env.JWT_COOKIE_EXPIRES * 24 * 3600 * 1000;

    const cookieOptions = {
        expires: new Date(
            Date.now() + cookieExpirationMs
        ),
        httpOnly: true,
    };

    // Set cookies - send through res
    res.cookie("jwt", token, cookieOptions);
}

// Clear jwt cookie
export const clearCookie = (tokenName, res) => 
    res.clearCookie(tokenName)

// Verify token
export const verifyToken = (token) => jwt.verify(token, JWT_SECRET_KEY);
