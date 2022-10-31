

const helpers = {
    getTimezone : (t) => {
        return [
            '(GMT -05:00) Eastern Time (US & Canada)',
            '(GMT -12:00) Eniwetok, Kwajalein',
            '(GMT +5:45) Kathmandu, Pokhara',
            '(GMT -2:00) Mid-Atlantic',
            '(GMT +5:00) Ekaterinburg, Islamabad....',
            '(GMT -10:00) Hawaii',
            '(GMT -7:00) Mountain Time (US & Canada)',
            '(GMT +12:00) Auckland, Wellington,...',
        ]
    },

    pad(num, size) {
        var s = "000000000" + num;
        return s.substr(s.length-size);
    }
}

export default helpers
