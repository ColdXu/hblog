/**
 * 派发异步状态 action
 * @author cold <coldxuweb@163.com>
 * @since 2017/8/20
 */

function isPromise(val) {
  return val && typeof val.then === 'function';
}

export default function promiseMiddleware ({ dispatch }) {
    const STATUS = {
        PENDING: 'PENDING',
        SUCCESS: 'SUCCESS',
        FAIL: 'FAIL',
    }

    return next => action => {
        const { type, payload } = action;
        
        if (isPromise(payload)) {
            const status = type.split('_').pop();
            let newAction = {}

            newAction.type = `${type}_${STATUS.PENDING}`;
            newAction.payload = {};
            dispatch(newAction)
            next(newAction);

            // 异步成功/失败处理
            payload.then(data => {
                if (data.code !== 0) {
                    newAction.type = `${type}_${STATUS.FAIL}`;
                } else {
                    newAction.type = `${type}_${STATUS.SUCCESS}`;
                }
                
                newAction.payload = data;

            // 异步http失败处理
            }).catch(err => {
                newAction.type = `${type}_${STATUS.FAIL}`;
                newAction.payload = err;

            // 异步next
            }).then(() => {
                dispatch(newAction)
                next(newAction);
            })
        }
    }
}