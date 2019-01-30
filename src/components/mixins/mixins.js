export const textMixin = {
    computed: {
        text1Computed: function () {
            if (!this.text1) {
                return;
            }
            return [...this.text1].reverse().join('');
        },
        text2Computed: function () {
            if (!this.text2) {
                return;
            }
            return `Test (${this.text2.length})`
        }
    }
};