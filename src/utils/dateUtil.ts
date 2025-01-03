import moment from "moment"

export const dateUtil = {
    getDate() {
        return moment().format('YYYY-MM-DD HH:mm:ss')
    }
}