
let types = {};
let actions = {};

/**
 * 创建异步action
 */
export function createAction(...actions) {
    hanldeAction(actions, false);
    return getActionType();
}

/**
 * 创建同步action
 */
export function createSyncAction(...actions) {
    hanldeAction(actions, true);
    return getActionType();
}

// 获取action typs对象
export function getActionType() {
    return {
        ...types,
        ...actions
    };
}


/**
 * 通用处理逻辑
 */
function hanldeAction(actions, isSync = false) {
    if (isArray(actions[0])) {
        actions[0].forEach(function(action) {
            const { type, handle } = action;
            pushAction(handle);
            pushType(type, isSync);
        });
    } else {
        const [type, handle] = actions;
        pushAction(handle);
        pushType(type, isSync);
    }
}

function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}

/**
 * 推入type
 */
function pushType(type, isSync = false) {
    const status = ['PENDING', 'SUCCESS', 'FAILURE'];
    types[type] = type;

    if (!isSync) {
        for (let key of status) {
            let stat = `${type}_${key}`;
            types[stat] = stat;
        }
    }
}

/**
 * 推入action
 */
function pushAction(action) {
    actions[action.name] = action;
}

