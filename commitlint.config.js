module.exports = {
    extends: ['cz'],
    parserPreset: {
        parserOpts: {
            headerPattern:
                /^(:[\\w+-]+:)\\s*(\\w+)(?:\\(([^)]*)\\))?:\\s*(.*)$/,
            headerCorrespondence: ['emoji', 'type', 'scope', 'subject']
        }
    },
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'perf',
                'test',
                'build',
                'ci',
                'chore',
                'revert',
                'init'
            ]
        ],
        'subject-case': [0] // 禁用主题大小写检查
    }
}
