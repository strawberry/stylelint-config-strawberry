module.exports = {
    plugins: [
      'stylelint-scss',
      'stylelint-order'
    ],
    rules: {
      'at-rule-no-unknown': null,
      indentation: 4,
      'order/properties-alphabetical-order': true,
      'scss/at-rule-no-unknown': true,
      'selector-list-comma-newline-after': 'always',
      'selector-max-id': 0
    }
}
