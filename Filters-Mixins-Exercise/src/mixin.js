export const mixin = {
    data() {
        return {
            moreText: 'More Text'
        }
    },
    
    computed: {
        moreText2() {
            return this.moreText + ' (' + this.moreText.length + ')';
        }
    }
}