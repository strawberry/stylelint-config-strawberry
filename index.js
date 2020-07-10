module.exports = {
    plugins: [
      'stylelint-scss',
      'stylelint-order'
    ],
    rules: {
      'at-rule-no-unknown': null,
      'declaration-no-important': true,
      indentation: 4,
      'order/properties-alphabetical-order': true,
      'scss/at-rule-no-unknown': true,
      'selector-list-comma-newline-after': 'always',
      'selector-max-id': 0
    }
}
