const path = require('path');
const resolvePkg = require('resolve-pkg');

module.exports = {
    "rulesDirectory": [
        path.join(path.dirname(require.resolve('tslint')), 'rules'),
        path.join(path.dirname(require.resolve('codelyzer')), './'),
        path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
        path.join(resolvePkg('tslint-jasmine-rules'), 'dist'),
    ],
    "rules": {
        "ter-indent": [true, 4, { "SwitchCase": 1 }],
        "prefer-const": true,
        "array-bracket-spacing": [true, "always"],
        "trailing-comma": [true, {multiline: 'always', singleline: 'never'}],
        "class-name": true,
        "comment-format": [
            true,
            "check-space",
        ],
        "curly": [ true, "ignore-same-line" ],
        "eofline": true,
        "forin": true,
        "indent": [
            true,
            "spaces",
            4
        ],
        "label-position": true,
        "max-line-length": [
            true,
            140,
        ],
        "member-access": false,
        "member-ordering": [
            true,
            "static-before-instance",
            "variables-before-functions",
        ],
        "no-arg": true,
        "no-bitwise": true,
        "no-console": [
            true,
            "debug",
            "info",
            "time",
            "timeEnd",
            "trace",
        ],
        "no-construct": true,
        "no-debugger": true,
        "no-duplicate-variable": true,
        "no-empty": false,
        "no-eval": true,
        "no-inferrable-types": false,
        "no-shadowed-variable": true,
        "no-string-literal": true,
        "no-switch-case-fall-through": true,
        "no-trailing-whitespace": true,
        "no-unused-expression": true,
        "no-use-before-declare": true,
        "no-var-keyword": true,
        "object-literal-sort-keys": false,
        "one-line": [
            true,
            "check-open-brace",
            "check-catch",
            "check-else",
            "check-whitespace",
        ],
        "quotemark": [
            true,
            "single",
        ],
        "radix": true,
        "semicolon": [
            true,
            "always",
        ],
        "triple-equals": [
            true,
            "allow-null-check",
        ],
        "typedef-whitespace": [
            true,
            {
                "call-signature": "nospace",
                "index-signature": "nospace",
                "parameter": "nospace",
                "property-declaration": "nospace",
                "variable-declaration": "nospace",
            },
        ],
        "variable-name": false,
        "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-separator",
            "check-type",
        ],

        "use-input-property-decorator": true,
        "use-output-property-decorator": true,
        "use-host-property-decorator": true,
        "no-input-rename": true,
        "no-output-rename": true,
        "use-life-cycle-interface": true,
        "use-pipe-transform-interface": true,
        "component-class-suffix": true,
        "directive-class-suffix": true,
        "callable-types": true,
        "import-spacing": true,
        "interface-over-type-literal": true,
        "no-empty-interface": true,
        "no-string-throw": true,
        "unified-signatures": true,
        "no-focused-tests": true,
        "arrow-return-shorthand": true,
        "no-consecutive-blank-lines": true,
        "ordered-imports": {
            "options": {
                "grouped-imports": true
            }
        },
        "deprecation": {
            "severity": "warning"
        },
        "no-any": {
            "severity": "warning"
        },
        "typedef": {
            "options": [ "call-signature", "parameter" ],
            "severity": "warning"
        }
    },
}