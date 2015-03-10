/*
 * WATCH: Run predefined tasks whenever watched file patterns are added, changed or deleted
 */
module.exports = {
    options: {
        spawn: false,
        livereload: true
    },

    /*
     * TARGET:  Build Bolts css file changes
     */
    boltCss: {
        files: [
            '<%= path.src.sass %>/**/*.scss'
        ],
        tasks: [
            'sass:boltCss'
        ]
    },

    /*
     * TARGET:  Build Bolts js file changes
     */
    boltJs: {
        files: '<%= files.boltJs %>',
        tasks: [
            'jshint:boltJs',
            'uglify:boltJs'
        ]
    },

    /*
     * TARGET:  Watch Gruntfile changes and then reload
     */
    gruntfile: {
        files: [
            'Gruntfile.js'
        ],
        options: {
            reload: true
        }
    }
};
