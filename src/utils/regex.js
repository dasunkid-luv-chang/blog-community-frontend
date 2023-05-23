export const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

export const fullnameRegex = /^(?=.{1,50}$)[A-Za-z]+(?: [A-Za-z]+)+$/gm
export const usernameRegex = /^(?=.*[A-Za-z])[A-Za-z0-9]{6,15}$/gm

export const emailRegex =
    /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm
