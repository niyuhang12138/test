// 注意：如果使用ES模块（package.json有"type": "module"）
// 必须用export default；否则用module.exports
module.exports = {
    // 核心：确保types是包含value和name的数组（解决choices参数错误）
    types: [
        {
            value: ':sparkles: feat',
            name: '✨ feat:     新功能'
        },
        {
            value: ':bug: fix',
            name: '🐛 fix:      修复 bug'
        },
        {
            value: ':tada: init',
            name: '🎉 init:     初始化'
        },
        {
            value: ':pencil2: docs',
            name: '✏️  docs:     文档变更'
        },
        {
            value: ':lipstick: style',
            name: '💄 style:    代码样式美化'
        },
        {
            value: ':recycle: refactor',
            name: '♻️  refactor: 重构'
        },
        {
            value: ':zap: perf',
            name: '⚡️ perf:     性能优化'
        },
        {
            value: ':white_check_mark: test',
            name: '✅ test:     测试'
        },
        {
            value: ':rewind: revert',
            name: '⏪️ revert:   回退'
        },
        {
            value: ':package: build',
            name: '📦️ build:    打包'
        },
        {
            value: ':rocket: chore',
            name: '🚀 chore:    构建/工程依赖/工具/其他杂项'
        },
        {
            value: ':construction_worker: ci',
            name: '👷 ci:       CI 相关变更'
        }
    ],

    // 确保scopes是正确的对象数组
    scopes: [
        { name: 'auth' },
        { name: 'user' },
        { name: 'order' },
        { name: 'pay' },
        { name: 'other' }
    ],

    allowCustomScopes: true,
    allowBreakingChanges: [':sparkles: feat', ':bug: fix'],

    // 消息配置
    messages: {
        type: '选择提交类型（↑↓键选择，回车确认）：',
        scope: '选择影响范围（可选，直接回车跳过）：',
        customScope: '输入自定义影响范围：',
        subject: '输入简短描述（必填）：',
        body: '输入详细描述（可选，按enter换行）：',
        breaking: '输入破坏性变更说明（可选）：',
        footer: '输入关联issue（可选，格式：#123）：',
        confirmCommit: '确认提交？(y/n)'
    },

    // 修复换行警告：调整body的换行长度
    bodyLimit: 100, // 与提示中的100字符保持一致
    subjectLimit: 50,
    footerLimit: 100,

    // 确保没有跳过必要配置
    skipQuestions: [],
    breakingPrefix: 'BREAKING CHANGE: ',
    breakingQuestion: '输入破坏性变更说明（可选）：'
}
