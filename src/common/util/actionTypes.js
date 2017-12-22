/**
 * 批量生成redux异步 action type
 * @author cold <coldxuweb@163.com>
 * @since 2017/8/20
 */

class Types {
    constructor() {
        this.types = {};
    }

    /**
     * define type
     * @param {any} type 
     * @memberof Types
     */
    defineType(type) {
        let status = ['SUCCESS', 'PENDING', 'FAIL'];
        this.types[type] = type;
        
        for (let key of status) {
            let newType = `${type}_${key}`;
            this.types[newType] = newType;
        }
    }


    /**
     * 返回 types
     * @returns 
     * @memberof Types
     */
    getType(type) {
        return this.types[type];
    }
}

export default new Types();
