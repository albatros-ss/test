module.exports = {
    root: './public',
    autoprefixerConfig: {
        browsers: ['last 2 version', '> 1%'],
        cascade: false
    },
    cssunitConfig: {
        type: 'px-to-rem',
        rootSize: 14
    }
};