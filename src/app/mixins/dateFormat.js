export default {
    methods: {
        formatDateToLongDate(date) {
            let d = new Date(date);
            let month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
            return `${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
        }
    }
}