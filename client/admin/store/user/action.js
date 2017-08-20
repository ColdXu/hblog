import * as apiUser from '../../../common/api/user'

export function login(params) {
    return (dispach) => {
        apiUser.login(params).then(() => {
            console.log('ok')
        }).catch(() => {
            console.log('error')
        })
    }
}